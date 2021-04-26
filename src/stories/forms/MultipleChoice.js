import React, {useEffect, useState} from "react";
import {SimpleInput} from "./SimpleInput";
import {FormElement} from "./FormElement";
import {Button} from "../Button";

export const MultipleChoice = ({
                                 minItems = 2,
                                 maxItems = 10,
                                 defaultOptions,
                                 onChange,
                                 buttonLabel,
  newOptionPlaceholder,
                                 ...props
                               }) => {
  const [options, setOptions] = useState(defaultOptions);

  useEffect(() => {
    if (onChange) {
      onChange(options)
    }
  }, [onChange, options])

  return (
    <>
      {options && options.map((option, i) =>
        <FormElement className="flex flex-row" key={option.id}>
          <SimpleInput
            default
            placeholder={option.placeholder}
            {...option}
            onChange={(e) => {
              const updatedOptions = [...options];
              updatedOptions[i].value = e.target.value;
              setOptions(updatedOptions)
            }}
          />
          <Button
            label="-"
            tertiary
            size="small"
            onClick={() => options.length > minItems &&
              setOptions([...options.filter((o) => o.id !== option.id)])
            }
          />
        </FormElement>
      )}
      <div className="w-auto">
        <Button
          label={buttonLabel || "+ Add an option"}
          tertiary
          size="small"
          onClick={() => options.length < maxItems &&
            setOptions([...options, {
              id: options[options.length - 1].id + 1,
              value: "",
              error: false,
              placeholder: newOptionPlaceholder || "Multiple Choice",
            }])
          }>
        </Button>
      </div>
    </>
  )
}

