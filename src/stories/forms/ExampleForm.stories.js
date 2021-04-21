import React from 'react';

import { ExampleForm } from './ExampleForm';
import {Meta} from "@storybook/addon-docs/blocks";

<Meta title="Forms/ExampleForm" component={ExampleForm}/>


export default {
    title: 'Forms/ExampleForm',
    component: ExampleForm,
};

const Template = (args) => <ExampleForm {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
