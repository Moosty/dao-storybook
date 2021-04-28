import React from "react";

export const Container = ({children, className}) => (<div
    className={[
      "w-full",
      "mx-auto",
      "px-4",
      "sm:px-6",
      "lg:px-8",
      className,
    ].join(" ")}>
    {children}
  </div>
)