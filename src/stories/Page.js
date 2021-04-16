import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './Header';
import './page.css';
import { NavBar } from "./NavBar";
import {appWidth} from "../shared/styles";
import {Container} from "./Container";
import {Button} from "./Button";
import {Card} from "./Card";

export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <div>
    <NavBar />
    <div className ={[appWidth].join(" ")}>
      <Container>
        <div className="flex flex-row flex-wrap space-between">
          <Card
            isOpen
            className="w-card"/>
          <Card
           votingResult="yes"
           footerNotice="voting closed"
          className="w-card"/>
          <Card
            isOpen
            votingResult="no"
            footerNotice="3 days left"
            className="w-card"/>

          <Card
            className="w-card"/>
          <Card
            className="w-card"/>
          <Card
            className="w-card"/>


        </div>


        <Button label="test" />

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
