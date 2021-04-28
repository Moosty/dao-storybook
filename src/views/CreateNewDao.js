import React from 'react';
import PropTypes from 'prop-types';
import '../stories/page.css';
import {NavBar} from "../stories/NavBar";
import {appWidth} from "../shared/styles";
import {Container} from "../stories/Container";
import {Typography} from "../stories/Typography";
import {SimpleInput} from "../stories/forms/SimpleInput";
import {InputAvatar} from "../stories/forms/InputAvatar";
import {Form} from "../stories/forms/Form";
import {FormColumn} from "../stories/forms/FormColumn";
import {FormRow} from "../stories/forms/FormRow";
import {FormElement} from "../stories/forms/FormElement";
import {TextFieldInput} from "../stories/forms/TextFieldInput";
import {Button} from "../stories/Button";
import {SubmitIcon} from "../stories/forms/SubmitIcon";
import {allMembers} from "../fixtures/members";

export const CreateNewDao = ({user, onLogin, onLogout, onCreateAccount}) => {

  return (
    <div className="bg-surfaceBg">
      <NavBar/>
      <div className={[appWidth].join(" ")}>
        <Container>
          <div className="lg:ml-4 my-4 ">
            <Typography type="h2" Element='h2'>
              Create new DAO
            </Typography>
          </div>
          {/*Form*/}
          <Form className="lg:grid lg:grid-cols-2  lg:divide-x-2 lg:divide-formDivider lg:h-screen">
            {/*COLUMN LEFT */}
            <FormColumn className="lg:mx-4 lg:mr-10">
              <FormRow>
                <FormElement label="Creating your DAO">
                  <Typography type="body">
                    Every Decentralized Organization has a name and a purpose. Try to give a short description of the
                    purpose of your DAO
                  </Typography></FormElement>
              </FormRow>
              <FormRow>
                <FormElement label="DAO Name">
                  <SimpleInput placeholder="The LCU Community"/>
                </FormElement>
              </FormRow>
              <FormRow>
                <FormElement label="A short description of the purpose">
                  <TextFieldInput
                    placeholder="A blockchain developers community that shares knowledge to facilitate blockchain innovation."/>
                </FormElement>
              </FormRow>
            </FormColumn>

            {/*COLUMN RIGHT*/}
            <FormColumn className="">
              <div className="lg:ml-10 ">
                <FormRow>
                  <FormElement label="Creating your DAO">
                    <Typography type="body">
                      The DAO starts with a group of founding members. These members need to
                      be in the DAO from the start.
                      You are in the new DAO by default.
                    </Typography></FormElement>
                </FormRow>
                <FormRow className="">
                  <FormElement label="Select all founding members">
                    <InputAvatar className="mb-1" label={"Select Member"} items={allMembers}
                                 selectedItem={allMembers[0]}/>
                    <InputAvatar className="mb-1" label={"Select Member"} items={allMembers}
                                 selectedItem={allMembers[0]}/>
                    <InputAvatar className="mb-1" label={"Select Member"} items={allMembers}
                                 selectedItem={allMembers[0]}/>
                    <InputAvatar className="mb-1" label={"Select Member"} items={allMembers}
                                 selectedItem={allMembers[0]}/>
                    <InputAvatar className="mb-1" label={"Select Member"} items={allMembers}
                                 selectedItem={allMembers[0]}/>
                  </FormElement>
                </FormRow>
                {/*<FormRow>*/}
                {/*  <FormElement label="Options">*/}
                {/*    <MultipleChoice minItems={2} maxItems={10} defaultOptions={[{*/}
                {/*      id: 1,*/}
                {/*      value: "value1",*/}
                {/*      error: false,*/}
                {/*      placeholder: "optie 1"*/}
                {/*    }, {id: 2, value: "value2", error: false, placeholder: "optie 2"}]}/>*/}
                {/*  </FormElement>*/}
                {/*</FormRow>*/}
                <div className="pt-5">
                  <div className="flex justify-end">
                    <Button shadow label="Cancel" secondary shadow/>
                    <Button shadow icon={<SubmitIcon/>} iconBefore label="Submit" className="ml-2" shadow/>
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

CreateNewDao.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

CreateNewDao.defaultProps = {
  user: null,
};
