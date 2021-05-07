import React from "react";
import {CalendarIcon, CashIcon, LocationMarkerIcon, UsersIcon} from "@heroicons/react/solid";

import {crowdFundStates, categories, projectImages} from "../shared/global.crowdfund";
import {CrowdCardImage} from "./crowd/CrowdCardImage";
import {Typography} from "./Typography";
import {ProgressBar} from "./ProgressBar";

export const AccountProjectList = ({projects}) => {
  return (

    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {projects.map(({
                         gradient,
                         id,
          unit,
                         budget,
                         totalRaised,
                         title,
                         subTitle,
                         category,
                         owner,
                         targetAmount,
                         durationProject,
                         projectUrl,
                         image,
                         closeDate,
                         closeDateFull,
                         state,
                         backers,
                         donatedAmount,
                         message,
                         viewer,
                         maxVoteWeight,
                         notVoteWeight,
                         ownerMessage,
                         voteResult,
                         time,
                         percentage,


                       }) => (
          <li key={id}>
            <a href="#" className="block hover:bg-gray-50">
              <div className="flex flex-row justify-between items-center py-2">
                <div className="flex flex-row items-center w-1/5 ">
                <CrowdCardImage className="w-10 h-10 rounded-default"/>
                <div>
                  <div className=" py-2 px-2">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <Typography type="bodyStrong" className="text-themeNavBarBg" Element="span">{title}</Typography>
                        <div className="flex flex-row item-center">
                          <p className="flex  text-sm text-gray-500 mr-2">
                            <UsersIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                            {backers.length}
                          </p>
                          <p className="flex items-center text-sm text-gray-500 ">
                            <CashIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                            {targetAmount}
                          </p>
                        </div>
                      </div>



                    </div>
                  </div>

                  </div>
                </div>
                <div className="w-1/3">
                <ProgressBar classname="flex-end" target={targetAmount} current={totalRaised} unit={unit} state={state}/>
                </div>
                <div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p
                      className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {categories[category]}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                    <p>
                      Closing on <time dateTime={closeDate}>{closeDateFull}</time>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
