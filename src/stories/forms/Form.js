import React from "react";

export const Form = ({children, className, ...props}) => {

  return (
    <div className={[
      "my-2 pb-20 justify-center ",
      className
    ].join(" ")}
      {...props}
    >
      {children}
    </div>
  )
}