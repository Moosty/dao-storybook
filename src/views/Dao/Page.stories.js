import React from 'react';
import { Page } from './Page';

export default {
  title: 'Dao/Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {};


export const LoggedOut = Template.bind({});
LoggedOut.args = {};
