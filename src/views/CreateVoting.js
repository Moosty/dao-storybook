import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../stories/page.css';
import {NavBar} from "../stories/NavBar";
import {appWidth} from "../shared/styles";
import {Container} from "../stories/Container";
import {Typography} from "../stories/Typography";
import {SwitchButton} from "../stories/SwitchButton";
import {SimpleInput} from "../stories/forms/SimpleInput";
import {InputAvatar} from "../stories/forms/InputAvatar";
import {Form} from "../stories/forms/Form";
import {FormColumn} from "../stories/forms/FormColumn";
import {FormRow} from "../stories/forms/FormRow";
import {FormElement} from "../stories/forms/FormElement";
import {allDaoData} from "../fixtures/daos";
import {allVotingTypes} from "../fixtures/votingTypes";
import {TextFieldInput} from "../stories/forms/TextFieldInput";
import {UploadField} from "../stories/forms/UploadField";
import {Card} from "../stories/Card";
import {Button} from "../stories/Button";
import {SubmitIcon} from "../stories/forms/SubmitIcon";
import {MultipleChoice} from "../stories/forms/MultipleChoice";
import {allCardsData } from "../fixtures/cards";

export const CreateVoting = ({user, onLogin, onLogout, onCreateAccount}) => {
  const [votingType, setVotingType] = useState(allVotingTypes[0]);

  return (
    <div className="bg-surfaceBg">
      <NavBar/>
      <div className={[appWidth].join(" ")}>
        <Container>
          <div className="lg:ml-4 my-4 ">
            <Typography type="h2" Element='h2'>
              Create a voting
            </Typography>
          </div>
          {/*Form*/}
          <Form className="lg:grid lg:grid-cols-2  lg:divide-x-2 lg:divide-formDivider lg:h-screen">
            {/*COLUMN LEFT */}
            <FormColumn className="lg:mx-4 lg:mr-10">
              <FormRow>
                <FormElement  label="Select DAO">
                  <InputAvatar label={"Select DAO"} items={allDaoData} selectedItem={allDaoData[0]}/>
                </FormElement>
              </FormRow>
              <FormRow>
                <FormElement label="Type of Voting" >
                  <InputAvatar onChange={setVotingType} label={"Select Voting type"} items={allVotingTypes} selectedItem={votingType}/>
                </FormElement>
              </FormRow>
              {/*OPTIONAL PART*/}
              {votingType.id === 1 && <div>
                <FormRow>
                  <FormElement label="Description (optional)">
                    <TextFieldInput placeholder="Any information you'd like to share with your team."/>
                  </FormElement>
                </FormRow>
                <FormRow>
                  <FormElement label="Share files to help others make decision (Optional)">
                    <UploadField/>
                  </FormElement>
                </FormRow></div>
              }

              {votingType.id === 2 && <div>
                <FormRow>
                  <FormElement label="Options">
                    <MultipleChoice minItems={2} maxItems={10} defaultOptions={[{id: 1, value:"value1", error: false, placeholder:"optie 1"}, {id: 2, value:"value2", error: false, placeholder:"optie 2"}]} />
                  </FormElement>
                </FormRow>
              </div>
              }
            </FormColumn>

            {/*COLUMN RIGHT*/}
            <FormColumn className="">
              <div className="lg:ml-10 ">
                <FormRow className="flex-col">
                  <FormElement label="Start Date">
                    <SimpleInput default placeholder="02/02/1988" datePicker label={"datepicker mockup"}/>
                  </FormElement>
                  <FormElement label="End Date" descriptionBottom="Close in 1 week">
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
                {/*optional part*/}

                {votingType.id === 1 && <div>
                  <FormRow className="space-x-2">
                    <FormElement label="Min. required votes" descriptionBottom="8 out of 16" infoIcon
                                 tooltipText={<Card/>}>
                      <SimpleInput default placeholder="e.g. 6" number/>
                    </FormElement>
                    <FormElement label="Min. required YES votes" descriptionBottom="50% of voters" infoIcon
                                 tooltipText={<Card/>}>
                      <SimpleInput default placeholder="depends on amount of votes" number/>
                    </FormElement>
                  </FormRow>
                  <Typography type="caption">
                    For a Yes/No voting to pass, it must fullfil two conditions: 1) The number of votes
                    reaches or exceeds the minimum required votes, AND 2) The number of YES votes reaches or
                    exceeds the minimum required YES votes.</Typography>
                </div>}

                {votingType.id === 2 && <div>
                  <FormRow className="space-x-2">
                    <FormElement label="Min. required votes" descriptionBottom="8 out of 16" infoIcon
                                 tooltipText={<Card {...allCardsData[2]}/>}>
                      <SimpleInput default placeholder="e.g. 6" number/>
                    </FormElement>
                    <FormElement label="Min. required YES votes" descriptionBottom="50% of voters" infoIcon
                                 tooltipText={<Card {...allCardsData[3]}/>}>
                      <SimpleInput default placeholder="depends on amount of votes" number/>
                    </FormElement>
                  </FormRow>
                  <Typography type="caption">
                    For a multiple choice voting to be valid, the number of votes MUST reach or exceed the minimum
                    required votes.
                  </Typography>
                </div>}

                <div className="pt-5">
                  <div className="flex justify-end">
                    <Button label="Cancel" secondary shadow/>
                    <Button icon={<SubmitIcon/>} iconBefore label="Submit" className="ml-2" shadow/>
                  </div>
                </div>
              </div>
            </FormColumn>


          </Form>


        </Container>

      </div>
    </div>
  )
};
CreateVoting.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

CreateVoting.defaultProps = {
  user: null,
};
