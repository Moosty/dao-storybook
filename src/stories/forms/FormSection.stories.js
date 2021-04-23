import React from "react";
import { FormSection } from "./FormSection";
import {FormRow} from "./FormRow";
import {FormElement} from "./FormElement";
import {TextFieldInput} from "./TextFieldInput";

export default {
  title: "Forms/FormSection",
  component: FormSection,
  argTypes: {backgroundColor: 'color'}
}

export const Template = (args) => <FormSection {...args} />

export const All = () => {
  return (
    <div>
      <FormSection>
        <FormRow columnsTwo className="mx-5">
          <FormElement
            label="Description (optional)"
            infoIcon
            tooltipText="Select on which cloud platform you want to deploy your app. You can always switch to a different platform at a later time."
          >
            <TextFieldInput placeholder="Placeholder"/>
          </FormElement>

        </FormRow>
      </FormSection>

    </div>
  )
}