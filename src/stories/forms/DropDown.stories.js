import React from "react";

import {DropDown} from "./DropDown";
import {FormElement} from "./FormElement";
import {TextFieldInput} from "./TextFieldInput";

export default {
  title: "Forms/DropDown",
  component: DropDown,
  argTypes: {backgroundColor: 'control'}
}

export const Template = (args) => <DropDown {...args} />

export const All = () => <div className="m-4">

  <FormElement
    label="Description (optional)" descriptionTop="description Top" descriptionBottom="descriptionBottom"
    infoIcon
    error
    tooltipText="Select on which cloud platform you want to deploy your app. You can always switch to a different platform at a later time."
  >
    <DropDown rounded/>
  </FormElement>
</div>