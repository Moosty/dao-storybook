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

    <Button
        label="Button"
        onClick={() => {
        }}
    />

    <Tooltip
        title="ik ben een tooltip"
        dark
    >
        <Typography className="p-2" type="caption">Dit is een tooltip</Typography>
    </Tooltip>

    <Tooltip
        title="For a Yes/No voting to pass, it must fullfil two conditions: 1) The number of votes reaches or exceeds the minimum required votes, AND 2) The number of YES votes reaches or exceeds the minimum required YES votes."
        light
    > <Typography className="p-2" type="caption">Dit is een tooltip</Typography>
    </Tooltip>

    <Tooltip title="8 out of 16" dark>
        <Card />
    </Tooltip>
</div>