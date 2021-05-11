import React from "react";
import { VotingContainer } from "./VotingContainer";
import {Container} from "../Container";
import {allCardsData} from "../../fixtures/cards";

export default {
  title: "Cards/Votingcontainer",
  component: VotingContainer,
  argTypes: {
    userVote: {
      control: {type: "select"},
      options: [null, "yes", "no"],
      default: null,
    },
  },
}

export const Playground = (args) => <VotingContainer {...args} />

Playground.args = {
  dao: "LCU DAO 2",
  title: "Vote on this new idea",
  user: {name: "Raphael", address: "asdfasdfasdfadf"},
  end: 0,
  start: 150,
  notAllowed: false,
  quorum: 50,
  minToWin: 50,
  yes: 360,
  no: 360,
  eligibleVotes: 999,
  height: 100,
  readOnlyToolTip: "You are not allowed to vote.",
};

export const All = () => <Container>
  <div className="flex flex-row flex-wrap justify-between space-y-8 ">
    {allCardsData.map(card => <VotingContainer {...card} />)}
  </div>
</Container>

export const ReadOnly = (args) => <VotingContainer {...args} />

ReadOnly.args = {
  dao: "LCU DAO",
  title: "Vote on this new idea 1",
  user: {name: "Raphael", address: "asdfasdfasdfadf"},
  end: 0,
  start: 150,
  notAllowed: true,
  quorum: 50,
  minToWin: 50,
  yes: 360,
  no: 360,
  eligibleVotes: 999,
  height: 100,
  readOnlyToolTip: "You are not allowed to vote.",
};

export const Open = (args) => <VotingContainer {...args} />

Open.args =  {
  dao: "open, yes",
  title: "You have not voted",
  user: {name: "Raphael", address: "asdfasdfasdfadf"},
  end: 1,
  notAllowed: false,
  userVote: null,
  quorum: 50,
  minToWin: 50,
  yes: 361,
  no: 360,
  eligibleVotes: 999,
  height: 0,
  onClickThumbUp: () => alert(),
  onClickThumbDown: () => alert("you thumbed down!"),
};

export const NotVotedNotEnoughVotes = (args) => <VotingContainer {...args} />

NotVotedNotEnoughVotes.args = {
  dao: "LCU DAO",
  title: "Vote on this new idea 1",
  user: {name: "Raphael", address: "asdfasdfasdfadf"},
  end: 0,
  start: 150,
  notAllowed: false,
  quorum: 50,
  minToWin: 50,
  yes: 360,
  no: 360,
  eligibleVotes: 999,
  height: 100,
  readOnlyToolTip: "You are not allowed to vote.",
};

export const NotVotedApproved = (args) => <VotingContainer {...args} />

NotVotedApproved.args = {
  dao: "LCU DAO",
  title: "Vote on this new idea 1",
  user: {name: "Raphael", address: "asdfasdfasdfadf"},
  end: 0,
  start: 150,
  notAllowed: false,
  quorum: 50,
  minToWin: 50,
  yes: 361,
  no: 360,
  eligibleVotes: 999,
  height: 100,
  readOnlyToolTip: "You are not allowed to vote.",
};

export const NotVotedNotApproved = (args) => <VotingContainer {...args} />

NotVotedNotApproved.args = {
  dao: "DAO X x",
  title: "New Idea #346",
  user: {name: "Raphael", address: "asdfasdfasdfadf"},
  end: 0,
  notAllowed: false,
  userVote: null,
  quorum: 50,
  minToWin: 50,
  yes: 361,
  no: 400,
  eligibleVotes: 999,
  height: 100,
}

export const VotedYesNotEnoughVotes = (args) => <VotingContainer {...args} />

VotedYesNotEnoughVotes.args =   {
  dao: "open, inconclusive",
  title: "You have voted",
  user: {name: "Raphael", address: "asdfasdfasdfadf"},
  end: 0,
  notAllowed: false,
  userVote: "yes",
  quorum: 50,
  minToWin: 50,
  yes: 360,
  no: 360,
  eligibleVotes: 999,
  height: 100,
}

export const VotedYesApproved = (args) => <VotingContainer {...args} />

VotedYesApproved.args = {
    dao: "open, yes",
    title: "You have voted",
    user: {name: "Raphael", address: "asdfasdfasdfadf"},
    end: 0,
    notAllowed: false,
    userVote: "yes",
    quorum: 50,
    minToWin: 50,
    yes: 361,
    no: 360,
    eligibleVotes: 999,
    height: 100,
  }

export const VotedNoNotApproved = (args) => <VotingContainer {...args} />

VotedNoNotApproved.args = {
  dao: "open, no",
  title: "You have voted",
  user: {name: "Raphael", address: "asdfasdfasdfadf"},
  end: 0,
  notAllowed: false,
  userVote: "no",
  quorum: 50,
  minToWin: 50,
  yes: 361,
  no: 400,
  eligibleVotes: 999,
  height: 100,
}

export const ReadOnlyNotEnoughVotes = (args) => <VotingContainer {...args} />

ReadOnlyNotEnoughVotes.args =  {
  dao: "open, inconclusive",
  title: "Not for you",
  user: {name: "Raphael", address: "asdfasdfasdfadf"},
  end: 0,
  notAllowed: true,
  userVote: null,
  quorum: 50,
  minToWin: 50,
  yes: 360,
  no: 360,
  eligibleVotes: 999,
  height: 100,
  readOnlyToolTip: "You are not allowed to vote. Maybe it is not your DAO or the vote started before you were a member",

}

export const ReadOnlyApproved = (args) => <VotingContainer {...args} />

