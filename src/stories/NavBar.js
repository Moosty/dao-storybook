/* This example requires Tailwind CSS v2.0+ */
import React, {Fragment} from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {BellIcon, MenuIcon, XIcon} from '@heroicons/react/outline'
import {PlusIcon} from '@heroicons/react/solid'
import {appWidth} from "../shared/styles";
import {Button} from "./Button";
import {Typography} from "./Typography";
import {DaoInvitation} from "./DaoInvitation";
import {Modal} from "./modals/Modal";

const user = {
  name: 'Raphael Cornelis',
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const NavBar = ({invited, loggedIn, invitedDao, address = "21"}) => {
  return (
    <Disclosure as="nav" className="bg-themeNavBarBg">
      {({open}) => (
        <>
          <div className={[appWidth, "px-4", "sm:px-6", "lg:px-8"].join(" ")}>

            <div className="flex justify-between h-16">
              <div className="flex justify-between md:justify-start w-full">

                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true"/>
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                    )}
                  </Disclosure.Button>
                </div>

              </div>
              <div className="flex items-center">
                {loggedIn &&
                <div className="hidden md:flex flex-shrink-0">
                  <Button
                    label="Create new Dao"
                    shadow
                    iconBefore={<PlusIcon/>}
                    icon={<PlusIcon className="h-5 w-5 -ml-2 mr-2"/>}
                    size=""
                  >
                  </Button>
                </div>
                }
                <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">


                  {/* Profile dropdown */}
                  {loggedIn ?
                    <Menu as="div" className="ml-3 relative">
                      {({open}) => (
                        <>
                          <div>
                            <Menu.Button
                              className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt=""/>
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
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({active}) => (
                                    <a
                                      href={item.href}
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                      )}
                                    >
                                      {item.name}
                                    </a>
                                  )}
                                </Menu.Item>

                              ))}
                              {!invited ?

                                <div className="">

                                </div>
                                :
                                <div>
                                  <Typography type="body" Element="span">
                                  </Typography>
                                  <DaoInvitation/>


                                </div>


                              }
                            </Menu.Items>

                          </Transition>
                        </>
                      )}
                    </Menu>
                    :
                    <div className="flex flex-row space-x-4">
                      <Button shadow size="small" label="Log in"/>
                      <Button shadow size="small" secondary label="Register"/>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
          {/*Mobile*/}
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5 sm:px-6">
                <div className="flex-shrink-0">
                  <img className="h-5 w-5 rounded-full" src={address} alt=""/>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">{user.name}</div>
                </div>

              </div>
              <div className="mt-3 px-2 space-y-1 sm:px-3">
                {userNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
                {invited ?

                  <div className="rounded-default">
                  </div>
                  :
                  <div className="rounded-default">
                    <Typography type="body" Element="span">
                    </Typography>
                    <DaoInvitation Dao={invitedDao} address={address}/>
                  </div>
                }
              </div>

            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
