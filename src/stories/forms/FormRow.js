import React from "react";

export const FormRow = ({children, full, columnsTwo, className, divider}) => {
  const ColumnsTwo = ["md:grid md:grid-cols-2"].join(" ");
  const Divider = ["md:divide-x-2 md:divide-formDivider"].join(" ");

  return (
    <div>
      <div className={["flex flex-row justify-between",
        className,
      ].join(" ")}>
        {children}
      </div>
    </div>
  )
}


// w-full block flex flex-row my-2 justify-center