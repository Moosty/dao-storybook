import React from "react";
import { CrowdCardContainer } from "./CrowdCardContainer";
import { categories, crowdFundStates, projectImages } from "./constants";

export default {
  title: "Elements/CrowdCardContainer",
  component: CrowdCardContainer,
}

export const Playground = (args) => <CrowdCardContainer {...args}/>

Playground.args = {
  title: "Project CoinmarketC",
  category: 1,
  categories: categories,
  owner: "lsk13212341dfs23567246sdg",
  targetAmount: 10000,
  projectUrl: "https://moosty.com/",
  state: "",
  crowdFundStates: crowdFundStates,
  image: 1,
  projectImages: projectImages,
}

const Template = (args) => <CrowdCardContainer {...args}/>

export const Preview = Template.bind({})
Preview.args = {
    title: "Project XXXXXXX",
    category: 2,
    owner: "lsk13212341dfs23567246sdg",
    targetAmount: 10000,
    projectUrl: "https://moosty.com/",
    state: "preview",
    image: 1,
  }

export const Open = Template.bind({})
Open.args = {
  title: "Project Trust in ICOs",
  category: 2,
  owner: "lsk13212341dfs23567246sdg",
  targetAmount: 10000,
  projectUrl: "https://moosty.com/",
  state: "open",
  image: 1,
}

export const Pending = Template.bind({})
Pending.args = {
  title: "Project XXXXXXX",
  category: 2,
  owner: "lsk13212341dfs23567246sdg",
  targetAmount: 10000,
  projectUrl: "https://moosty.com/",
  state: "open",
  image: 1,
}

export const Active = Template.bind({})
Active.args = {
  ...Preview.args,
  state: "active.active",
}

export const ActivePending = Template.bind({})
ActivePending.args = {
  ...Preview.args,
  state: "active.pending",
}

export const ActiveVoting = Template.bind({})
ActiveVoting.args = {
  ...Preview.args,
  state: "active.voting",
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

