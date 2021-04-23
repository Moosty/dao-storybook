import React from "react";

export const FormSection = ({children}) => {

  return (
    <div       className="md:grid md:grid-cols-2 my-2 justify-center md:divide-x-2 md:divide-formDivider h-screen">
      {children}
    </div>
  )
}