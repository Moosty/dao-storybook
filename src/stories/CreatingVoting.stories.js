import React from 'react';

import { CreateVoting } from './CreateVoting';
import * as HeaderStories from './Header.stories';

export default {
    title: 'Example/CreateVoting',
    component: CreateVoting,
};

const Template = (args) => <CreateVoting {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
    ...HeaderStories.LoggedOut.args,
};
