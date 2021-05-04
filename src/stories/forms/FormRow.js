import React from "react";

export const FormRow = ({children, className}) => <div
  className={[
    "flex lg:flex-row lg:space-x-2",
    className,
  ].join(" ")}>
  {children}
</div>
