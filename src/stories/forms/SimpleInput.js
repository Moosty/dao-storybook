import {ExclamationCircleIcon, SelectorIcon} from '@heroicons/react/solid'
import React, {forwardRef} from "react";
import {useForms} from "../../hooks/forms";

export const SimpleInput = forwardRef(({
                              disabled,
                              error,
                              infoIcon,
                              readOnly,
                              focused,
                              shadow,
                              datePicker,
                              selector,
                              number,
                              className,
                              ...props
                            }, ref) => {
  const {formClass} = useForms({disabled, readOnly, error});

  return (
    <div className="relative rounded-default shadow-sm">
      <input
        ref={ref}
        disabled={disabled || readOnly}
        type={datePicker ? "date" : number ? "number" : "text"}
        className={[
          "block w-full mb-0 sm:text-sm rounded-default bg-white",
          formClass,
          shadow && "shadow-defaultPrimary",
          focused && "focus:border-formActive",
          className,
        ].join(" ")}
        {...props}
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        {error && <ExclamationCircleIcon className="h-5 w-5 text-formError" aria-hidden="true"/>}
        {selector && <SelectorIcon className="h-5 w-5 text-textPlaceHolder hover:text-formError" aria-hidden="true"/>}
      </div>
    </div>
  )
})
