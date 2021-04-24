/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
import {Button} from "../Button";
import {Typography} from "../Typography";
import {SimpleInput} from "../forms/SimpleInput";

export const Modal = ({}) => {
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef()

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={setOpen}
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
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
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
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  Logo
                </div>
                <div className="mt-3 text-center sm:mt-5 ">
                  <Typography type="h1" Element="h1">
                    Create an account!
                  </Typography>

                  <div className="mt-2">
                    <Typography type="body" Element="span">
                      By creating an account on the Lisk dao Blockchain you will be able to create or participate in different DAO's.
                    </Typography>

                  </div>

                  <div className="mt-6">
                    <Typography className="text-textHeadings" type="bodyStrong" Element="span">
Step 1. Choose your avatar!                    </Typography>

                  </div>
                  <div className="flex flex-row justify-around space-x-2 mx-auto w-2/3 my-4  ">
                    <img
                      className="h-10 w-10 rounded-full "
                      src="https://avatar.moosty.com/1"
                      alt=""
                    />
                    <img
                      className="h-10 w-10 rounded-full hover:cursor-pointer "
                      src="https://avatar.moosty.com/2"
                      alt=""
                    />
                    <img
                      className="h-10 w-10 rounded-full "
                      src="https://avatar.moosty.com/3"
                      alt=""
                    />
                  </div>
                  <div className="my-6">
                    <Typography className="text-textHeadings" type="bodyStrong" Element="span">
                      Step 2. Create a username!                    </Typography>

                  </div>
                </div>
                <SimpleInput  placeholder="Username" name />
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <Button
                  label="Register"
                  onClick={() => setOpen(false)}
                >

                </Button>
                <Button
                  label="Cancel"
                  secondary
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
