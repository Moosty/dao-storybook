import React from "react";
import {Tooltip} from "./Tooltip";
import {Button} from "./Button";
import {Typography} from "./Typography";
import {Card} from "./Card";

export default {
    title: "Elements/Tooltip",
    component: Tooltip,
    argTypes: {backgroundColor: 'color'},
}

export const Template = (args) => <Tooltip {...args} />

export const All = () => <div className="m-4">

    <Tooltip description="dit is een tooltip" ><Card /></Tooltip>
</div>