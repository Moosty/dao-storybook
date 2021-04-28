import React, {Fragment} from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import {PlusIcon} from '@heroicons/react/solid'
import {appWidth} from "../../shared/styles";
import {Button} from "../Button";
import {Typography} from "../Typography";
import {DaoInvitation} from "../DaoInvitation";
import {MobileNavBar} from "./Mobile";
import {NavBarMenu} from "./Menu";

const user = {
  name: 'Raphael Cornelis',
  address: "klsdjflkasjdf",
  email: 'tom@example.com',
  imageUrl:
    'https://avatar.moosty.com/adddddreeessssssss',
}

const navigation = [
  {name: 'Votings', href: '#', current: false},
  {name: 'Members', href: '#', current: false},
  {name: 'DAOs', href: '#', current: true},
]

const userNavigation = [
  {name: 'Create a Dao', href: '#'},
  {name: 'Create a voting', href: '#'},
  {name: 'Sign out', href: '#'},
]

export const NavBar = ({invitations, loggedIn, invitedDao, user, navigation, userNavigation}) => (
  <Disclosure as="nav" className="bg-themeNavBarBg">
    {({open}) => (
      <>
        <NavBarMenu
          navigation={navigation}
          userNavigation={userNavigation}
          loggedIn={loggedIn}
          invitedDao={invitedDao}
          invited={invitations}
          user={user}
          open={open}
        />
        {/*Mobile*/}
        <MobileNavBar
          navigation={navigation}
          userNavigation={userNavigation}
          invitations={invitations}
          user={user}
        />
      </>
    )}
  </Disclosure>
)
