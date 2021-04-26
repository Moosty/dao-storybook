import {ExclamationCircleIcon, SelectorIcon} from '@heroicons/react/solid'
import React from "react";
import {CalendarIcon, InformationCircleIcon} from "@heroicons/react/outline";
import {useForms} from "../../hooks/forms";

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
                              number,
                              className,
                              ...props
                            }) => {
  const {formClass} = useForms({disabled, readOnly, error});

  const shadowClass = [
    'shadow-defaultPrimary',
  ].join(" ");

  return (
    <div>
      <div className=" relative rounded-default shadow-sm">
        <input
          disabled={disabled || readOnly}
          type={datePicker ? "date" : number ? "number" : "text"}
          name={name}
          id={id}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={[
            "block w-full mb-0   sm:text-sm rounded-default bg-white",
            formClass,
            shadow ? shadowClass : " ",
            focused ? "focus:border-formActive" : " ",
            className,
          ].join(" ")}
          {...props}
        />

        {/*{datePicker && <div className="absolute inset-y-0 right-0 pr-3 flex items-center">*/}
        {/*  <CalendarIcon className="h-5 w-5 text-textPlaceHolder hover:text-textBody"/>*/}
        {/*</div>*/}
        {/*}*/}
        {error && <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon className="h-5 w-5 text-formError" aria-hidden="true"/>
        </div>}
        {selector && <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <SelectorIcon className="h-5 w-5 text-textPlaceHolder hover:text-formError" aria-hidden="true"/>
        </div>}
      </div>
    </div>
  )
}
