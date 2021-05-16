import React from "react";
import {DaoInvitation} from "../DaoInvitation";
import {Disclosure} from "@headlessui/react";
import PropTypes from "prop-types";

export const MobileNavBar = ({navigation, user, invitations, userNavigation}) => (
  <Disclosure.Panel className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {navigation?.map((item) => (
        <span
          key={item.name}
          onClick={item.href}
          className={[
            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium cursor-pointer'
          ].join(" ")}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </span>
      ))}
    </div>
    <div className="pt-4 pb-3 border-t border-gray-700">
      <div className="flex items-center px-5 sm:px-6">
        <div className="flex-shrink-0">
          <img className="h-5 w-5 rounded-full" src={user?.address} alt=""/>
        </div>
        <div className="ml-3">
          <div className="text-base font-medium text-white">{user?.name}</div>
        </div>
      </div>
      <div className="mt-3 px-2 space-y-1 sm:px-3">
        {userNavigation?.map((item) => (
          <span
            key={item.name}
            onClick={item.href}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
          >
            {item.name}
          </span>
        ))}
        {invitations?.map(invite => (
        <div key={invite.id} className="rounded-default">
          <DaoInvitation dao={invite.dao} id={invite.id} onClick={invite.onClick}/>
        </div>))}
      </div>
    </div>
  </Disclosure.Panel>
)

MobileNavBar.propTypes = {
  navigation: PropTypes.array,
  userNavigation: PropTypes.array,
  invitations: PropTypes.array,
  user: {
    name: PropTypes.string,
    address: PropTypes.string,
  },
}

MobileNavBar.propTypes = {
  navigation: [],
  userNavigation: [],
  invitations: [],
  user: null,
}