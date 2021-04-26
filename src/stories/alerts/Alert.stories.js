import React from "react";
import {Alert} from "./Alert";

export default {
  title: "Elements/Alert",
  component: Alert,
  argTypes: { backgroundColor: 'config'}
}

export const All = () => {
  return (
    <div className="m-4 space-y-3">
      <Alert success label="This has been a success!"/>
      <Alert warning  label="This is a warning" />
      <Alert error  label="This is an error"/>
    </div>
  )
}