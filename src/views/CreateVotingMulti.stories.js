import React from 'react';

import { CreateVotingMulti } from './CreateVotingMulti';
import * as HeaderStories from '../stories/Header.stories';
import {Meta} from "@storybook/addon-docs/blocks";

<Meta title="Pages/CreateVotingMulti" component={CreateVotingMulti}/>


export default {
  title: 'Pages/CreateVotingMulti',
  component: CreateVotingMulti,
};

const Template = (args) => <CreateVotingMulti {...args} />;

export const CreateVoteTwo = Template.bind({});
CreateVoteTwo.args = {
  ...HeaderStories.LoggedIn.args,
};

