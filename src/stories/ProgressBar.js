import React from "react";

export const ProgressBar = ({}) => {
  return (
    <div className="relative pt-1">
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-textPlaceHolder">
        <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-themeButtonBgSecondary"></div>
      </div>
    </div>
  )
}