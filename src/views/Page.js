import React from 'react';
import PropTypes from 'prop-types';
import '../stories/page.css';
import {NavBar} from "../stories/nav/NavBar";
import {appWidth} from "../shared/styles";
import {Container} from "../stories/Container";
import {Card} from "../stories/cards/Card";
import {FilterWrapper} from "../stories/filters/FilterWrapper";
import {BreadCrumbs} from "../stories/BreadCrumbs";
import {allCardsData} from "../fixtures/cards";
import {VotingContainer} from "../stories/voting/VotingContainer";
import {Button} from "../stories/Button";
import {PlusIcon} from "@heroicons/react/solid";
import {allDaoData} from "../fixtures/daos";
import {allVotingTypes} from "../fixtures/votingTypes";
import {allMembers} from "../fixtures/members";
import {Footer} from "../stories";
import {FooterAuthorDAO, FooterItemsDAO} from "../fixtures/dao/footerItemsDAO";

export const Page = ({user, onLogin, onLogout, onCreateAccount}) => (
  <div>
    <NavBar {...navBarArgs} />
    <div className={[appWidth].join(" ")}>
      <Container className="flex flex-row my-4 ">
        <BreadCrumbs className="flex-start w-full"/>
        <FilterWrapper filters={filters} className="flex flex-row justify-end w-full" />
      </Container>
      <Container>
        <div className="flex flex-row flex-wrap justify-between space-y-8">
          {allCardsData.map(card => <VotingContainer {...card} />)}
        </div>
      </Container>
    </div>
    <Footer items={FooterItemsDAO} author={FooterAuthorDAO}></Footer>
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

const filters = [
  {
    label: "Select DAO",
    items: allDaoData,
    selected: {
      ...allDaoData[0],
    },
  },
  {
    label: "Initiated by Anyone",
    items: allMembers,
    selected: {
      ...allMembers[0],
    },
  },
  {
    label: "Open and Closed",
    items: allVotingTypes,
    selected: {
      ...allVotingTypes[0],
    },
  },
]

const navBarArgs = {
  user: {
    name: "Raphael",
    address: "klasjdflkasjdf",
  },
  logo: <img
    src="/images/logo.png"
    className="block h-8 w-auto"
    alt="PLAO"
  />,
  navigation: [
    {name: 'Votings', onClick: () => alert("Goto Votings"), current: false},
    {name: 'Members', onClick: () => alert("Goto Members"), current: false},
    {name: 'DAOs', onClick: () => alert("Goto DAOs"), current: true},
  ],
  ctaButton: <Button
    label="Create new Dao"
    shadow
    iconBefore
    icon={<PlusIcon className="h-5 w-5 -ml-2 mr-2"/>}
  />,
  userNavigation: [
    {name: 'Create a Dao', onClick: () => alert("Create a dao")},
    {name: 'Create a voting', onClick: () => alert("Create a voting")},
    {name: 'Sign out', onClick: () => alert("Sign out")},
  ],
  invitations: [
    {
      dao: "LiskCenterUtrecht",
      id: "aksldjflksjdflkjdsf",
    }
  ],
}
