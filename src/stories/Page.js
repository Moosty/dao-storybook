import React from 'react';
import PropTypes from 'prop-types';

import {Header} from './Header';
import './page.css';
import {NavBar} from "./NavBar";
import {appWidth} from "../shared/styles";
import {Container} from "./Container";
import {Button} from "./Button";
import {Card} from "./Card";
import {PlusIcon, ThumbDownIcon, ThumbUpIcon} from "@heroicons/react/solid";
import {ButtonGroup} from "./ButtonGroup";
import {VotingFooterRight} from "./VotingFooterRight";
import {VotingFooterLeft} from "./VotingFooterLeft";

export const Page = ({user, onLogin, onLogout, onCreateAccount}) => (
  <div>
    <NavBar/>
    <div className={[appWidth].join(" ")}>
      <Container>
        <div className="flex flex-row flex-wrap space-between">


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

    header:{
      dao: "open, inconclusive",
      title:"You have not voted",
    },
    footer: {
      left: <VotingFooterLeft />,
      right: <VotingFooterRight />,


    }
  },
  {
    className: "w-card",
    votingResult: "inconclusive",
    header:{
      dao: "open, inconclusive",
      title:"You have voted yes",
    },
    footer: {
      left: <VotingFooterLeft />,
      right: <VotingFooterRight
        userVote= "yes"
      />,


    }
  },
  {
    className: "w-card",
    votingResult: "inconclusive",

    header:{
      dao: "open, inconclusive",
      title:"You have voted no",
    },
    footer: {

      left: <VotingFooterLeft />,
      right: <VotingFooterRight
        userVote= "no"/>,


    }
  },
  {
    className: "w-card",
    votingResult: "inconclusive",

    header:{
      dao: "open, inconclusive",
      title:"the voting isnt for you",
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

    header:{
      dao: "open, Yes",
      title:"You have not voted",
    },
    footer: {
      left: <VotingFooterLeft />,
      right: <VotingFooterRight />,


    }
  },
  {
    className: "w-card",
    votingResult: "yes",

    header:{
      dao: "open, Yes",
      title:"You have voted yes",
    },
    footer: {
      left: <VotingFooterLeft />,
      right: <VotingFooterRight
        userVote= "yes"
      />,


    }
  },
  {
    className: "w-card",
    votingResult: "yes",

    header:{
      dao: "open, Yes",
      title:"You have voted no",
    },
    footer: {
      left: <VotingFooterLeft />,
      right: <VotingFooterRight
        userVote= "no"
      />,


    }
  },
  {
    className: "w-card",
    votingResult: "yes",

    header:{
      dao: "open, Yes",
      title:"This voting isnt for you",
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

    header:{
      dao: "open, No",
      title:"You have not voted",
    },
    footer: {
      left: <VotingFooterLeft />,
      right: <VotingFooterRight />,


    }
  },
  {
    className: "w-card",
    votingResult: "no",

    header:{
      dao: "open, No",
      title:"You have voted yes",
    },
    footer: {
      left: <VotingFooterLeft />,
      right: <VotingFooterRight
        userVote= "yes"
      />,


    }
  },
  {
    className: "w-card",
    votingResult: "no",

    header:{
      dao: "open, No",
      title:"You have voted no",
    },
    footer: {
      left: <VotingFooterLeft />,
      right: <VotingFooterRight
        userVote= "no"
      />,


    }
  },
  {
    className: "w-card",
    votingResult: "no",

    header:{
      dao: "open, No",
      title:"This voting isnt for you",
    },
    footer: {
      left: <VotingFooterLeft
        notAllowed/>,
      right: <VotingFooterRight
        notAllowed />,

    }
  },


]

