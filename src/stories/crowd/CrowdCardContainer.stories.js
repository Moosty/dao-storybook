import React from "react";
import { CrowdCardContainer } from "./CrowdCardContainer";
import {categories, CROWDFUNDSTATELIST, crowdFundStates, projectImages} from "../../shared/global.crowdfund";

export default {
  title: "Elements/CrowdCardContainer",
  component: CrowdCardContainer,
  argTypes: {
    state: { control: "select", options: CROWDFUNDSTATELIST },
    image: { control: "select", options: projectImages.map((value, index) => index) },
    category: {control: "select", options: categories.map((value, index) => index)},
  },
}

export const Playground = (args) => <CrowdCardContainer {...args}/>

Playground.args = {
  title: "Project CoinmarketC",
  owner: "lsk13212341dfs23567246sdg",
  targetAmount: 10000,
  projectUrl: "https://moosty.com/",
}

const Template = (args) => <CrowdCardContainer {...args}/>

export const Preview = Template.bind({})
Preview.args = {
    title: "Project XXXXXXX",
    category: 2,
    owner: "lsk13212341dfs23567246sdg",
    targetAmount: 10000,
    projectUrl: "https://moosty.com/",
    image: 2,
  }

export const Open = Template.bind({})
Open.args = {
  title: "Project Trust in ICOs",
  category: 2,
  owner: "lsk13212341dfs23567246sdg",
  targetAmount: 10000,
  projectUrl: "https://moosty.com/",
  image: 3,
}

export const Pending = Template.bind({})
Pending.args = {
  title: "Project XXXXXXX",
  category: 2,
  owner: "lsk13212341dfs23567246sdg",
  targetAmount: 10000,
  projectUrl: "https://moosty.com/",
  image: 4,
  state: crowdFundStates.PENDING,
}

export const Active = Template.bind({})
Active.args = {
  ...Preview.args,
  state: "active.active",
  image: 6,

}

export const ActivePending = Template.bind({})
ActivePending.args = {
  ...Preview.args,
  state: "active.pending",
  image: 5,
}

export const ActiveVoting = Template.bind({})
ActiveVoting.args = {
  ...Preview.args,
}

export const ActiveClaiming = Template.bind({})
ActiveClaiming.args = {
  ...Preview.args,
  state: "active.claiming",
}


export const Failed = Template.bind({})
Failed.args = {
  ...Preview.args,
  state: "active.failed",
}


export const Ended = Template.bind({})
Ended.args = {
  ...Preview.args,
  state: "active.ended",
}


export const Canceled = Template.bind({})
Canceled.args = {
  ...Preview.args,
  state: "active.canceled",
}

