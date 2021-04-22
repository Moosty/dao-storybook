/* This example requires Tailwind CSS v2.0+ */
import React, {Fragment, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {CheckIcon, ExclamationCircleIcon, SelectorIcon} from '@heroicons/react/solid'
import {Typography} from "../Typography";
import {StarIcon} from "@heroicons/react/outline";

const people = [
  {
    id: 1,
    name: 'Wade Cooper',
    avatar:
      'https://avatar.moosty.com/1',
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    avatar:
      'https://avatar.moosty.com/2',
  },
  {
    id: 3,
    name: 'Lisk Propject',
    avatar:
      'https://avatar.moosty.com/3',
  },
  {
    id: 4,
    name: 'LCU DAO',
    avatar:
      'https://avatar.moosty.com/4',
  },
  {
    id: 5,
    name: 'Tanya Fox',
    avatar:
      'https://avatar.moosty.com/5',
  },
  {
    id: 6,
    name: 'Hellen Schmidt',
    avatar:
      'https://avatar.moosty.com/6',
  },
  {
    id: 7,
    name: 'Caroline Schultz',
    avatar:
      'https://avatar.moosty.com/7',
  },
  {
    id: 8,
    name: 'Mason Heaney',
    avatar:
      'https://avatar.moosty.com/8',
  },
  {
    id: 9,
    name: 'Claudie Smitham',
    avatar:
      'https://avatar.moosty.com/9',
  },
  {
    id: 10,
    name: 'Emil Schaefer',
    avatar:
      'https://avatar.moosty.com/10',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const InputAvatar = ({disabled, shadow, primary, error, className, ...props}) => {
  const [selected, setSelected] = useState(people[4]);
  const shadowClass = [
    'shadow-sm',
  ].join(" ");
  const defaultClass = ['border border-formDivider',
    'hover:border-formHoverBorder',
    'text-textPlaceholder'].join(" ");
  const primaryClass = ['border border-formError'].join(" ");
  const errorClass = ['border border-formError'].join(" ");

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({open}) => (
        <>
          <Listbox.Label className="block">
            <Typography type="bodyStrong" label="span">
              {props.label}                        </Typography>
          </Listbox.Label>
          <div className={["relative", className,].join(" ")}>
            <Listbox.Button
              className={["relative w-full rounded-md pr-10 pl-3   py-2 text-left cursor-default sm:text-sm ",
                "bg-white  focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",
                primary ? primaryClass : error ? errorClass : defaultClass,
                shadow ? shadowClass : " ",
              ].join(" ")}
            >
                          <span className="flex items-center">
                            <img src={selected.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full"/>
                            <span className="ml-3 block truncate">{selected.name}</span>
                          </span>
              <span
                className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon className="h-5 w-5 text-textBody" aria-hidden="true"/>
                          </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className="absolute mt-1 w-full bg-white shadow-lg max-h-100` rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({active}) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({selected, active}) => (
                      <>
                        <div className="flex items-center">
                          <img src={person.avatar} alt=""
                               className="flex-shrink-0 h-6 w-6 rounded-full"/>
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.name}
                          </span>
                        </div>
                        {selected ? (<span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >  <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
          {error && <div className="flex flex-row">
            <ExclamationCircleIcon className="mt-2 mr-1 ml-1 h-5 w-5 text-formError" aria-hidden="true"/>

            <p className="mt-2 text-sm text-red-600" id={`-error`}>
              {props.errorMessage}
            </p></div>}
        </>
      )}
    </Listbox>
  )
}
