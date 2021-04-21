import React from 'react';

import { Page } from '../stories/Page';
import * as HeaderStories from '../stories/Header.stories';
import {Meta} from "@storybook/addon-docs/blocks";
import {MembersPage} from "./MembersPage";
import PropTypes from "prop-types";
import {CreateVoting} from "./CreateVoting";

<Meta title="MembersPage" component={MembersPage}/>


export default {
  title: 'MembersPage',
  component: MembersPage,
};

const Template = (args) => <MembersPage {...args} />;

export const Member = Template.bind({});
MembersPage.args = {
  ...HeaderStories.LoggedIn.args,
};

