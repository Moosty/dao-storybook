import {Button} from "../../stories";
import {PlusIcon} from "@heroicons/react/solid";
import React from "react";

export const navBarArgs = {
  user: {
    name: "Raphael",
    address: "klasjdflkasjdf",
  },
  logo: <img
    src="/images/logo.png"
    className="block h-6 w-auto"
    alt="PLAO"
  />,
  navigation: [
    {name: 'Crowdfunds', onClick: () => alert("Go to Crowdfunds"), current: true},
    {name: 'Explore Projects', onClick: () => alert("Goto DAOs"), current: false},
    {name: 'My Projects', onClick: () => alert("Goto Members"), current: false},
  ],
  ctaButton: <Button
    label="Start new Crowdfund"

    iconBefore
    icon={<PlusIcon className="h-5 w-5 -ml-2 mr-2"/>}
  />,
  userNavigation: [
    {name: 'My Account', onClick: () => alert("Go to my account")},
    {name: 'Sign out', onClick: () => alert("Sign out")},
  ],
  invitations: [
    {
      dao: "LiskCenterUtrecht",
      id: "aksldjflksjdflkjdsf",
    }
  ],
}