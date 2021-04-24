import React from "react";

import {UploadField} from "./UploadField";
import {Meta} from "@storybook/addon-docs/blocks";
import {FormElement} from "./FormElement";

<Meta title="Forms/Fields" component={UploadField}/>


export default {
  title: "Forms/UploadField",
  component: UploadField,
  argTypes: {backgroundColor: 'control'},
}

export const Template = (args) => <UploadField {...args} />


export const All = () => <div>

  <div className="mx-4">
    <FormElement label="UploadField" descriptionTop="Give a clear description here">
      <UploadField/>
    </FormElement>
  </div>

</div>