import React  from "react";
import {Button} from "../Button";
import {IconButton} from "../IconButton";
import {XIcon} from "@heroicons/react/solid";

export const ModalFooter = ({ctaButton, iconCancel, cancelLabel, onClose, cancelButtonRef}) => {

  return (
    <div className={[
      "mt-5 sm:mt-6",
      "sm:grid sm:grid-flow-row-dense",
      ctaButton && "sm:grid-cols-2 sm:gap-3 ",
      !ctaButton && "sm:grid-cols-1",
    ].join(" ")}>
      {!iconCancel && <Button
        label={cancelLabel || "Cancel"}
        secondary
        onClick={onClose}
        ref={cancelButtonRef}
      />}
      {ctaButton && <Button
        label={ctaButton.label}
        onClick={() => ctaButton.onSubmit()}
        {...ctaButton}
      />}
      {iconCancel &&
      <div className="flex justify-around">
        <IconButton
          onClick={onClose}
          ref={cancelButtonRef}>
          <XIcon className="h-5 w-5 mx-auto"/>
        </IconButton>
      </div>
      }
    </div>
  )
}