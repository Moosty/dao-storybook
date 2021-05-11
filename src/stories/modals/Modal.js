import React, {Fragment, useRef,} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {Button} from "../Button";
import {XIcon} from "@heroicons/react/solid";
import {IconButton} from "../IconButton";

export const Modal = ({open, onClose, children, ctaButton, cancelLabel,iconCancel}) => {
  const cancelButtonRef = useRef();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={onClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-80"
            leave="ease-in duration-200"
            leaveFrom="opacity-80"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
          </Transition.Child>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">

              {children}
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
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
