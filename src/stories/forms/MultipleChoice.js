import React, {useEffect, useState} from "react";
import {SimpleInput} from "./SimpleInput";
import {FormElement} from "./FormElement";
import {Button} from "../Button";
import PropTypes from "prop-types";

export const MultipleChoice = ({
                                 minItems,
                                 maxItems,
                                 defaultOptions,
                                 onChange,
                                 buttonLabel,
                                 newOptionPlaceholder,
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

MultipleChoice.propTypes = {
  minItems: PropTypes.number,
  maxItems: PropTypes.number,
  onChange: PropTypes.func,
  buttonLabel: PropTypes.string,
  newOptionPlaceholder: PropTypes.string,
  defaultOptions: PropTypes.array,
};

MultipleChoice.defaultProps = {
  minItems: 2,
  maxItems: 10,
  onChange: () => null,
  buttonLabel: "+ Add an option",
  newOptionPlaceholder: "New option",
  defaultOptions: [
    {id: 1, value: "test"},
    {id: 2, value: "test"}
  ]
};
