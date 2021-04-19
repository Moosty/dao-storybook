import React from 'react';

import { ExampleForm } from './ExampleForm';

export default {
    title: 'Example/ExampleForm',
    component: ExampleForm,
};

const Template = (args) => <ExampleForm {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
