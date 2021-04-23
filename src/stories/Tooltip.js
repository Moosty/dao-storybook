import React, {useState} from "react";

export const Tooltip = ({dark, light, children, description, ...props}) => {
    const [visibility, setVisibility] = useState(false);
    const darkClass =[ "bg-textHeadings", "text-white" ].join(" ");
    const lightClass =["bg-surfaceBg", ].join(" ");

        return (
        <div
            onMouseEnter={() => setVisibility(true)}
            onMouseLeave={() => setVisibility(false)}
            >
            {children}
            <div className={[
                visibility ? "block" : "hidden",
                "w-max max-w-sm p-2 px-4 text-small text-center rounded-default shadow-defaultPrimary absolute z-50",
                dark ? darkClass : lightClass,
                "",
            ].join(" ")}>
                {description}</div>
        </div>
    )
}