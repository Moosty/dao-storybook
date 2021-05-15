import React from "react";
import {Tag} from "./tag";

export default {
  title: "Elements/Tag",
  component: Tag,
  args: {
    title: "new",
  },
  argTypes: {},
}

export const Playground = (args) => <Tag {...args} />

Playground.args = {
  size: "large",
}

export const All = (args) => {
  return (<div className="space-x-4">
      <Tag title="tag" />
      <Tag title="success"  filled success />
      <Tag title="wat?"   success outline/>
      <Tag title="new"  outline success />
      <Tag title="new" rounded outline success />
      <Tag title="new" rounded outline success large/>
      <Tag title="new"  warning outline />
      <Tag title="new"  warning  filled />
      <Tag title="new"  warning  filled rounded />
      <Tag title="error"  error outline />
      <Tag title="error"  error  filled />
      <Tag title="error"  error  filled rounded />

      <Tag title="info"  info outline />
      <Tag title="info"  info  filled />
      <Tag title="info"  info  filled rounded />
      <Tag title="info"  info  light rounded />


    </div>
  )
}