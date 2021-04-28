import React from "react";
import {Typography} from "../Typography";
import {Button} from "../Button";

export const CrowdCardContent = ({}) => {
  return (
    <div>
    <div className="relative ">
        <img
          className="w-full h-24 object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          alt=""
        />

        <div className="absolute inset-0 bg-themeButtonBgSecondary" style={{mixBlendMode: 'multiply'}} aria-hidden="true"/>


    </div>
      <div className={["px-4",
    "flex-grow",
    "bg-cardBg",
    "w-full",
    "py-2",
      ].join(" ")}>
        test

      </div>
    </div>
  )
}