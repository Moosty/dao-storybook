import React from "react";
import {NavBar} from "../../stories/nav/NavBar";
import {appWidth} from "../../shared/styles";
import {Container} from "../../stories/Container";
import PropTypes from "prop-types";
import {Button} from "../../stories/Button";
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
import {navBarArgs} from "../../fixtures/crowdfund/navbar";
import {FooterAuthor, FooterItems} from "../../fixtures/crowdfund/footerItems";

export const Create = () => {
  return (<>
      <NavBar {...navBarArgs} />

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
      <Footer items={FooterItems} author={FooterAuthor}></Footer>
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

