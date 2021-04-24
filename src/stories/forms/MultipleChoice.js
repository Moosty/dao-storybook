import React, {useState} from "react";
import {SimpleInput} from "./SimpleInput";
import {FormElement} from "./FormElement";
import {Button} from "../Button";

export const MultipleChoice = ({minItems, maxItems, defaultOptions}) => {
  const [options, setOptions] = useState(defaultOptions);

  return (
    <div>
      {/*1 item*/}
      {options && options.map((option) =>
        <div className="mb-2">
          <FormElement className="flex flex-row no wrap">
            <SimpleInput default placeholder={option.placeholder}/>
            <Button label="-" tertiary size="small" onClick={() => setOptions([...options.filter((o) => o.id !== option.id)])}></Button>
          </FormElement>
        </div>
      )}
      <Button label="+ Add an option" tertiary size="small" onClick={() => setOptions([...options, {id: options[options.length-1].id + 1, value:" ", error: false, placeholder:"choice"}])}></Button>
    </div>
  )
}