ReadOnlyApproved.args = {
  dao: "open, yes",
  title: "Not for you",
  user: {name: "Raphael", address: "asdfasdfasdfadf"},
  end: 0,
  notAllowed: true,
  userVote: null,
  quorum: 50,
  minToWin: 50,
  yes: 361,
  no: 360,
  eligibleVotes: 999,
  height: 100,
  readOnlyToolTip: "You are not allowed to vote. Maybe it is not your DAO or the vote started before you were a member",
}


export const ReadOnlyNotApproved = (args) => <VotingContainer {...args} />

ReadOnlyNotApproved.args ={
  dao: "open, no",
  title: "Not for you",
  user: {name: "Raphael", address: "asdfasdfasdfadf"},
  end: 0,
  notAllowed: true,
  userVote: null,
  quorum: 50,
  minToWin: 50,
  yes: 361,
  no: 400,
  eligibleVotes: 999,
  height: 100,
  readOnlyToolTip: "You are not allowed to vote. Maybe it is not your DAO or the vote started before you were a member",
}

export const OpenInconclusiveNotVoted = (args) => <VotingContainer {...args} />

OpenInconclusiveNotVoted.args =   {
    dao: "open, inconclusive",
    title: "You have not voted",
    user: {name: "Raphael", address: "asdfasdfasdfadf"},
    end: 1,
    notAllowed: false,
    userVote: null,
    quorum: 50,
    minToWin: 50,
    yes: 360,
    no: 360,
    eligibleVotes: 999,
    height: 0,
  onClickThumbUp: () => alert(),
  onClickThumbDown: () => alert("you thumbed down!"),
  }

export const OpenYesNotVoted = (args) => <VotingContainer {...args} />

OpenYesNotVoted.args =   {
    dao: "open, yes",
    title: "You have not voted",
    user: {name: "Raphael", address: "asdfasdfasdfadf"},
    end: 1,
    notAllowed: false,
    userVote: null,
    quorum: 50,
    minToWin: 50,
    yes: 361,
    no: 360,
    eligibleVotes: 999,
    height: 0,
  onClickThumbUp: () => alert(),
  onClickThumbDown: () => alert("you thumbed down!"),
  }

export const OpenNoNotVoted = (args) => <VotingContainer {...args} />

OpenNoNotVoted.args = {
  dao: "open, no",
  title: "You have not voted",
  user: {name: "Raphael", address: "asdfasdfasdfadf"},
  end: 1,
  notAllowed: false,
  userVote: null,
  quorum: 50,
  minToWin: 50,
  yes: 361,
  no: 400,
  eligibleVotes: 999,
  height: 0,
  onClickThumbUp: () => alert(),
  onClickThumbDown: () => alert("you thumbed down!"),
}

export const OpenInconclusiveVotedYes = (args) => <VotingContainer {...args} />

OpenInconclusiveVotedYes.args =  {
  dao: "open, inconclusive",
  title: "You have voted",
  user: {name: "Raphael", address: "asdfasdfasdfadf"},
  end: 1,
  notAllowed: false,
  userVote: "yes",
  quorum: 50,
  minToWin: 50,
  yes: 360,
  no: 360,
  eligibleVotes: 999,
  height: 0,
}

export const OpenYesVotedYes = (args) => <VotingContainer {...args} />
OpenYesVotedYes.args =   {
    dao: "open, yes",
    title: "You have voted",
    user: {name: "Raphael", address: "asdfasdfasdfadf"},
    end: 1,
    notAllowed: false,
    userVote: "yes",
    quorum: 50,
    minToWin: 50,
    yes: 361,
    no: 360,
    eligibleVotes: 999,
    height: 0,
  }

export const OpenNoVotedNo = (args) => <VotingContainer {...args} />
OpenNoVotedNo.args = {
  dao: "open, no",
  title: "You have voted",
  user: {name: "Raphael", address: "asdfasdfasdfadf"},
  end: 1,
  notAllowed: false,
  userVote: "no",
  quorum: 50,
  minToWin: 50,
  yes: 361,
  no: 400,
  eligibleVotes: 999,
  height: 0,
}

export const OpenInconclusiveReadOnly = (args) => <VotingContainer {...args} />
OpenInconclusiveReadOnly.args = {
  dao: "open, inconclusive",
  title: "Not for you",
  user: {name: "Raphael", address: "asdfasdfasdfadf"},
  end: 1,
  notAllowed: true,
  userVote: null,
  quorum: 50,
  minToWin: 50,
  yes: 360,
  no: 360,
  eligibleVotes: 999,
  height: 0,
  readOnlyToolTip: "You are not allowed to vote. Maybe it is not your DAO or the vote started before you were a member",

}
export const OpenYesReadOnly = (args) => <VotingContainer {...args} />

OpenYesReadOnly.args = {
  dao: "open, yes",
  title: "Not for you",
  user: {name: "Raphael", address: "asdfasdfasdfadf"},
  end: 1,
  notAllowed: true,
  userVote: null,
  quorum: 50,
  minToWin: 50,
  yes: 361,
  no: 360,
  eligibleVotes: 999,
  height: 0,
  readOnlyToolTip: "You are not allowed to vote. Maybe it is not your DAO or the vote started before you were a member",

}
export const OpenNoReadOnly = (args) => <VotingContainer {...args} />

OpenNoReadOnly.args = {
    dao: "open, no",
    title: "Not for you",
    user: {name: "Raphael", address: "asdfasdfasdfadf"},
    end: 1,
    notAllowed: true,
    userVote: null,
    quorum: 50,
    minToWin: 50,
    yes: 361,
    no: 400,
    eligibleVotes: 999,
    height: 0,
  readOnlyToolTip: "You are not allowed to vote. Maybe it is not your DAO or the vote started before you were a member",

}

