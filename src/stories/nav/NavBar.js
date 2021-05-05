import React from 'react'
import {Disclosure} from '@headlessui/react'
import {MobileNavBar} from "./Mobile";
import {NavBarMenu} from "./Menu";
import PropTypes from "prop-types";

export const NavBar = ({logo, invitations, user, navigation, userNavigation, ctaButton, onLoginClick, onRegisterClick}) => (
  <Disclosure as="nav" className="bg-themeNavBarBg">
    {({open}) => (
      <>
        <NavBarMenu
          navigation={navigation}
          userNavigation={userNavigation}
          invitations={invitations}
          user={user}
          open={open}
          ctaButton={ctaButton}
          logo={logo}
          onLoginClick={onLoginClick}
          onRegisterClick={onRegisterClick}
        />
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

NavBar.propTypes = {
  invitations: PropTypes.array,
  navigation: PropTypes.array,
  userNavigation: PropTypes.array,
  user: PropTypes.object,
}