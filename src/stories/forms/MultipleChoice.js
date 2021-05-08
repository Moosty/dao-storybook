import React from "react";
import {SimpleInput} from "./SimpleInput";
import {FormElement} from "./FormElement";
import {Button} from "../Button";
import PropTypes from "prop-types";
import {InputAvatar} from "../index";

export const MultipleChoice = ({
                                 minItems,
                                 maxItems,
                                 options,
                                 onChange,
                                 buttonLabel,
                                 newOptionPlaceholder,
                                 type = "simple",
                                 typeOptions,
                               }) => (
  <>
    {options && options.map((option, i) =>
      <FormElement className="flex flex-row" key={option.id}>
        {type === "simple" && <SimpleInput
          placeholder={option.placeholder}
          {...option}
          {...typeOptions}
          onChange={(e) => {
            const updatedOptions = [...options];
            updatedOptions[i].value = e.target.value;
            onChange && onChange(updatedOptions)
            // setOptions(updatedOptions)
          }}
        />}
        {type === "inputAvatar" && <InputAvatar
          placeholder={option.placeholder}
          {...option}
          {...typeOptions}
          onChange={(value) => {
            const updatedOptions = [...options];
            updatedOptions[i].value = value;
            onChange && onChange(updatedOptions)
          }}
        />}
        <Button
          label="-"
          tertiary
          size="small"
          onClick={() => options.length > minItems &&
            onChange && onChange([...options.filter((o) => o.id !== option.id)])
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
          onChange && onChange([...options, {
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

MultipleChoice.propTypes = {
  minItems: PropTypes.number,
  maxItems: PropTypes.number,
  onChange: PropTypes.func,
  buttonLabel: PropTypes.string,
  newOptionPlaceholder: PropTypes.string,
  options: PropTypes.array,
};

MultipleChoice.defaultProps = {
  minItems: 2,
  maxItems: 10,
  onChange: () => null,
  buttonLabel: "+ Add an option",
  newOptionPlaceholder: "New option",
  options: [
    {id: 1, value: "Option 1"},
    {id: 2, value: "Option 2"}
  ]
};
