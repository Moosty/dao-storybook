import React from "react";
import {FormRow} from "./FormRow";
import {FormElement} from "./FormElement";
import {TextFieldInput} from "./TextFieldInput";
import {SimpleInput} from "./SimpleInput";

export default {
  title: "Forms/FormRow",
  component: FormRow,
  argTypes: {backgroundColor: 'config'}
}

export const All = () => {
  return (
    <div>

      <FormRow>
        <div className="w-1/5">
          <FormElement label="Start Date" descriptionBottom="you have one week">
            <SimpleInput
              default
              placeholder="24/04/2021"
              description
              descriptionMessage="The voting will close in 1 week."
              datePicker
              label={"Start date"}/>
          </FormElement>
        </div>
        <div className="w-2/5">
          <FormElement label="Start Date">
            <SimpleInput
              default
              placeholder="24/04/2021"
              description
              descriptionMessage="The voting will close in 1 week."
              datePicker
              label={"End date"}/>
          </FormElement>
        </div>
      </FormRow>
      <FormRow columnsTwo className="mx-5">
        <FormElement
          label="Description (optional)"
          infoIcon
          tooltipText="Select on which cloud platform you want to deploy your app. You can always switch to a different platform at a later time."
        >
          <TextFieldInput placeholder="Placeholder"/>
        </FormElement>
      </FormRow>
      <FormRow columnsTwo className="mx-5">
        <FormElement
          label="Description (optional)"
          infoIcon
          tooltipText="Select on which cloud platform you want to deploy your app. You can always switch to a different platform at a later time."
        >
          <TextFieldInput placeholder="Placeholder"/>
        </FormElement>
      </FormRow>
      <FormRow columnsTwo>
        <FormElement
          label="Description (optional)"
          infoIcon
          tooltipText="Select on which cloud platform you want to deploy your app. You can always switch to a different platform at a later time."
        >
          <TextFieldInput placeholder="Placeholder"/>
        </FormElement>
        <FormElement
          label="Label"
          descriptionBottom="description bottom">
          <TextFieldInput placeholder="Placeholder"/>
        </FormElement>
      </FormRow>
    </div>

  )
}