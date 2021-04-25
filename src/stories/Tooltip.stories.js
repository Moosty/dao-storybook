import React from "react";
import {Tooltip} from "./Tooltip";
import {Card} from "./Card";
import {VotingCardContent} from "./VotingCardContent";
import {VotingFooterLeft} from "./VotingFooterLeft";
import {VotingFooterRight} from "./VotingFooterRight";
import { allCardsData } from "../fixtures/cards";

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
  <Tooltip description={<Card className="" {...allCardsData[3]} />} >Card Tooltip</Tooltip>

</div>

const card = {
  className: "w-card",
  votingResult: "inconclusive",

  header: {
    dao: "open, inconclusive",
    title: "You have not voted",
    user: "Raphael",
    openLabel: "2 days left to close",

  },
  content: {
    children: <VotingCardContent
      quorum={50}
      valueYes={77}
      valueNo={40}
      eligibleVotes={999}

    />,
  },
  footer: {

    left: <VotingFooterLeft/>,
    right: <VotingFooterRight/>,


  }
}
