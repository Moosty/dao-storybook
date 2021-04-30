import React from "react";
import {CalendarIcon, CashIcon, LocationMarkerIcon, UsersIcon} from "@heroicons/react/solid";

export const AccountProjectList =({}) => {
  return(

<div className="bg-white shadow overflow-hidden sm:rounded-md">
  <ul className="divide-y divide-gray-200">
    {projects.map((project) => (
      <li key={project.id}>
        <a href="#" className="block hover:bg-gray-50">
          <div className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-themeNavBarBg truncate">{project.title}</p>
              <div className="ml-2 flex-shrink-0 flex">
                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {project.category}
                </p>
              </div>
            </div>
            <div className="mt-2 sm:flex sm:justify-between">
              <div className="sm:flex">
                <p className="flex items-center text-sm text-gray-500">
                  <UsersIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  {project.owner}
                </p>
                <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                  <CashIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  {project.target}
                </p>
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <p>
                  Closing on <time dateTime={project.closeDate}>{project.closeDateFull}</time>
                </p>
              </div>
            </div>
          </div>
        </a>
      </li>
    ))}
  </ul>
</div>
  )}

const projects = [
  {
    id: 1,
    title: 'Back End Developer',
    owner: 'Moosty',
    target: '800.990',
    category: 'Gambling',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 2,
    title: 'Front End Developer',
    owner: 'LCU Community',
    target: '560',
    category: 'Finance',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 3,
    title: 'User Interface Designer',
    owner: 'Endro Labs',
    target: '30.990',
    category: 'Gaming',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
  },
]