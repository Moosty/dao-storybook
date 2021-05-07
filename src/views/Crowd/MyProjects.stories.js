import React from "react";
import { MyProjects } from "./MyProjects";
import {Meta} from "@storybook/addon-docs/blocks";

<Meta title="Pages/MyProjects" component={MyProjects}/>


export default {
  title: 'Crowd/Pages/MyProjects',
  component: MyProjects,
}

const Template = (args) => <MyProjects {...args} />;

export const myProjects = Template.bind({});
myProjects.args = {};
