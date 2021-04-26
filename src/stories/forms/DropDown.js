import React from "react";
import {useForms} from "../../hooks/forms";

export const DropDown = ({id, name, className, disabled, error, readOnly, rounded}) => {

  const { formClass } = useForms({disabled, error, readOnly});
  const appearance = ["rounded-default"].join(" ")

  return (<div className="">
      <select
        id={id}
        name={name}
        className={[
          "shadow-sm ",
          "block",
          "w-full",
          className,
          formClass,
          rounded ?  appearance : " ",
        ].join(" ")}
      >
        <option>One man One vote</option>
        <option>Quadratic Voting</option>
        <option>New Member Voting</option>
      </select>
    </div>
  )
}