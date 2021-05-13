import React, {useRef} from "react";
import {ModalFooter} from "./ModalFooter";

export const ModalTemplate = ({children, ctaButton,iconCancel,cancelLabel, onClose, ...props }) => {
  const cancelButtonRef = useRef();

  return (
    <div className="flex flex-col">
      {children}
      <ModalFooter ctaButton={ctaButton} iconCancel={iconCancel} cancelLabel={cancelLabel} onClose={onClose} ref={cancelButtonRef}/>
    </div>
  )
}