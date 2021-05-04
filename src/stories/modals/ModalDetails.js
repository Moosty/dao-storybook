import React, {Fragment, useRef, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {Button} from "../Button";
import {Typography} from "../Typography";
import {Paper} from "../Paper";

export const ModalDetails = ({open, onClose, name, address, daos}) => {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
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
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full">
                  <img
                    className="h-10 w-10 rounded-full mr-2"
                    src={`https://avatar.moosty.com/${address}`}
                    alt=""
                  />
                </div>
                <div className="mt-3 text-center sm:mt-5 ">
                  <Typography type="h1" Element="h1">
                    {name}
                  </Typography>
                  <Typography type="bodyStrong" Element="body">{address}</Typography>

                  <Paper className="w-full flex-col items-center flex justify-between py-4 px-2 mt-2">
                    <Typography type="bodyStrong" Element="body">Member of:</Typography>
                    {daos?.map(dao => <Typography className="text-textHeadings" type="bodyStrong" Element="span">{dao.name}</Typography>)}
                  </Paper>
                </div>

              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-1 sm:grid-flow-row-dense">
                <Button
                  label="Go back"
                  secondary
                  onClick={() => onClose(true)}
                />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
