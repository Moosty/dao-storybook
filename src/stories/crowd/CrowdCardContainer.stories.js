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

