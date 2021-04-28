import React from 'react';
import { AboutTheProject } from './AboutTheProject';
import {Meta} from "@storybook/addon-docs/blocks";

<Meta title="Pages/AboutTheProject" component={AboutTheProject}/>


export default {
  title: 'Pages/AboutTheProject',
  component: AboutTheProject,
};

const Template = (args) => <AboutTheProject {...args} />;

export const aboutTheProject = Template.bind({});
aboutTheProject.args = {
};

