import React from 'react';
import PropTypes from 'prop-types';

import {Header} from '../stories/Header';
import '../stories/page.css';
import {NavBar} from "../stories/NavBar";
import {appWidth} from "../shared/styles";
import {Container} from "../stories/Container";
import {Typography} from "../stories/Typography";
import {SwitchButton} from "../stories/SwitchButton";
import {SimpleInput} from "../stories/forms/SimpleInput";
import {InputAvatar} from "../stories/forms/InputAvatar";
import {InputDropdown} from "../stories/forms/InputDropdown";
import {CheckIcon} from "@heroicons/react/solid";
import {TextFieldInput} from "../stories/forms/TextFieldInput";
import {UploadField} from "../stories/forms/UploadField";
import {ButtonTwo} from "../stories/ButtonTwo";

export const CreateVotingYesNo = ({user, onLogin, onLogout, onCreateAccount}) => (
    <div className="bg-surfaceBg">
        <NavBar/>
        <div className={[appWidth].join(" ")}>
            <Container>
                <div className="ml-4 my-4">
                    <Typography type="h2" Element='h2'>
                        Create a voting
                    </Typography>

                </div>
                <div className="md:grid md:grid-cols-2 my-2 justify-center md:divide-x-2 md:divide-formDivider">
                    <div className="mx-4">
                        <div className="my-4 ">

                            <InputAvatar label="Select the DAO"/>
                        </div>
                        <div className="my-4 ">
                            <InputDropdown label="Select the DAO"/>
                        </div>
                        <div className="sm:col-span-3 my-4 ">
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

                        {/*Description area*/}
                        <TextFieldInput
                            placeholder="Any information you'd like to share with your team."
                            description
                        />
                        <div className=" ">
                            <label htmlFor="about" className="block  ">
                                Description (optional)
                            </label>
                            <div className="mt-1">
                            <textarea
                                id="about"
                                name="about"
                                placeholder="Any information you'd like to share with your team."
                                rows={3}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                defaultValue={''}
                            />
                            </div>
                            <p className="mt-2 text-sm text-textPlaceHolder">Any information you'd like to share with your team.</p>
                        </div>
                        <UploadField />


                    </div>

                    {/*COLUMN RIGHT*/}
                    <div className="my-4 pl-4">

                        <SimpleInput label="End date" errorMessage="Your password must be less than 4 characters."/>
                        <div className="flex flex-row">
                            <div className="flex flex-col w-3/4">

                                <div className="flex flex-row items-center ">
                                    <Typography type="bodyStrong" Element="body">
                                        Hide results before voting
                                    </Typography>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2" fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </div>
                                <Typography type="body" Element="body">
                                    The result is ONLY visible after the voting is closed.
                                </Typography>
                            </div>

                            <div className="flex flex-row items-center justify-end w-1/4">
                                <Typography type="body" Element="body" className="mr-2">
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
                                <div>


                                </div>
                                <ButtonTwo />

                            </div>
                        </div>
                    </div>


                </div>


            </Container>

        </div>
    </div>

);
CreateVotingYesNo.propTypes = {
    user: PropTypes.shape({}),
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onCreateAccount: PropTypes.func.isRequired,
};

CreateVotingYesNo.defaultProps = {
    user: null,
};
