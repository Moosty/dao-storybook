import React from 'react';
import { AboutTheProject } from './AboutTheProject';
import {Meta} from "@storybook/addon-docs/blocks";

<Meta title="Dao/AboutTheProject" component={AboutTheProject}/>


export default {
  title: 'Dao/AboutTheProject',
  component: AboutTheProject,
};

const Template = (args) => <AboutTheProject {...args} />;

export const aboutTheProject = Template.bind({});
aboutTheProject.args = {
};

