import React from "react";
import {ChevronRightIcon, HomeIcon} from '@heroicons/react/solid'
import PropTypes from "prop-types";
import {CardFooter} from "./cards/CardFooter";

export const BreadCrumbs = ({className, crumbs}) => (
  <nav className={[
    className,
    "flex",
  ].join(" ")}
       aria-label="Breadcrumb">
    <ol className="flex items-center space-x-4">
      {crumbs.map((crumb, i) => (
        <li key={crumb.name}>
          <div className="flex items-center">
            {i > 0 && <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true"/>}
            <span
              onClick={crumb.onClick}
              className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 cursor-pointer"
              aria-current={crumb.current ? 'page' : undefined}
            >
              {i === 0 && <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true"/>}
              {i === 0 && <span className="sr-only">{crumb.name}</span>}
              {i > 0 && crumb.name}
            </span>
          </div>
        </li>
      ))}
    </ol>
  </nav>
)

BreadCrumbs.propTypes = {
  className: PropTypes.string,
  crumbs: PropTypes.array,
};

BreadCrumbs.defaultProps = {
  className: "",
  crumbs: [
    {
      name: "Home",
      onClick: () => console.log("goto home"),
    },
    {
      name: "Page",
      onClick: () => console.log("goto Page"),
    },
    {
      name: "Sub Page",
      onClick: () => console.log("goto sub page"),
      current: true,
    },
  ]
};