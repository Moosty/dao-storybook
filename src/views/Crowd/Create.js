import React from "react";
import {NavBar} from "../../stories/nav/NavBar";
import {Hero} from "../../stories/Hero";
import {appWidth} from "../../shared/styles";
import {Container} from "../../stories/Container";
import PropTypes from "prop-types";
import {Button} from "../../stories/Button";
import {PlusIcon} from "@heroicons/react/solid";
import {
  Footer,
  Form,
  FormColumn,
  FormElement,
  FormRow,
  InputAvatar, SimpleInput, SubmitIcon,
  TextFieldInput,
  Typography,
  UploadField
} from "../../stories";
import {allDaoData} from "../../fixtures/daos";

export const Create = () => {
  return (<>
      <NavBar {...navBarArgs} />
      <Hero
        title="Create your crowdfund campaign"
        subTitle="Regulate your crowdfund journey with Lisk Crowd!"/>
      <Container className={[appWidth, "space-x-4", "flex", "flex-row"].join(" ")}>
        <div className="lg:ml-4 my-4 ">
          <Typography type="h2" Element='h2'>
            Create a voting
          </Typography>
        </div>
      </Container>
      <Container className={[appWidth, "space-x-4", "flex", "flex-row"].join(" ")}>
        {/*Form*/}
        <Form className="lg:grid lg:grid-cols-2  lg:divide-x-2 lg:divide-formDivider mb-20">
          {/*COLUMN LEFT */}
          <FormColumn className="lg:mx-4 lg:mr-10">
            <FormRow>
            </FormRow>
            {/*OPTIONAL PART*/}
            <div>
              <Typography type="h4" Element='h4'>
                Project information
              </Typography>
              <FormRow className="mt-4">
                <FormElement label="Title">
                  <SimpleInput placeholder="Decentralised DAO Platform"/>
                </FormElement>
              </FormRow>
              <FormRow>
                <FormElement label="Description">
                  <TextFieldInput placeholder="Any information you'd like to share with your team."/>
                </FormElement>
              </FormRow>
              <FormRow>
                <FormElement label="Select category">
                  <InputAvatar label={"Select DAO"} items={allDaoData} selectedItem={allDaoData[0]}/>
                </FormElement>
              </FormRow>
              <FormRow>
                <FormElement label="Project url">
                  <SimpleInput placeholder="https://moosty.com/"/>
                </FormElement>
              </FormRow>
              <Typography type="h4" Element='h4' className="mt-10 mb-2">
                Finance & Accountability
              </Typography>
              <Typography type="bodyStrong" Element='span' className="">
                Specify the amount the would like to raise, how many months you need to build it and how many times a
                donator can vote.
              </Typography>
              <FormRow className="space-x-2 mt-4">
                <FormElement label="Target amount" infoIcon
                             tooltipText="good practice is a breakdown of this number including more details on the way you are planning to spend it.">
                  <SimpleInput default placeholder="e.g. 5.000 LSK" number/>
                </FormElement>
              </FormRow>
              <FormRow className="space-x-2">
                <FormElement label="Duration of the project" infoIcon
                             descriptionBottom="Donators can vote every month."
                             tooltipText="The number stands for the amount of months.">
                  <SimpleInput default placeholder="12 (one year)" number/>
                </FormElement>
              </FormRow>
            </div>

          </FormColumn>

          {/*COLUMN RIGHT*/}
          <FormColumn className="">

            <div className="lg:ml-10 ">
              <Typography type="h4" Element='h4' className="mt-10 mb-2">
                Date & time
              </Typography>
              <FormRow className="flex-col">
                <FormElement label="Start Date">
                  <SimpleInput default placeholder="01-05-2021" datePicker label={"datepicker"}/>
                </FormElement>
              </FormRow>
              <FormRow>
                <FormElement label="Add a picture to your project">
                  <UploadField/>
                </FormElement>
              </FormRow>

            </div>
            <div className="content-end pt-5">
              <div className="flex justify-end">
                <Button shadow label="Cancel" secondary shadow/>
                <Button shadow icon={<SubmitIcon/>} iconBefore label="Submit" className="ml-2" shadow/>
              </div>
            </div>
          </FormColumn>
        </Form>
      </Container>
      <Footer items={items} author={author}></Footer>
    </>
  )
}


Create.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Create.defaultProps = {
  user: null,
};

const navBarArgs = {
  user: {
    name: "Raphael",
    address: "klasjdflkasjdf",
  },
  navigation: [
    {name: 'Explore', onClick: () => alert("Go to Crowdfunds"), current: true},
    {name: 'Members', onClick: () => alert("Goto Members"), current: false},
    {name: 'DAOs', onClick: () => alert("Goto DAOs"), current: false},
  ],
  ctaButton: <Button
    label="Create new Crowdfund"

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

const items = {
  liskcrowd: [
    {label: "Read the blog", to: "https://lisk.io/blog/apps/building-lisk-crowd-project"},
    {label: "About the project team", to: "https://moosty.com"},
    {label: "Github", to: "https://github.com/Moosty/lisk-crowdfund"},
  ],
  lisk: [
    {label: "What is Lisk?", to: "https://lisk.io/what-is-lisk"},
    {label: "What is blockchain?", to: "https://lisk.io/what-is-blockchain"},
    {label: "Lisk SDK documentation", to: "https://lisk.io/documentation/lisk-sdk/index.html"},
    {label: "Join Lisk chat", to: "https://lisk.chat"},
  ],
  moosty: [
    {label: "About the team", to: "https://moosty.com/"},
    {label: "See projects", to: "https://moosty.com/lisk-ecosystem/"},
    {label: "Get in touch", to: "https://moosty.com/contact/"},
  ]
}


const author = {
  name: "MOOSTY",
  url: "https://moosty.com"
}