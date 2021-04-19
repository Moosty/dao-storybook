import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './Header';
import './page.css';
import { NavBar } from "../stories/NavBar";
import {appWidth} from "../shared/styles";
import {Container} from "../stories/Container";
import {Button} from "../stories/Button";
import {Card} from "../stories/Card";

export const CreateVoting = ({ user, onLogin, onLogout, onCreateAccount }) => (
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
                        buttonGroup
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
                        </svg>}
                        className="w-card"/>
                    <Card
                        className="w-card"/>


                </div>


                <Button label="test" />

            </Container>

        </div>
    </div>

);
CreateVoting.propTypes = {
    user: PropTypes.shape({}),
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onCreateAccount: PropTypes.func.isRequired,
};

CreateVoting.defaultProps = {
    user: null,
};
