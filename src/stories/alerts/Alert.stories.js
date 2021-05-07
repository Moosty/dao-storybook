import React from "react";
import {Alert} from "./Alert";

export default {
  title: "Elements/Alert",
  component: Alert,
  args: {
    label: 'Wow! What a success!',
    state: "success",
    position: "topLeft",
  },
  argTypes: {
    state: {control: {default: 'success', type: "select"}, options: ['success', 'error', 'warning', 'default']},
    position: {control: {default: 'topLeft', type: "select"}, options: ['topRight', 'topLeft', 'bottomLeft']},
  },
}


export const Playground = (args) => <Alert {...args}/>


export const All = () => {
  return (
    <div className="m-4 space-y-3">
      <Alert success label="This has been a success!"/>
      <Alert warning label="This is a warning"/>
      <Alert error label="This is an error"/>
      <Alert label="This is an alert"/>
    </div>
  )
}
export const Success = () => <Alert success label="This has been a success!"/>
export const Warning = () => <Alert warning label="This is a warning"/>
export const Error = () => <Alert error label="This is an error"/>
export const Info = () => <Alert label="This is an info alert"/>
export const MultiLine = () => <Alert
  label="This is an info alert, This is an info alert, This is an info alert, This is an info alert, This is an info alert, This is an info alert, This is an info alert, This is an info alert, This is an info alert, This is an info alert, This is an info alert, This is an info alert, This is an info alert, "/>

