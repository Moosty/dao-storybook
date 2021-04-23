import React from "react";
import { Form } from "./Form";
import {FormColumn} from "./FormColumn";

export default {
  title: "Forms/Form",
  component: Form,
  argTypes: {backgroundColor: 'color'}
}

export const Template = (args) => <Form {...args} />

export const All = () => {
  return (
    <div>
      <Form>
        <FormColumn>
          x
        </FormColumn>
        <FormColumn>
          Y
        </FormColumn>
      </Form>
    </div>
  )
}