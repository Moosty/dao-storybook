import React from "react";
import {Typography} from "../Typography";
import {ExclamationCircleIcon} from "@heroicons/react/solid";
import {InformationCircleIcon} from "@heroicons/react/outline";
import {Tooltip} from "../Tooltip";

export const FormElement = ({
                              children,
                              label,
                              descriptionTop,
                              descriptionBottom,
                              error,
                              errorMessage,
                              id,
                              infoIcon,
                              tooltipText,
                              className,
                              ...props
                            }) => {

  return (
    <div className={["mb-4 w-full", className].join(" ")}>
      <div className="flex flex-row">
        <Typography type="bodyStrong">{label}</Typography>
        {infoIcon &&
        <Tooltip description={tooltipText} dark>
          <InformationCircleIcon className="text-textPlaceHolder hover:text-textBody   ml-2 h-4 w-4"/></Tooltip>
        }
      </div>
      {descriptionTop && <Typography type="caption">{descriptionTop}</Typography>}
      {children}
      {descriptionBottom && <Typography type="caption" className="mt-1">{descriptionBottom}</Typography>}
      {error && <div className="flex flex-row mt-0">
        <ExclamationCircleIcon className="mt-2 mr-1 ml-1 h-5 w-5 text-formError" aria-hidden="true"/>
        <Typography type="caption" className="mt-2 text-formError" id={`${id}-error`}>{errorMessage}</Typography>
      </div>}
    </div>
  )
}

