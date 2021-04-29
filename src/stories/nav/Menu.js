import React, {Fragment} from "react";
import {appWidth} from "../../shared/styles";
import {Disclosure, Menu, Transition} from "@headlessui/react";
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import {Button} from "../Button";
import {DaoInvitation} from "../DaoInvitation";

export const NavBarMenu = ({navigation, userNavigation, invitations, user, open, ctaButton}) => {

  return (
    <div className={[appWidth, "px-4", "sm:px-6", "lg:px-8"].join(" ")}>
      <div className="flex justify-between h-16">
        <div className="flex justify-between md:justify-start w-full">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/images/logo.png"
              className="block h-8 w-auto"
              alt="PLAO"
            />
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {navigation?.map((item, i) => (
              <span
                key={`${item.name}-${i}`}
                onClick={item.href}
                className={[
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                  'text-sm',
                  'font-medium',
                  'cursor-pointer',
                ].join(" ")}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </span>
            ))}
          </div>
          <div className="-ml-2 mr-2 flex items-center md:hidden">
            {/* Mobile menu button */}
            <Disclosure.Button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {open ? (<XIcon className="block h-6 w-6" aria-hidden="true"/>) : (<MenuIcon className="block h-6 w-6" aria-hidden="true"/>)}
            </Disclosure.Button>
          </div>
        </div>
        <div className="flex items-center">
          {user &&
          <div className="hidden md:flex flex-shrink-0">
            {ctaButton}
          </div>}
          <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
            {/* Profile dropdown */}
            {user ? <Menu as="div" className="ml-3 relative">
                {({open}) => (
                  <>
                    <div>
                      <Menu.Button
                        className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={`https://avatar.moosty.com/${user?.address}`}
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="origin-top-right absolute right-0 w-56 mt-2  rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        {userNavigation?.map((item, i) => (
                          <Menu.Item key={`${item.name}--${i}`}>
                            {({active}) => (
                              <span
                                onClick={item.href}
                                className={[
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                                ].join(" ")}
                              >
                              {item.name}
                            </span>
                            )}
                          </Menu.Item>
                        ))}
                        {invitations?.map(invite => (
                          <div key={invite.id} className="rounded-default">
                            <DaoInvitation dao={invite.dao} id={invite.id}/>
                          </div>))}
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu> :
              <div className="flex flex-row space-x-4">
                <Button shadow size="small" label="Log in"/>
                <Button shadow size="small" secondary label="Register"/>
              </div>}
          </div>
        </div>
      </div>
    </div>
  )
}