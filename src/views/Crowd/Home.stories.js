import React from 'react';
import { Home } from './Home';
import * as HeaderStories from '../../stories/Header.stories';
import {Meta} from "@storybook/addon-docs/blocks";

<Meta title="Pages/Home" component={Home}/>


export default {
  title: 'Pages/Crowd/Home',
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const home = Template.bind({});
home.args = {
  ...HeaderStories.LoggedIn.args,
};

