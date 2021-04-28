import React from 'react';
import PropTypes from 'prop-types';
import {allMembers} from "../fixtures/members";
import '../stories/page.css';
import {NavBar} from "../stories/nav/NavBar";
import {appWidth} from "../shared/styles";
import {Container} from "../stories/Container";
import {FilterWrapper} from "../stories/filters/FilterWrapper";
import {BreadCrumbs} from "../stories/BreadCrumbs";

import {MemberCard} from "../stories/MemberCard";

export const MembersPage = ({user, onLogin, onLogout, onCreateAccount}) => (
    <div>
      <NavBar/>
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





