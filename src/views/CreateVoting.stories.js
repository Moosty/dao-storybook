import React from 'react';
import { CreateVoting } from './CreateVoting';
import {Meta} from "@storybook/addon-docs/blocks";

<Meta title="Pages/CreateVoting" component={CreateVoting}/>

export default {
    title: 'Pages/CreateVoting',
    component: CreateVoting,
};

const Template = (args) => <CreateVoting {...args} />;

export const CreateVote = Template.bind({});
CreateVote.args = {};
