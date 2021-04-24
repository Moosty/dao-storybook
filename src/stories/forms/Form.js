import React from "react";

export const Form = ({children}) => {

  return (
    <div className="md:grid md:grid-cols-2 my-2 pb-20 justify-center md:divide-x-2 md:divide-formDivider md:h-screen">
      {children}
    </div>
  )
}