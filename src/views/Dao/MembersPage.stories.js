import React from 'react';
import {Meta} from "@storybook/addon-docs/blocks";
import {MembersPage} from "./MembersPage";
<Meta title="MembersPage" component={MembersPage}/>

export default {
  title: 'Dao/MembersPage',
  component: MembersPage,
};

const Template = (args) => <MembersPage {...args} />;

export const Member = Template.bind({});
MembersPage.args = {};

export const All = () => {
  return (
    <div>
      <MembersPage />
    </div>
  )
}

