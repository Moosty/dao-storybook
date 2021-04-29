import React from "react";
import {NavBar} from "../stories/nav/NavBar";
import {appWidth} from "../shared/styles";
import {Container} from "../stories/Container";
import {Typography} from "../stories/Typography";
import {Form} from "../stories/forms/Form";
import {FormColumn} from "../stories/forms/FormColumn";
import {FormRow} from "../stories/forms/FormRow";
import {FormElement} from "../stories/forms/FormElement";
import {Button} from "../stories/Button";
import {Alert} from "../stories/alerts/Alert";
import {PlusIcon} from "@heroicons/react/solid";

export const AboutTheProject = () => {

  return (
    <div className="bg-surfaceBg">
      <NavBar {...navBarArgs} />
      <Alert success topRight label="This has been a success!"/>
      <div className={[appWidth].join(" ")}>
        <Container>
          <div className="lg:ml-4 my-4 ">
            <Typography type="h2" Element='h2'>
              About the project
            </Typography>
          </div>
          {/*Form*/}
          <Form className="lg:grid lg:grid-cols-2  lg:divide-x-2 lg:divide-formDivider lg:h-screen">
            {/*COLUMN LEFT */}
            <FormColumn className="lg:mx-4 lg:mr-10">


              <FormRow>
                <FormElement label="Roadmap">
                  <Typography type="body">
                    This is a proof of concept, built with the Lisk SDK. It will be further developed into a working
                    blockchain application over the course of the next months. Our aim is to provide THE DAO platform of
                    the Lisk Ecosystem.
                  </Typography></FormElement>
              </FormRow>

              <FormRow>
                <FormElement label="How can I help?">
                  <Typography type="body">
                    You can help us by joining our efforts through research, marketing, developer capacity, or through
                    donations.
                  </Typography></FormElement>
              </FormRow>

            </FormColumn>

            {/*COLUMN RIGHT*/}
            <FormColumn className="">
              <div className="lg:ml-10 ">

                <FormRow>
                  <FormElement label="What is Lisk?">
                    <Typography type="body">
                      Lisk is a blockchain application platform. It provides open source software to build blockchain
                      applications. With the Lisk SDK it is possible to create a working blockchain network with 3 lines
                      of code in Javascript.<Button className="" tertiary size="small" label="read more about Lisk."/>
                    </Typography></FormElement>
                </FormRow>


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
  logo: <img
    src="/images/logo.png"
    className="block h-8 w-auto"
    alt="PLAO"
  />,
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