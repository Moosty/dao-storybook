import React from 'react';
import PropTypes from 'prop-types';
import '../stories/page.css';
import {NavBar} from "../stories/NavBar";
import {appWidth} from "../shared/styles";
import {Container} from "../stories/Container";
import {Card} from "../stories/Card";
import {FilterWrapper} from "../stories/filters/FilterWrapper";
import {BreadCrumbs} from "../stories/BreadCrumbs";
import {allCardsData} from "../fixtures/cards";

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
          {allCardsData.map(card => <Card className="" {...card} />)}
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

