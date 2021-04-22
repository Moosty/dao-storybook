import React from "react";

export const IconButton = ({children}) => {
  return (
    <button
      type="button"
      className="ml-2 inline-flex items-center w-10 h-10 p-1 border border-transparent rounded-full shadow-sm text-textPlaceHolder bg-transparent hover:bg-surfaceIconBg focus:outline-none "
    >
      {children}
    </button>
  )
}