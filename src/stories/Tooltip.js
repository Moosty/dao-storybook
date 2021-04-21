import React, {useEffect, useState} from "react";

// TODO Hoe verander ik de kleur van de tekst? Het lijkt alsof de typography ze overrulted.

export const Tooltip = ({dark, light, ...props}) => {
    const [visibility, setVisibility] = useState(false);
    const darkClass =[ "bg-textHeadings", "text-white" ].join(" ");
    const lightClass =["bg-surfaceBg", ].join(" ");

    useEffect(() => {
        setVisibility(true);
        }, [visibility]
    );

    return (
        <div className={[
            "w-max mt-2  text-small text-center rounded-md shadow-defaultPrimary",
            dark ? darkClass : lightClass,
            "",
        ].join(" ")}>
            {props.children}
        </div>
    )
}