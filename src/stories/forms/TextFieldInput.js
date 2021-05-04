import React from "react";
import {useForms} from "../../hooks/forms";

export const TextFieldInput = ({disabled, error, readOnly, ...props}) => {
  const {formClass} = useForms({disabled, error, readOnly})

  return <textarea
    rows={props.rows || 3}
    className={[
      "mt-1",
      "block",
      "w-full",
      "sm:text-sm",
      "rounded-default",
      formClass,
    ].join(" ")}
    disabled={disabled || readOnly}
    {...props}
  />
}