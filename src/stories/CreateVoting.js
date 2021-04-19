import React from 'react';
import PropTypes from 'prop-types';

import {Header} from './Header';
import './page.css';
import {NavBar} from "./NavBar";
import {appWidth} from "../shared/styles";
import {Container} from "./Container";
import {Typography} from "./Typography";
import {SwitchButton} from "./SwitchButton";
import {SimpleInput} from "./forms/SimpleInput";
import {InputAvatar} from "./forms/InputAvatar";
import {InputDropdown} from "./forms/InputDropdown";

export const CreateVoting = ({user, onLogin, onLogout, onCreateAccount}) => (
    <div>
        <NavBar/>
        <div className={[appWidth].join(" ")}>
            <Container>
                <div className="ml-4 my-4">
                    <Typography type="h2" Element='h2'>
                        Create a voting
                    </Typography>
                </div>
                <div className="grid grid-cols-2 my-2 justify-center">

                    <div>

                        <div className="my-4 mx-4">

                        <InputAvatar label="Select the DAO"/>
                        </div>
                        <div className="my-4 mx-4">
                            <InputDropdown label="Select the DAO"/>
                        </div>
                        <div className="sm:col-span-3 my-4 mx-4">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Type of Voting
                            </label>
                            <div className="mt-1">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                >
                                    <option>One man One vote</option>
                                    <option>Quadratic Voting</option>
                                    <option>New Member Voting</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    {/*COLUMN RIGHT*/}
                    <div className="my-4 mx-4">

                        <SimpleInput label="End date" errorMessage="Your password must be less than 4 characters."/>
                        <div className="flex flex-row">
                            <div className="flex flex-col">

                            <div className="flex flex-row">
                                <Typography type="bodyStrong">
                                    Hide results before voting
                                </Typography>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <Typography type="body">
                                The result is ONLY visible after the voting is closed.
                            </Typography>
                            </div>

                            <div className="flex flex-row">
                                <Typography type="bodyStrong">
                                    Off
                                </Typography>
                                <SwitchButton/>
                            </div>
                        </div>
                        <div className="pt-5">
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>


                </div>


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
