import React from "react";
import {MailIcon, PhoneIcon} from '@heroicons/react/solid'
import {Typography} from "./Typography";
import {LockClosedIcon, LockOpenIcon} from "@heroicons/react/outline";

export const CardHeader = ({title, dao, user, address, closed, openLabel}) => {
  return (
    <div className="bg-cardBg flex flex-col px-4 py-2  sm:px-6">
      <div className="flex flex-row justify-between">
      <Typography type="body" Element="body">{dao}</Typography>
        <div className="items-center flex  flex-row">
          <img
            className="h-4 w-4 rounded-full mr-2"
            src="https://avatar.moosty.com/"
            alt=""
          />
          <div className="flex flex-col">
            <Typography type="body" Element="body">{user}</Typography>
          </div>

        </div>
      </div>
      <Typography type="bodyStrong" Element="bodyStrong">{title}</Typography>

      <div className="flex flex-col mt-2">

        <div className="flex flex-row justify-between">

          {!closed ?
            <div className="flex flex-row w-full justify-between">
              <div className="flex flex-row items-center rounded-default py-1 px-2 bg-themeButtonBg">
                <LockOpenIcon className="h-5 w-5 text-white mr-1"/>
                <Typography className="text-themeButtonTextPrimary" type="caption" Element="span">
                  Open
                </Typography>
              </div>
              <div className="justify-end">
                <Typography type="caption" Element="span">
                  {openLabel}
                </Typography>
              </div>
            </div>
            :

            <div className="flex flex-row items-center rounded-default py-1 px-2 bg-surfaceBg">
              <LockClosedIcon className="h-5 w-5 text-textCaption mr-1"/>
              <Typography className="text-textCaption" type="caption" Element="span">
                Closed
              </Typography>

            </div>
          }


        </div>
      </div>
    </div>


  )
}
