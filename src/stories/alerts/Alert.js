import React from "react";
import {CheckCircleIcon, ExclamationIcon, XIcon} from '@heroicons/react/solid'
import {ExclamationCircleIcon} from "@heroicons/react/solid";

export const Alert = ({warning, error, success, label, topRight, topLeft, bottomLeft}) => {

  return (<div className={["rounded-default p-4 z-50 shadow-defaultPrimary  w-1/3",
      error ? "bg-dangerBackground" : warning ? "bg-warningBackground" : "bg-successBackground",
      topRight ? "absolute top-20 right-5" : topLeft ? "absolute top-20 left-5" : bottomLeft ? "absolute bottom-0 left-5" : " ",
    ].join(" ")}>
      <div className="flex">
        <div className="flex-shrink-0">
          {warning && <ExclamationIcon className="h-5 w-5 text-warningDark"/>}
          {error && <ExclamationCircleIcon className="h-5 w-5 text-dangerDark"/>}
          {success && <CheckCircleIcon className="h-5 w-5 text-successDark" aria-hidden="true"/>}
        </div>
        <div className="ml-3">
          <p className={["text-sm font-medium",
            error ? "text-dangerDark" : warning ? "text-warningDark" : "text-successDark",
          ].join(" ")}>{label}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className={["inline-flex rounded-md p-1.5 ",
                "focus:outline-none",
                error ? "text-dangerDark bg-dangerBackground hover:bg-dangerLight" : warning ? "text-warningDark bg-warningBackground hover:bg-warningLight" : "text-successDark bg-successBackground hover:bg-successLight",
              ].join(" ")}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-5 w-5" aria-hidden="true"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}