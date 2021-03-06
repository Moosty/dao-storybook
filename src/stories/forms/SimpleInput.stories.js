import React from 'react';

import {SimpleInput} from './SimpleInput';
import {Typography} from "../Typography";
import {Meta} from "@storybook/addon-docs/blocks";
import {FormElement} from "./FormElement";
import {Passphrase} from "./Passphrase";

<Meta title="Forms/SimpleInput" component={SimpleInput}/>

export default {
  title: 'Forms/SimpleInput (standaard)',
  component: SimpleInput,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
};

const Playground = (args) => <SimpleInput {...args} />;

export const Primary = Playground.bind({});
Primary.args = {
  label: 'Button',
};

export const All = () => <div>
  <div className="ml-10 w-1/2">
    <Typography type="h1" Element='h1'>
      Input Fields </Typography>
    <div className="mt-4"></div>
    <Typography type="h2" Element='h2'>
      Default fields </Typography>
    <FormElement
      label="Description (optional)" descriptionTop="description Top" descriptionBottom="descriptionBottom"
      infoIcon
      tooltipText="Select on which cloud platform you want to deploy your app. You can always switch to a different platform at a later time."
    >
      <SimpleInput default label={"default"}/></FormElement>

    <SimpleInput default label={"default + placeholder"} placeholder="your name here"/>
    <SimpleInput default label={"default + placeholder + icon"} infoIcon placeholder="your name here"/>

    <Typography type="h2" Element='h1'>
      Filled field </Typography>

    <SimpleInput filled label={"filled"}/>
    <SimpleInput filled label={"filled + placeholder"} placeholder="your name here"/>

    <SimpleInput readOnly label={"read only"} placeholder="your name here"/>
    <SimpleInput disabled label={"disabled"} placeholder="your name here"/>

    <Typography type="h1" Element='h1'>
      Static images of dynamic states - Hover, focused, error </Typography>
    <SimpleInput hover label={"hover"} infoIcon/>
    <SimpleInput focused label={"focused"} infoIcon/>
    <SimpleInput error label={"error"} infoIcon errorMessage="Check this field again"/>
  </div>
  <div className="w-11/12	mx-auto ">
    <Typography type="h1" Element='h1'>
      Sizes </Typography>

    <div className="mt-4"></div>
    <Typography type="h3" Element='h3'>
      Default fields </Typography>
    <SimpleInput default label={"default"}/>
    <SimpleInput default label={"default + placeholder"} placeholder="your name here"/>
    <SimpleInput default label={"default + placeholder + icon"} infoIcon placeholder="your name here"/>
    <SimpleInput default label={"default + shadow"} shadow/>


  </div>

</div>

export const ShadowState = () => <div className="space-y-3 ">
  <Typography type="h3" Element='h3'>Shadow field </Typography>
  <SimpleInput default label={"default"} shadow/>

  <FormElement
    label="Description (optional)" descriptionTop="description Top" descriptionBottom="descriptionBottom"
    infoIcon
    tooltipText="Select on which cloud platform you want to deploy your app. You can always switch to a different platform at a later time."
  >
    <SimpleInput default label={"default"} shadow/>
  </FormElement>
</div>

export const FilledStates = () => <div className="space-y-3 ">
  <Typography type="h3" Element='h3'>Filled field </Typography>
  <SimpleInput filled label={"filled"}/>
  <SimpleInput filled label={"filled + placeholder"} placeholder="your name here"/>
  <SimpleInput readOnly label={"read only"} placeholder="your name here"/>
  <SimpleInput disabled label={"disabled"} placeholder="your name here"/>
</div>
export const States = () => <div className="space-y-3 ">
  <Typography type="h4" Element='h3'>
    Static images of dynamic states - Hover, focused, error </Typography>
  <SimpleInput hover label={"hover"} infoIcon/>
  <SimpleInput focused label={"focused"} infoIcon/>
  <SimpleInput error label={"error"} infoIcon errorMessage="Check this field again"/>
</div>

export const Specials = () => <div className="space-y-3 w-1/5 justify-center">
  <Typography type="h3" Element='h3'>Specials field </Typography>
  <SimpleInput default placeholder="10%" description descriptionMessage="description" selector number
               label={"datepicker mockup"}/>
  <SimpleInput default placeholder="02/02/1988" description descriptionMessage="description" datePicker
               label={"datepicker mockup"}/>
</div>

export const PassphraseExample = () => <Passphrase defaultPassphrase={[1, 2, 3, 4, 5,6, 7, 8, 9,10, 11,12]} />