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
import {FilterWrapper} from "../stories/FilterWrapper";

export const Page = ({user, onLogin, onLogout, onCreateAccount}) => (
  <div>
    <NavBar/>
    <div className={[appWidth].join(" ")}>
      <Container>
        <FilterWrapper />
      </Container>
      <Container>
        <div className="flex flex-row flex-wrap space-between py-4">
<Card />

          {cards.map(card => <Card {...card} />)}


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

