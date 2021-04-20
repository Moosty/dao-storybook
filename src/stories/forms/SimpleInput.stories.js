import React from 'react';

import {SimpleInput} from './SimpleInput';

export default {
    title: 'Example/SimpleInput',
    component: SimpleInput,
};

const Template = (args) => <SimpleInput {...args} />;


export const All = () => <div className="w-1/2 my-4 ">
    <SimpleInput
        label="End date"
        errorMessage="errorMessage x"
        name="testnaam"
        defaultValue=""
        placeholder="placeholder test"
        id="email"
    />

    <SimpleInput
        label="test"
        errorMessage="Your password must be less than 4 characters."
        name="testnaam"
        defaultValue="default value"
        placeholder="placeholder test"
        invalidTrueFalse="false"
        id="name"

    />
</div>

export const Test = Template.bind({});
Test.args = {
    user: {},
};