import React from 'react';

import {FormElements} from './FormElements';
import {Typography} from "../Typography";
import {SimpleInput} from "./SimpleInput";

export default {
    title: 'Example/FormElements',
    component: FormElements,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <FormElements {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button',
};

export const All = () => <div>
    <div className="w-11/12	mx-auto ">
        <SimpleInput
            default
            placeholder="10%"
            description
            descriptionMessage="description"
            selector
            label={"datepicker mockup"}/>
        <SimpleInput
            default
            placeholder="24/04/2021"
            description
            descriptionMessage="The voting will close in 1 week."
            datePicker
            label={"datepicker mockup"}/>
        <div className="w-1/12">
            <SimpleInput
                default
                placeholder="10%"
                description
                descriptionMessage="description"
                selector
                label={"datepicker mockup"}/>
        </div>

        <div className="w-1/5">

            <SimpleInput
                default
                placeholder="24/04/2021"
                description
                descriptionMessage="The voting will close in 1 week."
                datePicker
                label={"datepicker mockup"}/>
        </div>
    </div>
</div>