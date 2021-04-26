import React from "react";
import {FormElement} from "./FormElement";
import {TextFieldInput} from "./TextFieldInput";
import {SimpleInput} from "./SimpleInput";
import {InputAvatar} from "./InputAvatar";
import {allDaoData} from "../../fixtures/daos";
import {MultipleChoice} from "./MultipleChoice";

export default {
  title: "Forms/FormElement",
  component: FormElement,
  argTypes: {backgroundColor: 'color'}
}

export const Template = (args) => <FormElement {...args} />

export const All = () => <div className="m-4">

  {/*TEXTFIELD OPTIONS*/}
  <FormElement
    className="m-10 mb-20"
    label="Select DAO"
    infoIcon
    tooltipText="Select on which cloud platform you want to deploy your app. You can always switch to a different platform at a later time."
  >
    <InputAvatar label={"Select DAO"} items={allDaoData} selectedItem={allDaoData[4]}/>
  </FormElement>
  <FormElement
    label="Description (optional)"
    infoIcon
    tooltipText="Select on which cloud platform you want to deploy your app. You can always switch to a different platform at a later time."
  >
    <TextFieldInput placeholder="Placeholder"/>
  </FormElement>
  <FormElement
    label="Label"
    descriptionBottom="description bottom">
    <TextFieldInput placeholder="Placeholder"/>
  </FormElement>
  <FormElement
    label="Label"
    error
    errorMessage="testerror message"
  >
    <TextFieldInput placeholder="Placeholder" error/>
  </FormElement>

  {/*SIMPLE INPUT OPTIONS*/}
  <FormElement
    label="Description (optional)"
    infoIcon
    tooltipText="Select on which cloud platform you want to deploy your app. You can always switch to a different platform at a later time."
  >
    <SimpleInput default label={"default + placeholder"} placeholder="your name here"/>
  </FormElement>
  <FormElement
    label="Label"
    descriptionBottom="description bottom">
    <SimpleInput default placeholder="02/02/1988" description descriptionMessage="description" datePicker
                 label={"datepicker mockup"}/>
  </FormElement>
  <FormElement
    label="Label"
    error
    errorMessage="testerror message"
  >
    <SimpleInput default placeholder="10%" description descriptionMessage="description" selector number
                 label={"datepicker mockup"}/>
  </FormElement>
  <FormElement
    label="Label"
    infoIcon
    tooltipText="The result is ONLY visible after the voting is closed."
  > <SimpleInput default label={"default + placeholder + icon"} infoIcon placeholder="your name here"/>
  </FormElement>
  <FormElement
    label="Label"
    descriptionTop="The result is ONLY visible after the voting is closed."
    infoIcon
    tooltipText="The result is ONLY visible after the voting is closed."
  > <SimpleInput default label={"default"} shadow/>
  </FormElement>
</div>

export const Error = () => <div className="m-4">
  <FormElement
    label="Label"
    infoIcon
    errorMessage="test"
    tooltipText="The result is ONLY visible after the voting is closed."
  > <SimpleInput default infoIcon placeholder="your name here"/>
  </FormElement>
</div>


export const MultipleChoiceStory = () => <div className="m-4">
  <FormElement
    label="Options"
    infoIcon
    tooltipText="The result is ONLY visible after the voting is closed."
  >
    <MultipleChoice
      maxItems={10}
      onChange={(options) => console.log("options: ", options)}
      minItems={2}
      newOptionPlaceholder={"Answer option"}
      defaultOptions={[
        {id: 1, value: "Test", placeholder: "Answer option"},
        {id: 2, value: "Test123", placeholder: "Answer option"}
      ]}/>
  </FormElement>
</div>