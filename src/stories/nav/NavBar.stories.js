import React from "react";
import {NavBar} from "./NavBar";
import {PlusIcon} from "@heroicons/react/solid";
import {Button} from "../Button";

export default {
  title: "Elements/NavBar",
  component: NavBar,
}

export const Playground = (args) => <NavBar {...args}/>
Playground.args = {
  user: {
    name: "Raphael",
    address: "klasjdflkasjdf",
  },
  navigation: [
    {name: 'Votings', onClick: () => alert("Goto Votings"), current: false},
    {name: 'Members', onClick: () => alert("Goto Members"), current: false},
    {name: 'DAOs', onClick: () => alert("Goto DAOs"), current: true},
  ],
  ctaButton: <Button
    label="Create new Dao"
    shadow
    iconBefore
    icon={<PlusIcon className="h-5 w-5 -ml-2 mr-2"/>}
  />,
  userNavigation: [
    {name: 'Create a Dao', onClick: () => alert("Create a dao")},
    {name: 'Create a voting', onClick: () => alert("Create a voting")},
    {name: 'Sign out', onClick: () => alert("Sign out")},
  ],
  invitations: [
    {
      dao: "LiskCenterUtrecht",
      id: "aksldjflksjdflkjdsf",
    }
  ],
}

export const LoggedInInvited = () => <div>
  <NavBar/>
</div>


export const LoggedIn = () => <div>
  <NavBar loggedIn/>
</div>