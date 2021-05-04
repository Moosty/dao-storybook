import React, {useState} from "react";
import {DropDown} from "./DropDown";
import {FormElement} from "./FormElement";

export default {
  title: "Forms/DropDown",
  component: DropDown,
  argTypes: {backgroundColor: 'control'}
}

export const Playground = (args) => <DropDown {...args} />
Playground.args = {
  options: [
    {id: 1, label: "One person One vote"},
    {id: 2, label: "Quadratic Voting"},
    {id: 3, label: "New Member Voting"},
  ]
}
export const All = () => {
  const [selected, setSelected] = useState(3)
  return <div className="m-4">
    <FormElement
      label="Description (optional)" descriptionTop="description Top" descriptionBottom="descriptionBottom"
      infoIcon
      error
      tooltipText="Select on which cloud platform you want to deploy your app. You can always switch to a different platform at a later time."
    >
      <DropDown
        selected={selected}
        onChange={(e) => setSelected(e.target.value)}
        options={[
          {id: 1, label: "One person One vote"},
          {id: 2, label: "Quadratic Voting"},
          {id: 3, label: "New Member Voting"},
        ]}
        rounded/>
    </FormElement>
  </div>
}