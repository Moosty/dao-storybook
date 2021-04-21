import {ExclamationCircleIcon, SelectorIcon} from '@heroicons/react/solid'
import React from "react";
import {CalendarIcon, InformationCircleIcon} from "@heroicons/react/outline";

export const SimpleInput = ({
                                disabled,
                                defaultValue,
                                placeholder,
                                secondary,
                                id,
                                name,
                                error,
                                infoIcon,
                                readOnly,
                                hover,
                                focused,
                                shadow,
                                datePicker,
                                description,
                                selector,
                                ...props
                            }) => {
    const defaultClass = [
        'border-formDivider',
        'hover:border-formHoverBorder',
        'text-textPlaceholder'].join(" ");
    const hoverClass = [
        'border-formHoverBorder',
        'text-textHover'].join(" ");
    const focusedClass = [
        'border-formActive',
        'text-textHover'].join(" ");
    const errorClass = [
        'border-formError',
        'text-red-900',
        'placeholder-red-300',
        'focus:outline-none',
        'text-textError'].join(" ");
    const readOnlyClass = [
        'bg-formReadOnly',
        'border-formReadOnly',
        'text-textDisabled'].join(" ");
    const disabledClass = [
        'bg-formDisabled',
        'border-formDisabled',
        'focus:border-formDisabled',
        'text-textDisabled'].join(" ");
    const shadowClass = [
        'shadow-defaultPrimary',
    ].join(" ");

    return (
        <div>
            <div className="flex flex-row">
                <label htmlFor="email" className="block text-sm font-medium text-textBody mt-2 mb-2">
                    {props.label}
                </label>
                {/*Information Icon*/}
                {infoIcon &&
                <InformationCircleIcon className="text-textPlaceHolder hover:text-textBody mt-2 ml-1 h-5 w-5"/>}
            </div>
            <div className=" relative rounded-md shadow-sm">
                <input
                    type="text"
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    className={[
                        "block w-full pr-10 mb-0   sm:text-sm rounded-md bg-white",
                        disabled ? disabledClass : readOnly ? readOnlyClass : error ? errorClass : focused ? focusedClass : hover ? hoverClass : defaultClass,
                        shadow ? shadowClass : " ",
                    ].join(" ")}
                    {...props}
                />
                {datePicker && <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <CalendarIcon className="h-5 w-5 text-textPlaceHolder hover:text-textBody"/>
                </div>
                }
                {error && <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ExclamationCircleIcon className="h-5 w-5 text-formError" aria-hidden="true"/>
                </div>}
                {selector && <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <SelectorIcon className="h-5 w-5 text-textPlaceHolder hover:text-formError" aria-hidden="true"/>
                </div>}

            </div>
            {error && <div className="flex flex-row mt-0">
                <ExclamationCircleIcon className="mt-2 mr-1 ml-1 h-5 w-5 text-formError" aria-hidden="true"/>
                <p className="mt-2 text-sm text-formError" id={`${id}-error`}>
                    {props.errorMessage}
                </p></div>}
            {description && <div className="flex flex-row">
                <p className="text-sm text-textPlaceHolder">
                    {props.descriptionMessage}
                </p></div>}
        </div>
    )
}
