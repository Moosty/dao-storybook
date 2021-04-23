import React from "react";
import { FormElement } from "./FormElement";
import {TextFieldInput} from "./TextFieldInput";
import {Tooltip} from "../Tooltip";

export default {
  title: "Forms/FormElement",
  component: FormElement,
  argTypes: { backgroundColor: 'color' }
}

export const Template = (args) => <FormElement {...args} />

export const All = () => <div className="m-4">

  <FormElement
    label="Label"
    descriptionTop="description top"
    infoIcon tooltipText="Select on which cloud platform you want to deploy your app. You can always switch to a different platform at a later time."
  >
    <TextFieldInput
      placeholder="Placeholder"
    />
  </FormElement>

  <FormElement
    label="Label"
    descriptionBottom="description bottom">
    <TextFieldInput
      placeholder="Placeholder"
    />
  </FormElement>


  <FormElement
    label="Label"
    error
    errorMessage="testerror message"
  >
    <TextFieldInput
      placeholder="Placeholder"
      error
    />
  </FormElement>

  <FormElement
    label="Hide results before voting"
    descriptionTop="The result is ONLY visible after the voting is closed."
    infoIcon
    tooltipText="The result is ONLY visible after the voting is closed."
  >
  </FormElement>
</div>
