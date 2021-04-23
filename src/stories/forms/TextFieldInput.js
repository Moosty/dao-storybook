import React from "react";
import {ExclamationCircleIcon} from "@heroicons/react/solid";
import {useForms} from "../../hooks/forms";

export const TextFieldInput = ({placeholder, description, disabled, error, readOnly, ...props}) => {

  const {formClass} = useForms({disabled, error, readOnly})

  return (
    <div>
        <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      placeholder={placeholder}
                      rows={3}
                      className={[
                        "block w-full sm:text-sm  rounded-default",
                        formClass,
                      ].join(" ")}
                      defaultValue={''}
                      disabled={disabled || readOnly}
                    />
        </div>

      </div>
  )
}