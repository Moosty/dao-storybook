import React from 'react';
import { Page } from './Page';
import {Meta} from "@storybook/addon-docs/blocks";

<Meta title="Forms/Page" component={Page}/>

export default {
  title: 'Pages/Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {};


export const LoggedOut = Template.bind({});
LoggedOut.args = {};
