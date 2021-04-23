import React from "react";

import { NavBar } from "./NavBar";

export default {
    title: "Elements/NavBar",
    component: NavBar,
    argTypes: { backgroundColor: 'control'},
}

export const Template = (args) => <NavBar invited {...args}/>

export const Invited = () => <div>
    <NavBar  />
</div>