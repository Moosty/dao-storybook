import React from "react";

import { NavBar } from "./NavBar";

export default {
    title: "Elements/NavBar",
    component: NavBar,
    argTypes: { backgroundColor: 'control'},
}

export const LoggedOut = (args) => <NavBar   {...args}/>

export const LoggedInInvited = () => <div>
    <NavBar loggedIn invited  />
</div>


export const LoggedIn = () => <div>
    <NavBar loggedIn   />
</div>