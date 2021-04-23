import React from "react";
import { Form } from "./Form";
import {FormSection} from "./FormSection";

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
        <FormSection></FormSection>
      </Form>
    </div>
  )
}