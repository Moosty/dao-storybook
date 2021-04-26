import React from "react";
import {FormElement} from "./FormElement";
import {MultipleChoice} from "./MultipleChoice";

export default {
  title: "Forms/Multiplechoice",
  component: MultipleChoice,
}

export const Template = (args) => <FormElement
  label="Options"
  infoIcon
  tooltipText="The result is ONLY visible after the voting is closed."
  className={"m-4"}
>
  <MultipleChoice {...args} />
</FormElement>

export const MultipleChoiceStory = () => <FormElement
  label="Options"
  infoIcon
  tooltipText="The result is ONLY visible after the voting is closed."
  className={"m-4"}
>
  <MultipleChoice
    maxItems={10}
    onChange={(options) => console.log("options: ", options)}
    minItems={2}
    newOptionPlaceholder={"Answer option"}
    defaultOptions={[
      {id: 1, value: "Test", placeholder: "Answer option"},
      {id: 2, value: "Test123", placeholder: "Answer option"}
    ]}/>
</FormElement>

