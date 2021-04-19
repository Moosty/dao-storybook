import React from 'react';

import { CreateVotingYesNo } from './CreateVotingYesNo';
import * as HeaderStories from '../stories/Header.stories';

export default {
    title: 'Example/CreateVotingYesNo',
    component: CreateVotingYesNo,
};

const Template = (args) => <CreateVotingYesNo {...args} />;

export const CreateVoteTwo = Template.bind({});
CreateVoteTwo.args = {
    ...HeaderStories.LoggedIn.args,
};

