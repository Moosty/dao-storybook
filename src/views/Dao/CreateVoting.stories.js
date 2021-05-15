import React from 'react';
import { CreateVoting } from './CreateVoting';
import {Meta} from "@storybook/addon-docs/blocks";

<Meta title="Dao/CreateVoting" component={CreateVoting}/>

export default {
    title: 'Dao/CreateVoting',
    component: CreateVoting,
};

const Template = (args) => <CreateVoting {...args} />;

export const CreateVote = Template.bind({});
CreateVote.args = {};
