import React from 'react';
import PropTypes from 'prop-types';
import {allMembers} from "../../fixtures/members";
import '../../stories/page.css';
import {NavBar} from "../../stories/nav/NavBar";
import {appWidth} from "../../shared/styles";
import {Container} from "../../stories/Container";
import {FilterWrapper} from "../../stories/filters/FilterWrapper";
import {BreadCrumbs} from "../../stories/BreadCrumbs";

import {MemberCard} from "../../stories/MemberCard";
import {Button} from "../../stories/Button";
import {PlusIcon} from "@heroicons/react/solid";

export const MembersPage = ({user, onLogin, onLogout, onCreateAccount}) => (
    <div>
      <NavBar {...navBarArgs} />
      <div className={[appWidth].join("")}>
        <Container className="h-10 flex flex-col sm:flex-row my-4 ">
          <BreadCrumbs className="flex-start w-full"/>
          <FilterWrapper className="flex flex-col sm:flex-row justify-end w-full"/>
        </Container>
        <Container className="mb-10">
          <div className="w-full space-y-3 gap-2 lg:grid lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-3">
            {allMembers.map(card => <MemberCard  {...card} />)}
          </div>
        </Container>
      </div>
    </div>
  );

MembersPage.propTypes = {
  member: PropTypes.func.isRequired,
};

MembersPage.defaultProps = {
  user: null,
}

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



