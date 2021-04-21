import React from "react";

import { DropDown } from "./DropDown";

export default {
    title: "Forms/DropDown (niet dynamisch)",
    component: DropDown,
    argTypes: { backgroundColor: 'control' }
}

export const Template = (args) => <DropDown {...args} />

export const All = () => <div>
    <DropDown />
</div>