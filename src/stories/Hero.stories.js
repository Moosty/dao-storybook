import React from "react";
import { Hero } from "./Hero";

export default {
  title: "Elements/Hero",
  component: Hero,
}

export const Playground = (args) => <Hero {...args} />

Playground.args = {
  title: "Lisk Crowd | A Regulated Crowdfund Platform",
  subTitle:"Regulate your crowdfund journey with Lisk Crowd!",
  buttonLabel2:"Start Crowdfund!",
  buttonLabel1:"Explore",
  onClickButton1: () => alert("Test"),
  onClickButton2: () => alert("testers"),
}


export const hero = () => {

  return (
    <Hero
      title="Lisk Crowd | A Regulated Crowdfund Platform"
      subTitle="Regulate your crowdfund journey with Lisk Crowd!"
      buttonLabel2="Start Crowdfund!"
      buttonLabel1="Explore"
    />
  )
}

