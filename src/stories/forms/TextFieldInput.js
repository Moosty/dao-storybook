import React from "react";
import {ExclamationCircleIcon} from "@heroicons/react/solid";

export const TextFieldInput = ({placeholder, description, disabled,error,readOnly, ...props}) => {

    const defaultClass = [
        'border-formDivider',
        'hover:border-formHoverBorder',
        'text-textPlaceholder',
        "shadow-sm", "hover:border-formHoverBorder", "border-formDivider", "text-textPlaceholder"].join(" ");
    const errorClass = [
        'border-formError',
        'text-formError',
        'placeholder-formError',
        'text-textError'
    ].join(" ");
    const disabledClass = [
        'bg-formDisabled',
        'border-formDisabled',
        'text-textDisabled'
    ].join(" ");
    const readOnlyClass = [
        'bg-formReadOnly',
        'border-formReadOnly',
        'text-textDisabled',
    ].join(" ");

    return (
        <div>
            <div className="">
                <label htmlFor="about" className="block  text-textBody">
                    {props.title}
                </label>
                <div className="mt-1">
                    <textarea
                        id="about"
                        name="about"
                        placeholder={placeholder}
                        rows={3}
                        className={["block w-full sm:text-sm  rounded-default",
                            disabled ? disabledClass : readOnly ? readOnlyClass : error ? errorClass : defaultClass,
                        ].join(" ")}
                        defaultValue={''}
                        disabled={disabled}
                    />
                </div>
                {description && <p className="mt-2 text-sm text-textPlaceHolder">{props.descriptionText}</p>}
                {error && <div className="flex flex-row mt-0">
                    <ExclamationCircleIcon className="mt-2 mr-1 ml-1 h-5 w-5 text-formError" aria-hidden="true"/>
                    <p className="mt-2 text-sm text-formError" id={`-error`}>
                        {props.errorMessage}
                    </p></div>}
            </div>

        </div>
    )
}