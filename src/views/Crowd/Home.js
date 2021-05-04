import React from "react";
import {NavBar} from "../../stories/nav/NavBar";
import {Hero} from "../../stories/Hero";
import {appWidth} from "../../shared/styles";
import {Container} from "../../stories/Container";
import {FilterWrapper} from "../../stories/filters/FilterWrapper";
import {BreadCrumbs} from "../../stories/BreadCrumbs";
import {FilterDao} from "../../stories/filters/FilterDao";
import {Card} from "../../stories/cards/Card";
import {CardHeader} from "../../stories/cards/CardHeader";
import {CrowdCardHeader} from "../../stories/cards/CrowdCardHeader";
import {Paper} from "../../stories/Paper";
import {CrowdCard} from "../../stories/cards/CrowdCard";
import PropTypes from "prop-types";
import {Button} from "../../stories/Button";
import {PlusIcon} from "@heroicons/react/solid";
import {Page} from "../Page";
import {Filter} from "../../stories/filters/Filter";
import {AccountProjectList} from "../../stories/AccountProjectList";
import {crowdFundStates as crowdfunstates, crowdFundStates} from "../../stories/crowd/constants";
import {CrowdCardContainer} from "../../stories/crowd/CrowdCardContainer";

export const Home= ({}) => {
  return ( <>
    <NavBar {...navBarArgs} />
    <Hero
    title="Lisk Crowd | A Regulated Crowdfund Platform"
    subTitle="Regulate your crowdfund journey with Lisk Crowd!"/>
      <Container className={[appWidth, "py-6"].join(" ")}>
        <FilterWrapper>
          <BreadCrumbs />
          <FilterDao classname/>
        </FilterWrapper>
      </Container>
      <Container className={[appWidth, "space-x-4","space-y-4", "flex","flex-wrap", "flex-row"].join(" ")}>
        {projects.map((project) => (<CrowdCardContainer {...project} />))}
        </Container>
      <Container className={[appWidth].join(" ")}>
        <AccountProjectList projects={projects} />
      </Container>
    </>
  )
}


Home.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Home.defaultProps = {
  user: null,
};

const navBarArgs = {
  user: {
    name: "Raphael",
    address: "klasjdflkasjdf",
  },
  logo: <img
    src="/images/logo.png"
    className="block h-6 w-auto"
    alt="PLAO"
  />,
  navigation: [
    {name: 'Explore', onClick: () => alert("Go to Crowdfunds"), current: true},
    {name: 'Members', onClick: () => alert("Goto Members"), current: false},
    {name: 'Projects', onClick: () => alert("Goto DAOs"), current: false},
  ],
  ctaButton: <Button
    label="Start new Crowdfund"

    iconBefore
    icon={<PlusIcon className="h-5 w-5 -ml-2 mr-2"/>}
  />,
  userNavigation: [
    {name: 'My Account', onClick: () => alert("Go to my account")},
    {name: 'Sign out', onClick: () => alert("Sign out")},
  ],
  invitations: [
    {
      dao: "LiskCenterUtrecht",
      id: "aksldjflksjdflkjdsf",
    }
  ],
}

