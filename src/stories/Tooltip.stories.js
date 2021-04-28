import React from "react";
import {Tooltip} from "./Tooltip";
import {allCardsData} from "../fixtures/cards";
import {VotingContainer} from "./voting/VotingContainer";

export default {
  title: "Elements/Tooltip",
  component: Tooltip,
  argTypes: {backgroundColor: 'color'},
}

export const Template = (args) => <Tooltip {...args} />

export const All = () => <div className="m-4 space-y-3">
  <Tooltip light description="dit is een tooltip">Light Tooltip</Tooltip>
  <Tooltip description="Single line tip" dark>Dark Tooltip</Tooltip>
  <Tooltip
    description="Select on which cloud platform you want to deploy your app. You can always switch to a different platform at a later time."
    dark>Multiline Tooltip</Tooltip>
  <Tooltip description={<VotingContainer light className="" {...allCardsData[3]} />}>Card Tooltip</Tooltip>
</div>
