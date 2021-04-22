import React, {useEffect, useState} from "react";

// TODO Hoe verander ik de kleur van de tekst? Het lijkt alsof de typography ze overrulted.

export const Tooltip = ({dark, light, children, description, ...props}) => {
    const [visibility, setVisibility] = useState(false);
    const darkClass =[ "bg-textHeadings", "text-white" ].join(" ");
    const lightClass =["bg-surfaceBg", ].join(" ");

        return (
        <div
            onMouseEnter={() => setVisibility(true)}
            onMouseLeave={() => setVisibility(false)}
            >
            {/*//het element waar je de tooltip van de tooltip*/}
            {children}
            <div className={[
                visibility ? "block" : "hidden",
                "w-max text-small text-center rounded-md shadow-defaultPrimary absolute",
                dark ? darkClass : lightClass,
                "",
            ].join(" ")}>
                {/*TEKST VAN DE TOOLTIP*/}
                {description}            </div>
        </div>
    )
}