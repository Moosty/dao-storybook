import {VotingCardContent} from "../stories/voting/VotingCardContent";
import {VotingFooterLeft} from "../stories/voting/VotingFooterLeft";
import {VotingFooterRight} from "../stories/voting/VotingFooterRight";
import React from "react";

export const allCardsData = [
  {
    dao: "DAO X",
    title: "New Idea #34",
    user: {name: "Raphael", address: "asdfasdfasdfadf"},
    end: 0,
    start: 150,
    notAllowed: false,
    userVote: null,
    quorum: 50,
    minToWin: 50,
    yes: 360,
    no: 360,
    eligibleVotes: 999,
    height: 100,
  },
  {
    dao: "DAO X ",
    title: "New Idea #342",
    user: {name: "Raphael", address: "asdfasdfasdfadf"},
    end: 0,
    notAllowed: false,
    userVote: null,
    quorum: 50,
    minToWin: 50,
    yes: 361,
    no: 360,
    eligibleVotes: 999,
    height: 100,
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },

  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
]

export const allCardsData1 = [
  {
    className: "w-card",
    votingResult: "inconclusive",

    header: {
      dao: "open, inconclusive",
      title: "You have not voted",
      user: {name: "Raphael", address: "lkasdjflkasjdfasdfkljasdf"},
      openLabel: "2 days left to close",

    },
    content: {
      children: <VotingCardContent
        quorum={50}
        minToWin={50}
        valueYes={361}
        valueNo={360}
        eligibleVotes={999}

      />,
    },
    footer: {
      left: <VotingFooterLeft/>,
      right: <VotingFooterRight/>,
    }
  },
  {
    className: "w-card",
    votingResult: "inconclusive",
    header: {
      dao: "open, inconclusive",
      title: "You have voted yes, but whas that the question?",
      user: {name: "Jurre", address: "lkasdjflkasdfghjdfkljasdf"},
      openLabel: "12 days left to close",
    },
    content: {
      children: <VotingCardContent
        quorum={50}
        valueYes={30}
        valueNo={20}
        eligibleVotes={100}
        openLabel="78 days left to close"/>,
    },
    footer: {
      left: <VotingFooterLeft/>,
      right: <VotingFooterRight
        userVote="yes"
      />,
    }
  },
  {
    className: "w-card",
    votingResult: "inconclusive",
    header: {
      dao: "open, inconclusive",
      title: "You have voted no",
      user: {name: "Corbifex", address: "lkasdjflkasjdfkljasdf"},
      openLabel: "43 days left to close",
    },
    content: {
      children: <VotingCardContent
        quorum={82}
        valueYes={50}
        valueNo={50}
        eligibleVotes={100}
      />,
    },
    footer: {
      left: <VotingFooterLeft/>,
      right: <VotingFooterRight
        userVote="no"/>,
    }
  },
  {
    className: "w-card",
    votingResult: "inconclusive",
    header: {
      dao: "open, inconclusive",
      title: "the voting isnt for you",
      user: {name: "Jurre", address: "lkasdjflsdfasdfkasjdfkljasdf"},
      openLabel: "88 days left to close",
    },
    content: {
      children: <VotingCardContent
        quorum={100}
        valueYes={90}
        valueNo={5}
        eligibleVotes={100}
        openLabel="79 days left to close"/>,
    },
    footer: {
      notAllowed: true,
      bgColor: "surfaceIconBg",
      left: <VotingFooterLeft
        notAllowed/>,
      right: <VotingFooterRight
        notAllowed/>,
    }
  },
  {
    className: "w-card",
    votingResult: "yes",
    header: {
      dao: "LiskCenterUtrecht",
      title: "Are we going to build project x?",
      user: {name: "Xinrong", address: "asdfsdfsdfasdfasdf"},
      openLabel: "18 days left to close",
    },
    content: {
      children: <VotingCardContent
        minToWin={50}
        quorum={50}
        valueYes={4}
        valueNo={12}
        eligibleVotes={24}
        openLabel="5 days left to close"/>,
    },
    footer: {
      left: <VotingFooterLeft/>,
      right: <VotingFooterRight/>,
    }
  },
  {
    className: "w-card",
    votingResult: "yes",
    header: {
      dao: "open, Yes",
      title: "You have voted yes",
      openLabel: "9 days left to close",
      user: {name: "Peter", address: "asdfsdfsdfsdfsdf"},
    },
    content: {
      children: <VotingCardContent
        quorum={98}
        valueYes={90}
        valueNo={67}
        eligibleVotes={1987}
        openLabel="79 days left to close"/>,
    },
    footer: {
      left: <VotingFooterLeft/>,
      right: <VotingFooterRight
        userVote="yes"
      />,
    }
  },
  {
    className: "w-card",
    votingResult: "yes",
    header: {
      dao: "open, Yes",
      title: "You have voted no",
      openLabel: "8 days left to close",
      user: {name: "Peter", address: "asdfsdfsdfsdfsdf"},
    },
    content: {
      children: <VotingCardContent
        quorum={10}
        valueYes={5}
        valueNo={17}
        eligibleVotes={56}
        openLabel="9 days left to close"/>,
    },
    footer: {
      left: <VotingFooterLeft/>,
      right: <VotingFooterRight
        userVote="no"
      />,
    }
  },
  {
    className: "w-card",
    votingResult: "yes",
    header: {
      dao: "open, Yes",
      title: "This voting isnt for you",
      openLabel: "100 days left to close",
      user: {name: "Peter", address: "asdfsdfsdfsdfsdf"},
    },
    content: {
      children: <VotingCardContent
        quorum={100}
        valueYes={100}
        valueNo={100}
        eligibleVotes={654}
        openLabel="99 days left to close"/>,
    },
    footer: {
      notAllowed: true,
      left: <VotingFooterLeft
        notAllowed/>,
      right: <VotingFooterRight
        notAllowed/>,
    }
  },
  {
    className: "w-card",
    votingResult: "no",
    header: {
      dao: "open, No",
      title: "You have not voted",
      openLabel: "1 days left to close",
      user: {name: "Peter", address: "asdfsdfsdfsdfsdf"},
    },
    content: {
      children: <VotingCardContent
        quorum={20}
        valueYes={30}
        valueNo={40}
        eligibleVotes={100}
        openLabel="1 days left to close"/>,
    },
    footer: {
      left: <VotingFooterLeft/>,
      right: <VotingFooterRight/>,
    }
  },
  {
    className: "w-card",
    votingResult: "no",
    header: {
      dao: "open, No",
      title: "You have voted yes",
      openLabel: "1 days left to close",
      user: {name: "Peter", address: "asdfsdfsdfsdfsdf"},
    },
    content: {
      children: <VotingCardContent
        quorum={20}
        valueYes={30}
        valueNo={20}
        eligibleVotes={100}
        openLabel="79 days left to close"/>,
    },
    footer: {
      left: <VotingFooterLeft/>,
      right: <VotingFooterRight
        userVote="yes"
      />,
    }
  },
  {
    className: "w-card",
    votingResult: "no",
    header: {
      dao: "open, No",
      title: "You have voted no",
      openLabel: "17 days left to close",
      user: {name: "Peter", address: "asdfsdfsdfsdfsdf"},
    },
    content: {
      children: <VotingCardContent
        quorum={30}
        valueYes={40}
        valueNo={10}
        eligibleVotes={100}
        openLabel="11 days left to close"/>,
    },
    footer: {
      left: <VotingFooterLeft/>,
      right: <VotingFooterRight
        userVote="no"
      />,
    }
  },
  {
    className: "w-card",
    votingResult: "no",
    header: {
      dao: "open, No",
      title: "This voting isnt for you",
      openLabel: "1 days left to close",
      user: {name: "Peter", address: "asdfsdfsdfsdfsdf"},
    },
    content: {
      children: <VotingCardContent
        quorum={80}
        valueYes={90}
        valueNo={5}
        eligibleVotes={100}
      />,
    },
    footer: {
      left: <VotingFooterLeft
        notAllowed/>,
      right: <VotingFooterRight
        notAllowed/>,
    }
  },
  // CLOSED
  {
    className: "w-card",
    votingResult: "inconclusive",
    header: {
      dao: "closed, inconclusive",
      title: "You have not voted",
      closed: true,
      user: {name: "Peter", address: "asdfsdfsdfsdfsdf"},
    },
    content: {
      children: <VotingCardContent
        quorum={80}
        valueYes={90}
        valueNo={5}
        eligibleVotes={100}
        closed/>,
    },
    footer: {
      left: <VotingFooterLeft
        votingResult="inconclusive"
        votingClosed/>,
      right: <VotingFooterRight
        votingResult="inconclusive"
        votingClosed/>,
    }
  },
  {
    className: "w-card",
    votingResult: "inconclusive",
    header: {
      dao: "closed, inconclusive",
      title: "You have voted yes",
      closed: true,
      user: {name: "Peter", address: "asdfsdfsdfsdfsdf"},
    },
    content: {
      children: <VotingCardContent
        quorum={80}
        valueYes={90}
        valueNo={5}
        eligibleVotes={100}
        closed/>,
    },
    footer: {
      left: <VotingFooterLeft
        votingResult="inconclusive"
        votingClosed
        userVote="yes"
      />,
      right: <VotingFooterRight
        userVote="yes"
        votingClosed
      />,
    }
  },
  {
    className: "w-card",
    votingResult: "inconclusive",
    header: {
      dao: "closed, inconclusive",
      title: "You have voted no",
      closed: true,
      user: {name: "Peter", address: "asdfsdfsdfsdfsdf"},
    },
    content: {
      children: <VotingCardContent
        quorum={80}
        valueYes={90}
        valueNo={5}
        eligibleVotes={100}
        closed/>,
    },
    footer: {
      left: <VotingFooterLeft
        votingResult="inconclusive"
        userVote="no"
        votingClosed/>,
      right: <VotingFooterRight
        userVote="no"
        votingClosed/>,
    }
  },
  {
    className: "w-card",
    votingResult: "inconclusive",
    header: {
      dao: "closed, inconclusive",
      title: "the voting isnt for you",
      closed: true,
      user: {name: "Peter1", address: "asdfsdfsdfsdfsdfff"},
    },
    content: {
      children: <VotingCardContent
        quorum={80}
        valueYes={90}
        valueNo={5}
        eligibleVotes={100}
        closed/>,
    },
    footer: {
      notAllowed: true,
      bgColor: "surfaceIconBg",
      left: <VotingFooterLeft
        votingResult="inconclusive"
        notAllowed
        votingClosed/>,
      right: <VotingFooterRight
        notAllowed
        votingClosed/>,
    }
  },
  {
    className: "w-card",
    votingResult: "yes",
    header: {
      dao: "closed, Yes",
      title: "You have not voted",
      closed: true,
      user: {name: "Peter", address: "asdfsdfsdfsdfsdf"},
    },
    content: {
      children: <VotingCardContent
        quorum={80}
        valueYes={90}
        valueNo={5}
        eligibleVotes={100}
        closed/>,
    },
    footer: {
      left: <VotingFooterLeft
        votingResult="yes"
        votingClosed/>,
      right: <VotingFooterRight
        votingClosed/>,
    }
  },
  {
    className: "w-card",
    votingResult: "yes",
    header: {
      dao: "closed, Yes",
      title: "You have voted yes",
      user: {name: "Peter", address: "asdfsdfsdfsdfsdf"},
    },
    closed: true,
    content: {
      children: <VotingCardContent
        quorum={80}
        valueYes={90}
        valueNo={5}
        eligibleVotes={100}
        closed/>,
    },
    footer: {
      left: <VotingFooterLeft
        votingResult="yes"
        userVote="yes"
        votingClosed/>,
      right: <VotingFooterRight
        userVote="yes"
        votingClosed/>,
    }
  },
  {
    className: "w-card",
    votingResult: "yes",
    header: {
      dao: "closed, Yes",
      title: "You have voted no",
      closed: true,
      user: {name: "Peter", address: "asdfsdfsdfsdfsdf"},
    },
    content: {
      children: <VotingCardContent
        quorum={80}
        valueYes={90}
        valueNo={5}
        eligibleVotes={100}
        closed/>,
    },
    footer: {
      left: <VotingFooterLeft
        votingResult="yes"
        userVote="no"
        votingClosed/>,
      right: <VotingFooterRight
        userVote="no"
        votingClosed
      />,
    }
  },
  {
    className: "w-card",
    votingResult: "yes",
    header: {
      dao: "closed, Yes",
      title: "This voting isnt for you",
      closed: true,
      user: {name: "Peter", address: "asdfsdfsdfsdfsdf"},
    },
    content: {
      children: <VotingCardContent
        quorum={80}
        valueYes={90}
        valueNo={5}
        eligibleVotes={100}
        closed/>,
    },
    footer: {
      notAllowed: true,
      left: <VotingFooterLeft
        votingResult="yes"
        votingClosed
        notAllowed/>,
      right: <VotingFooterRight
        votingClosed
        notAllowed/>,
    }
  },
  {
    className: "w-card",
    votingResult: "no",
    header: {
      dao: "closed, No",
      title: "You have not voted",
      closed: true,
      user: {name: "Peter", address: "asdfsdfsdfsdfsdf"},

    },

    content: {
      children: <VotingCardContent
        quorum={80}
        valueYes={90}
        valueNo={5}
        eligibleVotes={100}
        closed/>,
    },
    footer: {
      left: <VotingFooterLeft
        votingResult="no"
        userVote="no"
        votingClosed/>,
      right: <VotingFooterRight
        userVote="no"
        votingClosed/>,


    }
  },
  {
    className: "w-card",
    votingResult: "no",

    header: {
      dao: "closed, No",
      title: "You have voted yes",
      closed: true,
      user: {name: "Peter", address: "asdfsdfsdfsdfsdf"},

    },

    content: {
      children: <VotingCardContent
        quorum={80}
        valueYes={90}
        valueNo={5}
        eligibleVotes={100}
        closed/>,
    },
    footer: {
      left: <VotingFooterLeft
        votingResult="no"
        userVote="yes"
        votingClosed/>,
      right: <VotingFooterRight
        userVote="yes"
        votingClosed/>,
    }
  },
  {
    className: "w-card",
    votingResult: "no",
    header: {
      dao: "closed, No",
      title: "You have voted no",
      closed: true,
      user: {name: "Peter", address: "asdfsdfsdfsdfsdf"},
    },
    content: {
      children: <VotingCardContent
        quorum={80}
        valueYes={90}
        valueNo={5}
        eligibleVotes={100}
        closed/>,
    },
    footer: {
      left: <VotingFooterLeft
        votingResult="no"
        userVote="no"
        votingClosed/>,
      right: <VotingFooterRight
        userVote="no"
        votingClosed
      />,
    }
  },
  {
    className: "w-card",
    votingResult: "no",
    votingClosed: true,
    header: {
      dao: "closed, No",
      title: "This voting isnt for you",
      closed: true,
      user: {name: "Peter", address: "asdfsdfsdfsdfsdf"},
    },
    content: {
      children: <VotingCardContent
        quorum={80}
        valueYes={90}
        valueNo={5}
        eligibleVotes={100}
      />,
    },
    footer: {
      left: <VotingFooterLeft
        votingResult="no"
        notAllowed
        votingClosed
      />,
      right: <VotingFooterRight
        notAllowed
        votingClosed
        votingResult="inconclusive"/>,
    }
  },
]