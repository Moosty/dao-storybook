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

export const AboutUs = () => {

  return (
    <div className="bg-surfaceBg">
      <NavBar/>
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