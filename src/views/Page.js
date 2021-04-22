import React from 'react';
import PropTypes from 'prop-types';

import {Header} from '../stories/Header';
import '../stories/page.css';
import {NavBar} from "../stories/NavBar";
import {appWidth} from "../shared/styles";
import {Container} from "../stories/Container";
import {Button} from "../stories/Button";
import {Card} from "../stories/Card";
import {PlusIcon, ThumbDownIcon, ThumbUpIcon} from "@heroicons/react/solid";
import {ButtonGroup} from "../stories/ButtonGroup";
import {VotingFooterRight} from "../stories/VotingFooterRight";
import {VotingFooterLeft} from "../stories/VotingFooterLeft";
import {FilterWrapper} from "../stories/filters/FilterWrapper";
import {BreadCrumbs} from "../stories/BreadCrumbs";
import {VotingCardContent} from "../stories/VotingCardContent";

export const Page = ({user, onLogin, onLogout, onCreateAccount}) => (
  <div>
    <NavBar/>
    <div className={[appWidth].join(" ")}>
      <Container className="flex flex-row my-4 ">
        <BreadCrumbs className="flex-start w-full"/>
        <FilterWrapper className="flex flex-row justify-end w-full" />
      </Container>
      <Container>
        <div className="flex flex-row flex-wrap justify-between space-y-8 ">


          {cards.map(card => <Card className="" {...card} />)}


        </div>


      </Container>

    </div>
  </div>

);
Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
};


const cards = [
  {
    className: "w-card",
    votingResult: "inconclusive",

    header: {
      dao: "open, inconclusive",
      title: "You have not voted",
      user: "Raphael",
    },
    content: {
      children: <VotingCardContent
        quorum={50}
        valueYes={77}
        valueNo={40}
        eligibleVotes={999}
        closed
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
      title: "You have voted yes",
      user: "Sander",

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
      user: "Corbifex",

    },
    content: {
      children: <VotingCardContent
        quorum={51}
        valueYes={50}
        valueNo={50}
        openLabel="78 days left to close"/>,
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
      user: "Jurre",

    },
    content: {
      children: <VotingCardContent
        quorum={80}
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
      dao: "open, Yes",
      title: "You have not voted",
      user: "JurreM",

    },

    content: {
      children: <VotingCardContent
        quorum={10}
        valueYes={2}
        valueNo={2}
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
    },
    content: {
      children: <VotingCardContent
        quorum={80}
        valueYes={90}
        valueNo={5}
        eligibleVotes={100}

        openLabel="1 days left to close"/>,
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

