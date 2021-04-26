import React from 'react';
import PropTypes from 'prop-types';

import {allMembers} from "../fixtures/members";
import '../stories/page.css';
import {NavBar} from "../stories/NavBar";
import {appWidth} from "../shared/styles";
import {Container} from "../stories/Container";
import {Button} from "../stories/Button";
import {Card} from "../stories/Card";

import {FilterWrapper} from "../stories/filters/FilterWrapper";
import {Paper} from "../stories/Paper";
import {CardHeader} from "../stories/CardHeader";
import {CardContent} from "../stories/CardContent";
import {Typography} from "../stories/Typography";
import {BreadCrumbs} from "../stories/BreadCrumbs";

import {MemberCard} from "../stories/MemberCard";

export const MembersPage = ({user, onLogin, onLogout, onCreateAccount}) => (
    <div>
      <NavBar/>
      <div className={[appWidth].join(" ")}>
        <Container className="flex flex-row my-4 ">
          <BreadCrumbs className="flex-start w-full"/>
          <FilterWrapper className="flex flex-row justify-end w-full"/>
        </Container>
        <Container>
          <div className="grid grid-flow-col  flex-wrap  grid-cols-4 grid-rows-3">



            {allMembers.map(card => <MemberCard  {...card} />)}


          </div>


        </Container>

      </div>
    </div>

  )
;
MembersPage.propTypes = {

  member: PropTypes.func.isRequired,
};

MembersPage.defaultProps = {
  user: null,
}





