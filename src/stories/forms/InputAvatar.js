import React, {Fragment, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid'
import {useForms} from "../../hooks/forms";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const InputAvatar = ({
                              items,
                              selectedItem,
                              disabled,
                              shadow,
                              primary,
                              error,
                              className,
                              onChange,
                              readOnly,
                              dropDownShadow,
                              ...props
                            }) => {
  const [selected, setSelected] = useState(selectedItem);
  const {formClass} = useForms({disabled, error, readOnly});
  console.log(items)
  return (
    <Listbox
      value={selected}
      disabled={disabled || readOnly}
      onChange={(value) => {
        setSelected(value);
        onChange && onChange(value)
      }}
      {...props}
    >
      {({open}) => (<>
        <div className={["relative", className,].join(" ")}>
          <Listbox.Button
            className={[
              "relative w-full",
              "rounded-default",
              "pr-10 pl-3 py-2",
              "text-left",
              "cursor-default",
              "sm:text-sm",
              "bg-white",
              "focus:outline-none",
              formClass,
            ].join(" ")}
          >
            <span className="flex items-center h-6">
              {selected?.icon && <img
                src={selected?.icon}
                className="flex-shrink-0 h-6 w-6 rounded-full"
              />}
              <span className="ml-3 block truncate">{selected?.name}</span>
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
              className={[
                "absolute mt-1 w-full",
                "bg-white shadow-lg max-h-100",
                "rounded-md py-1 text-base",
                "ring-1 ring-black ring-opacity-5",
                "overflow-auto focus:outline-none",
                "sm:text-sm z-40",
                dropDownShadow && "shadow-defaultPrimary",
              ].join(" ")}
            >
              {items && items.map((item) => {
                console.log(item.name)
                return (
                  <Listbox.Option
                    key={item?.id}
                    className={({active}) =>
                      classNames(
                        active ? 'text-white bg-formActive' : 'text-textBody',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={item}
                  >
                    {({selected, active}) => (
                      <>
                        <div className="flex items-center">
                          {item?.icon && <img src={item?.icon} alt="" className="flex-shrink-0 h-6 w-6 rounded-full"/>}
                          <span
                            className={[
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block',
                            ].join(" ")}
                          >
                          {item?.name}
                        </span>
                        </div>
                        {selected && <span
                          className={[
                            active ? 'text-white' : 'text-indigo-600',
                            'absolute inset-y-0 right-0 flex items-center pr-4',
                          ].join(" ")}
                        >
                        <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                      </span>}
                      </>
                    )}
                  </Listbox.Option>
                )
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </>)}
    </Listbox>
  )
}
