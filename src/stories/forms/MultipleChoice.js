import React, {useState} from "react";
import {SimpleInput} from "./SimpleInput";
import {FormElement} from "./FormElement";
import {Button} from "../Button";
import {InputAvatar} from "./InputAvatar";

export const MultipleChoice = ({minItems, maxItems, defaultOptions, children}) => {
  const [options, setOptions] = useState(defaultOptions);

  return (
    <div>
      {/*1 item*/}
      {options && options.map((option) =>
          <FormElement className="flex flex-row">
            <SimpleInput className="" default placeholder={option.placeholder}/>
            <Button className="" label="-" tertiary size="small"
                    onClick={() => {
                      if (options.length > minItems) {
                        setOptions([...options.filter((o) => o.id !== option.id)])
                      }
                    }}
            />
          </FormElement>
      )}
      <div className="w-auto">
        <Button label="+ Add an option" tertiary size="small"
                onClick={() => {
                  if (options.length < maxItems) {
                    setOptions([...options, {
                      id: options[options.length - 1].id + 1,
                      value: " ",
                      error: false,
                      placeholder: "Multiple Choice"
                    }])
                  }
                }
                }>
        </Button></div>
    </div>
  )
}

