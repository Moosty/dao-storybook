import React from 'react';

import { CreateVotingYesNo } from './CreateVotingYesNo';
import * as HeaderStories from '../stories/Header.stories';
import {Meta} from "@storybook/addon-docs/blocks";

<Meta title="Pages/CreateVotingYesNo" component={CreateVotingYesNo}/>


export default {
    title: 'Pages/CreateVotingYesNo',
    component: CreateVotingYesNo,
};

const Template = (args) => <CreateVotingYesNo {...args} />;

export const CreateVoteTwo = Template.bind({});
CreateVoteTwo.args = {
    ...HeaderStories.LoggedIn.args,
};

