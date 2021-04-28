import React from 'react';
import { AboutUs } from './AboutUs';
import {Meta} from "@storybook/addon-docs/blocks";

<Meta title="Pages/AboutUs" component={AboutUs}/>


export default {
  title: 'Pages/AboutUs',
  component: AboutUs,
};

const Template = (args) => <AboutUs {...args} />;

export const aboutUs = Template.bind({});
aboutUs.args = {
};

