import React, {useState} from 'react';
import {InputAvatar} from './InputAvatar';
import {Typography} from "../Typography";
import {Meta} from "@storybook/addon-docs/blocks";
import {allDaoData} from "../../fixtures/daos";
import {allMembers} from "../../fixtures/members";
import {allVotingTypes} from "../../fixtures/votingTypes";

<Meta title="Forms/InputAvatar" component={InputAvatar}/>


export default {
  title: 'Forms/InputAvatar',
  component: InputAvatar,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
};

const Template = (args) => {
  const [selectedItem, setSelectedItem] = useState()

  return <InputAvatar {...args} onChange={setSelectedItem} selectedItem={selectedItem}/>;
}

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

export const All = () => <div>
  <div className="ml-10 w-1/2">
    <Typography type="h1" Element='h1'>
      Input Avatar </Typography>
    <div className="mt-4"></div>
    <Typography type="h2" Element='h2'>
      Default fields </Typography>

    <Template label={"Select DAO"} items={allDaoData} selectedItem={allDaoData[4]} />
    <InputAvatar label={"Select Member"} items={allMembers} selectedItem={allMembers[0]} />
    <InputAvatar label={"Select Voting type"} items={allVotingTypes} selectedItem={allVotingTypes[0]} />

    <InputAvatar label={"disabled"} disabled items={allDaoData} selectedItem={allDaoData[3]}/>
    <InputAvatar label={"read only"} readOnly items={allDaoData} selectedItem={allDaoData[2]}/>
    <InputAvatar label={"error"} error  errorMessage="error message here" items={allDaoData} selectedItem={allDaoData[2]}/>
  </div>
</div>


