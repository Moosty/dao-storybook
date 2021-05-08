import React from "react";
import { Projects } from "./Projects";

export default {
  title: "Crowd/Pages/Projects",
  component: Projects,
}

const Template = (args) => <Projects {...args} />;

export const projects = Template.bind({});
projects.args = {};
