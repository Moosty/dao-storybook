import React from 'react';
import { Home } from './Home';
import {Meta} from "@storybook/addon-docs/blocks";

<Meta title="Pages/Home" component={Home}/>


export default {
  title: 'Crowd/Pages/Home',
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const home = Template.bind({});
home.args = {};

