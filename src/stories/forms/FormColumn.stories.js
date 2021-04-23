import React from "react";
import { FormColumn } from "./FormColumn";
import {FormRow} from "./FormRow";
import {FormElement} from "./FormElement";
import {TextFieldInput} from "./TextFieldInput";

export default {
  title: "Forms/FormColumn",
  component: FormColumn,
  argTypes: {backgroundColor: 'color'}
}

export const Template = (args) => <FormColumn {...args} />

export const All = () => {
  return (
    <div>
      <FormColumn>
        <FormRow columnsTwo className="mx-5">
          <FormElement
            label="Description (optional)"
            infoIcon
            tooltipText="Select on which cloud platform you want to deploy your app. You can always switch to a different platform at a later time."
          >
            <TextFieldInput placeholder="Placeholder"/>
          </FormElement>

        </FormRow>
      </FormColumn>

    </div>
  )
}