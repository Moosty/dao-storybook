import React from "react";
import {useForms} from "../../hooks/forms";

export const DropDown = ({className, disabled, error, readOnly, rounded, options, selected, ...props}) => {
  const { formClass } = useForms({disabled, error, readOnly});
  return (
      <select
        className={[
          "shadow-sm ",
          "block",
          "w-full",
          className,
          formClass,
          rounded && "rounded-default",
        ].join(" ")}
        {...props}
      >
        {options?.map(option => <option selected={selected === option.id} value={option.id}>{option.label}</option>)}
      </select>
  )
}