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
import {Paper} from "../stories/Paper";
import {CardHeader} from "../stories/CardHeader";
import {CardContent} from "../stories/CardContent";
import {Typography} from "../stories/Typography";
import {BreadCrumbs} from "../stories/BreadCrumbs";

export const MembersPage = ({user, onLogin, onLogout, onCreateAccount}) => (
  <div>
    <NavBar/>
    <div className={[appWidth].join(" ")}>
      <Container className="flex flex-row my-4 ">
        <BreadCrumbs className="flex-start w-full"/>
        <FilterWrapper className="flex flex-row justify-end w-full" />
      </Container>
      <Container>
        <div className="flex flex-row flex-wrap space-between py-4">
<Paper className="w-1/3 flex-col mr-8">
<CardHeader dao="" user="Raphael Cornelis" title="" address="LSK2dj83e774hfjk93902020220jj" />
  <CardContent>
    <div className="">
      <Typography type="bodyStrong" Element="body">
        Member of: </Typography>
    </div>
  </CardContent>

</Paper>
          <Card >
          </Card>

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





