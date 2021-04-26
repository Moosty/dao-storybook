import React from 'react';
import { CreateNewDao } from './CreateNewDao';
import * as HeaderStories from '../stories/Header.stories';
import {Meta} from "@storybook/addon-docs/blocks";

<Meta title="Pages/CreateNewDao" component={CreateNewDao}/>


export default {
  title: 'Pages/CreateNewDao',
  component: CreateNewDao,
};

const Template = (args) => <CreateNewDao {...args} />;

export const newDao = Template.bind({});
newDao.args = {
  ...HeaderStories.LoggedIn.args,
};

