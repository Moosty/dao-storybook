import React from "react";

export const Container = ({children, className}) => {
  return <div className={[
    className,
    "w-full",
    "mx-auto",
    "px-4",
    "sm:px-6",
    "lg:px-8",
    ].join(" ")}>{children}</div>
}
