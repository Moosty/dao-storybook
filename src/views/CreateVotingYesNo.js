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
import {CheckIcon} from "@heroicons/react/solid";
import {TextFieldInput} from "../stories/forms/TextFieldInput";
import {UploadField} from "../stories/forms/UploadField";
import {ButtonTwo} from "../stories/ButtonTwo";
import {InformationCircleIcon} from "@heroicons/react/outline";

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
                <div
                    className="md:grid md:grid-cols-2 my-2 justify-center md:divide-x-2 md:divide-formDivider h-screen">
                    <div className="mx-4 pb-4">
                        <div className="my-4 ">

                            <InputAvatar label="Select the DAO"/>
                        </div>

                        {/*Description area*/}
                        <TextFieldInput
                            placeholder="Any information you'd like to share with your team."
                            description
                        />
                        <UploadField/>


                    </div>

                    {/*COLUMN RIGHT*/}
                    <div className="my-4 pl-4">

                        <div className="flex flex-row justify-between">
                            <div className="w-2/5">
                                <SimpleInput
                                    default
                                    placeholder="24/04/2021"
                                    description
                                    descriptionMessage="The voting will close in 1 week."
                                    datePicker
                                    label={"Start date"}/></div>
                            <div className="w-2/5">

                                <SimpleInput
                                    default
                                    placeholder="24/04/2021"
                                    description
                                    descriptionMessage="The voting will close in 1 week."
                                    datePicker
                                    label={"End date"}/></div>
                        </div>
                        {/*TEXT ELEMENT*/}
                        <div className="flex flex-row mt-4">
                            <div className="flex flex-col w-3/4">

                                <div className="flex flex-row items-center mb-1">
                                    <Typography type="bodyStrong" Element="h3">
                                        Hide results before voting
                                    </Typography>
                                    <InformationCircleIcon
                                        className="text-textPlaceHolder hover:text-textBody  ml-3 h-4 w-4"/>

                                </div>
                                <Typography type="caption" Element="span">
                                    The result is ONLY visible after the voting is closed.
                                </Typography>
                            </div>

                            <div className="flex flex-row items-center justify-end w-1/4">
                                <Typography type="body" Element="span" className="mr-2">
                                    Off
                                </Typography>
                                <SwitchButton/>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-row justify-between">
                            <div className="w-2/5">
                                <SimpleInput
                                    default
                                    placeholder="10%"
                                    description
                                    descriptionMessage="8 out of 16"
                                    infoIcon
                                    selector
                                    label={"min. req. votes"}
                                /></div>
                            <div className="w-2/5">

                                <SimpleInput
                                    default
                                    placeholder="10%"
                                    description
                                    descriptionMessage="50% of the votes"
                                    infoIcon
                                    selector
                                    label={"Min. YES votes"}
                                /></div>
                        </div>

                        <Typography type="caption">For a Yes/No voting to pass, it must fullfil two conditions: 1) The number of votes
                            reaches or exceeds the minimum required votes, AND 2) The number of YES votes reaches or
                            exceeds the minimum required YES votes.</Typography>
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
                                <ButtonTwo/>

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