const projects = [
  {
    id: 1,
    state: crowdfunstates.PREVIEW,
    title: 'The DAO Project',
    category: 2,
    userAddress: '3457743L',
    userName: 'Raphael',
    targetAmount: '89504',
    totalRaised: '20040',
    durationProject: '90',
    projectUrl: '#',
    image: 0,
    closeDate: '5-4',
    closeDateFull: '7-3',
    backers: [
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      }

    ],
    donatedAmount: '10009',
    viewer: 'guest',
    maxVoteWeight: '100',
    notVoteWeight: '60',
    voteResult: 'voteresult',
    time: 'in one day',
    percentage: 20,
  },
  {
    id: 2,
    state: crowdfunstates.OPEN,
    title: 'This is a super long project name.',
    category: 0,
    userAddress: '345733333743L',
    userName: 'Sander',
    targetAmount: '203920',
    totalRaised: '20040',

    durationProject: '90',
    projectUrl: 'www.moosty.com',
    image: 1,
    closeDate: '5-4',
    closeDateFull: '7-3',
    backers: [
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      }

    ],
    donatedAmount: '10009',
    viewer: 'guest',
    maxVoteWeight: '100',
    notVoteWeight: '60',
    voteResult: 'voteresult',
  },
  {
    id: 3,
    state: crowdfunstates.PENDING,
    title: 'dit is een title',
    category: 0,
    userAddress: '345557743L',
    userName: 'Raphael',
    targetAmount: '200',
    totalRaised: '50',

    durationProject: '90',
    projectUrl: '#',
    image: 2,
    closeDate: '5-4',
    closeDateFull: '7-3',
    backers: [
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      }

    ],
    donatedAmount: '10009',
    viewer: 'guest',
    maxVoteWeight: '100',
    notVoteWeight: '60',
    voteResult: 'voteresult',
  },
  {
    id: 4,
    state: crowdfunstates.ACTIVE.ACTIVE,
    title: 'dit is een title',
    category: 0,
    userAddress: '34517743L',
    userName: 'Raphael',
    targetAmount: '89504',
    durationProject: '90',
    projectUrl: '#',
    image: 3,
    closeDate: '5-4',
    closeDateFull: '7-3',
    backers: [
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      }

    ],
    donatedAmount: '10009',
    viewer: 'guest',
    maxVoteWeight: '100',
    notVoteWeight: '60',
    voteResult: 'voteresult',
  },
  {
    id: 5,
    state: crowdfunstates.ACTIVE.VOTING,
    title: 'dit is een title',
    category: 0,
    userAddress: '345799743L',
    userName: 'Raphael',
    targetAmount: '8950994',
    durationProject: '90',
    projectUrl: 0,
    image: 4,
    closeDate: '5-4',
    closeDateFull: '7-3',
    backers: [
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      }

    ],
    donatedAmount: '10009',
    viewer: 'guest',
    maxVoteWeight: '100',
    notVoteWeight: '60',
    voteResult: 'voteresult',
  },
  {
    id: 6,
    state: crowdfunstates.ACTIVE.CLAIMING,
    title: 'dit is een title',
    category: 0,
    userAddress: '345700743L',
    userName: 'Raphael',
    targetAmount: '89504',
    durationProject: '90',
    projectUrl: 3,
    image: 5,
    closeDate: '5-4',
    closeDateFull: '7-3',
    backers: [
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      }

    ],
    donatedAmount: '10009',
    viewer: 'guest',
    maxVoteWeight: '100',
    notVoteWeight: '60',
    voteResult: 'voteresult',
  },
  {
    id: 7,
    state: crowdfunstates.FAILED,
    title: 'dit is een title',
    category: 0,
    userAddress: '3457700000000043L',
    userName: 'Raphael',
    targetAmount: '89504',
    durationProject: '90',
    projectUrl: 1,
    image: 6,
    closeDate: '5-4',
    closeDateFull: '7-3',
    backers: [
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      }

    ],
    donatedAmount: '10009',
    viewer: 'guest',
    maxVoteWeight: '100',
    notVoteWeight: '60',
    voteResult: 'voteresult',
  },
  {
    id: 8,
    state: crowdfunstates.ENDED,
    title: 'dit is een title',
    category: 0,
    userAddress: '3457446464646743L',
    userName: 'Raphael',
    targetAmount: '89504',
    durationProject: '90',
    projectUrl: 2,
    image: 7,
    closeDate: '5-4',
    closeDateFull: '7-3',
    backers: [
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      }

    ],
    donatedAmount: '10009',
    viewer: 'guest',
    maxVoteWeight: '100',
    notVoteWeight: '60',
    voteResult: 'voteresult',
  },
  {
    id: 9,
    state: crowdfunstates.CANCELED,
    title: 'dit is een title',
    category: 0,
    userAddress: '345222227743L',
    userName: 'Raphael',
    targetAmount: '89504',
    durationProject: '90',
    projectUrl: '#',
    image: 8,
    closeDate: '5-4',
    closeDateFull: '7-3',
    backers: [
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      }

    ],
    donatedAmount: '10009',
    viewer: 'guest',
    maxVoteWeight: '100',
    notVoteWeight: '60',
    voteResult: 'voteresult',
  }
]
