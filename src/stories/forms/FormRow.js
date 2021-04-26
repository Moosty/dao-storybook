import React from "react";

export const FormRow = ({children, full, columnsTwo, className, divider}) => {
  const ColumnsTwo = ["md:grid md:grid-cols-2"].join(" ");
  const Divider = ["md:divide-x-2 md:divide-formDivider"].join(" ");

  return (<div className={["flex lg:flex-row lg:space-x-2",
        className,
      ].join(" ")}>
        {children}
      </div>
  )
}


// w-full block flex flex-row my-2 justify-center