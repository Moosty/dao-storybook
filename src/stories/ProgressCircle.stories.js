import React from 'react';

import { ProgressCircle } from './ProgressCircle';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/ProgressCircle',
  component: ProgressCircle,
};

const Template = (args) => <ProgressCircle {...args} />;

export const YesNo = Template.bind({});
YesNo.args = {
  ...HeaderStories.LoggedIn.args,
};

export const TotalVotes = Template.bind({});
TotalVotes.args = {
  type:"votingCount", valueYes:20, valueNo:30, quorum:50,  totalVotes:50,
};
