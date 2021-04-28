import React from "react";
import {NavBar} from "../stories/nav/NavBar";
import {appWidth} from "../shared/styles";
import {Container} from "../stories/Container";
import {Typography} from "../stories/Typography";
import {Form} from "../stories/forms/Form";
import {FormColumn} from "../stories/forms/FormColumn";
import {FormRow} from "../stories/forms/FormRow";
import {FormElement} from "../stories/forms/FormElement";
import {SimpleInput} from "../stories/forms/SimpleInput";
import {TextFieldInput} from "../stories/forms/TextFieldInput";
import {InputAvatar} from "../stories/forms/InputAvatar";
import {allMembers} from "../fixtures/members";
import {Button} from "../stories/Button";
import {PlusIcon} from "@heroicons/react/solid";

export const AboutUs = () => {

  return (
    <div className="bg-surfaceBg">
      <NavBar {...navBarArgs} />
      <div className={[appWidth].join(" ")}>
        <Container>
          <div className="lg:ml-4 my-4 ">
            <Typography type="h2" Element='h2'>
              About Us
            </Typography>
          </div>
          {/*Form*/}
          <Form className="lg:grid lg:grid-cols-2  lg:divide-x-2 lg:divide-formDivider lg:h-screen">
            {/*COLUMN LEFT */}
            <FormColumn className="lg:mx-4 lg:mr-10">
              <FormRow>
                <FormElement label="The Team behind {name of project}">
                  <Typography type="body">
                    Every Decentralized Organization has a name and a purpose. Try to give a short description of the
                    purpose of your DAO
                  </Typography></FormElement>
              </FormRow>


            </FormColumn>

            {/*COLUMN RIGHT*/}
            <FormColumn className="">
              <div className="lg:ml-10 ">
                <FormRow>
                  <FormElement label="Xinrong Ding - UX Designer">
                    <Typography type="body">
                      More information about Xinrong
                    </Typography></FormElement>
                </FormRow>
                <FormRow>
                  <FormElement label="Vitallity">
                    <Typography type="body">
                      More information about Vitallity
                    </Typography></FormElement>
                </FormRow>

                <FormRow>
                  <FormElement label="The Moosty Team">
                    <Typography type="body">
                      More information about Moosty
                    </Typography></FormElement>
                </FormRow>
                <Button label="Get in touch" />


              </div>
            </FormColumn>
          </Form>
        </Container>

      </div>
    </div>)
}

const navBarArgs = {
  user: {
    name: "Raphael",
    address: "klasjdflkasjdf",
  },
  navigation: [
    {name: 'Votings', onClick: () => alert("Goto Votings"), current: false},
    {name: 'Members', onClick: () => alert("Goto Members"), current: false},
    {name: 'DAOs', onClick: () => alert("Goto DAOs"), current: true},
  ],
  ctaButton: <Button
    label="Create new Dao"
    shadow
    iconBefore
    icon={<PlusIcon className="h-5 w-5 -ml-2 mr-2"/>}
  />,
  userNavigation: [
    {name: 'Create a Dao', onClick: () => alert("Create a dao")},
    {name: 'Create a voting', onClick: () => alert("Create a voting")},
    {name: 'Sign out', onClick: () => alert("Sign out")},
  ],
  invitations: [
    {
      dao: "LiskCenterUtrecht",
      id: "aksldjflksjdflkjdsf",
    }
  ],
}