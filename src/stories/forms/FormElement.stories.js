import React from "react";
import { FormElement } from "./FormElement";
import {TextFieldInput} from "./TextFieldInput";

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
    infoIcon
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
  >
  </FormElement>
</div>
