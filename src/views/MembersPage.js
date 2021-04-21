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

export const MembersPage = ({user, onLogin, onLogout, onCreateAccount}) => (
  <div>
    <NavBar/>
    <div className={[appWidth].join(" ")}>
      <Container>
        <FilterWrapper />
      </Container>
      <Container>
        <div className="flex flex-row flex-wrap space-between py-4">


          {/*{cards.map(card => <Card {...card} />)}*/}


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





