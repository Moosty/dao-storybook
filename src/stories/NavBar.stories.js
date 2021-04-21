import React from "react";

import { NavBar } from "./NavBar";

export default {
    title: "Elements/NavBar",
    component: NavBar,
    argTypes: { backgroundColor: 'control'},
}

export const Template = (args) => <NavBar {...args}/>

export const all = () => <div>
    <NavBar />
</div>