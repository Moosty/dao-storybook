import React from 'react';

import { CreateVoting } from './CreateVoting';
import * as HeaderStories from '../stories/Header.stories';

export default {
    title: 'Example/CreateVoting',
    component: CreateVoting,
};

const Template = (args) => <CreateVoting {...args} />;

export const CreateVote = Template.bind({});
CreateVote.args = {
    ...HeaderStories.LoggedIn.args,
};

