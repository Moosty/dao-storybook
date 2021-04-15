import React from "react";
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import {Typography} from "./Typography";

export const CardHeader = () => {
  return (
    <div className="bg-white flex flex-col px-4 py-2  sm:px-6">
      <Typography type="body" Element="body">Lambo buying group</Typography>
      <Typography type="bodyStrong" Element="bodyStrong">Should we buy a red lambo or rather a green lambo?</Typography>

        <div className="items-center flex my-2 flex-row">
          <img
            className="h-4 w-4 rounded-full mr-2"
            src="https://avatar.moosty.com/"
            alt=""
          />
          <Typography type="body" Element="body">Raphael Cornelis</Typography>
      </div>

        </div>

      )
}
