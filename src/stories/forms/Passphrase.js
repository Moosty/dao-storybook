import React, {useEffect, useRef, useState} from 'react';
import {FormElement, SimpleInput} from "../index";

export const Passphrase = ({onChange, defaultPassphrase, readOnly}) => {
  const [passphrase, setPassphrase] = useState(defaultPassphrase || new Array(12).join(".").split("."));
  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    ]

  useEffect(() => {
    setPassphrase(defaultPassphrase || new Array(12).join(".").split("."))
  }, [defaultPassphrase])

  const getPassphraseField = (fieldNumber) => {
    return <FormElement
      className={"px-4"}
      key={`field-${fieldNumber}`}
      label={`${fieldNumber + 1}.`}>
      <SimpleInput
        readOnly={readOnly}
        ref={refs[fieldNumber]}
        onKeyDown={(e) => {
          if (e.keyCode === 32 && fieldNumber < 11) {
            refs[fieldNumber + 1].current.focus()
          }
        }}
        value={passphrase[fieldNumber]}
        onChange={(e) => {
          let newPassphrase = []
          if (e.target.value.split(" ").length > 10) {
            newPassphrase = e.target.value.split(" ")
          } else {
            newPassphrase = [...passphrase];
            newPassphrase[fieldNumber] = e.target.value.trim();
          }
          setPassphrase(newPassphrase)
          onChange && onChange(newPassphrase)
        }}
      />
    </FormElement>
  }

  return (<div className="flex flex-row space-x-2">
      <div className="grid grid-cols-2 grid-">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(getPassphraseField)}
      </div>
    </div>
  )
}