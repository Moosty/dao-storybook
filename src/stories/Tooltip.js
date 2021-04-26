import React, {useState} from "react";

export const Tooltip = ({dark, light, children, description, ...props}) => {
  const [visibility, setVisibility] = useState(false);
  const darkClass = ["bg-textHeadings", "text-white"].join(" ");
  const lightClass = ["bg-surfaceBg",].join(" ");
  const noBackground = [" "].join(" ");

  return (
    <div
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
    >
      {children}
      <div className={[
        visibility ? "block" : "hidden",
        "absolute left-5 right-5 md:left-auto md:right-auto max-w-sm p-2 px-4 text-small text-center rounded-default shadow-defaultPrimary  z-50",
        dark ? darkClass : light ? lightClass : noBackground,
        "",
      ].join(" ")}>
        {description}</div>
    </div>
  )
}