import React from 'react';
import PropTypes from 'prop-types';
import {NavBar} from "../stories/NavBar";
import {appWidth} from "../shared/styles";
import {Container} from "../stories/Container";
import {Typography} from "../stories/Typography";
import {SwitchButton} from "../stories/SwitchButton";
import {SimpleInput} from "../stories/forms/SimpleInput";
import {InputAvatar} from "../stories/forms/InputAvatar";
import {TextFieldInput} from "../stories/forms/TextFieldInput";
import {UploadField} from "../stories/forms/UploadField";
import {ButtonTwo} from "../stories/ButtonTwo";
import {InformationCircleIcon} from "@heroicons/react/outline";
import {Form} from "../stories/forms/Form";
import {FormColumn} from "../stories/forms/FormColumn";
import {FormRow} from "../stories/forms/FormRow";
import {FormElement} from "../stories/forms/FormElement";
import {allDaoData} from "../fixtures/daos";
import {allVotingTypes} from "../fixtures/votingTypes";
import {Card} from "../stories/Card";
import {Button} from "../stories/Button";
import {SubmitIcon} from "../stories/forms/SubmitIcon";

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
        <Form>
          <FormColumn className="mx-4 mr-10">
            <FormRow>
              <FormElement label="Select DAO">
                <InputAvatar label={"Select DAO"} items={allDaoData} selectedItem={allDaoData[4]}/>
              </FormElement>
            </FormRow>
            <FormRow>
              <FormElement label="Type of Voting">
                <InputAvatar label={"Select Voting type"} items={allVotingTypes} selectedItem={allVotingTypes[0]}/>
              </FormElement>
            </FormRow>
            <FormRow>
              <FormElement label="Description (optional)">
                <TextFieldInput placeholder="Any information you'd like to share with your team."/>
              </FormElement>
            </FormRow>
            <FormRow>
              <FormElement label="Share files to help others make decision (Optional)">
                <UploadField/>
              </FormElement>
            </FormRow>
          </FormColumn>

          {/*COLUMN RIGHT*/}
          <FormColumn className="">
            <div className="md:ml-10 ">
              <FormRow className="flex-col md:flex-row space-x-2">
                <FormElement label="Start Date" >
                  <SimpleInput default placeholder="02/02/1988" datePicker label={"datepicker mockup"}/>
                </FormElement>
                <FormElement label="End Date" descriptionBottom="Close in 1 week" >
                  <SimpleInput default placeholder="02/02/1988" datePicker label={"datepicker mockup"}/>
                </FormElement>
              </FormRow>
              <FormRow className="">
                <FormElement
                  label="Hide results before voting"
                  descriptionTop="The result is ONLY visible after the voting is closed."
                  infoIcon tooltipText="The results of the vote will be hided until the voting ends.">
                </FormElement>
                <FormElement>
                  <div className="flex flex-row justify-end">
                    <Typography type="body" className="mr-2">Off</Typography>
                    <SwitchButton/>
                  </div>
                </FormElement>
              </FormRow>
              <FormRow className="space-x-2">
                <FormElement label="Min. required votes" descriptionBottom="8 out of 16" infoIcon tooltipText={<Card />}>
                  <SimpleInput default placeholder="e.g. 6" number />
                </FormElement>
                <FormElement label="Min. required YES votes" descriptionBottom="50% of voters" infoIcon tooltipText={<Card />}>
                  <SimpleInput default placeholder="depends on amount of votes" number />
                </FormElement>
              </FormRow>

              {/*<div className="mt-4 flex flex-row justify-between">*/}
              {/*  <div className="w-2/5">*/}
              {/*    <SimpleInput*/}
              {/*      default*/}
              {/*      placeholder="10%"*/}
              {/*      description*/}
              {/*      descriptionMessage="8 out of 16"*/}
              {/*      infoIcon*/}
              {/*      selector*/}
              {/*      label={"min. req. votes"}*/}
              {/*    /></div>*/}
              {/*  <div className="w-2/5">*/}

              {/*    <SimpleInput*/}
              {/*      default*/}
              {/*      placeholder="10%"*/}
              {/*      description*/}
              {/*      descriptionMessage="50% of the votes"*/}
              {/*      infoIcon*/}
              {/*      selector*/}
              {/*      label={"Min. YES votes"}*/}
              {/*    /></div>*/}
              {/*</div>*/}

              <Typography type="caption">
                For a Yes/No voting to pass, it must fullfil two conditions: 1) The number of votes
                reaches or exceeds the minimum required votes, AND 2) The number of YES votes reaches or
                exceeds the minimum required YES votes.</Typography>
              <div className="pt-5">
                <div className="flex justify-end">
                  <Button label="Cancel" secondary shadow />
                  <Button icon={<SubmitIcon />} iconBefore label="Submit" className="ml-2" shadow/>
              </div>
              </div>
            </div>
          </FormColumn>


        </Form>


      </Container>

    </div>
  </div>

);
CreateVotingYesNo.propTypes =
  {
    user: PropTypes.shape({}),
    onLogin
:
PropTypes.func.isRequired,
  onLogout
:
PropTypes.func.isRequired,
  onCreateAccount
:
PropTypes.func.isRequired,
}
;

CreateVotingYesNo.defaultProps =
  {
    user: null,
  }
;
