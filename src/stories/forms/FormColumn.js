import React from "react";

export const FormColumn = ({children, className}) => {

  return (
    <div className={[
      " ",
      className,
    ].join(" ")}>
      {children}
    </div>
  )
}