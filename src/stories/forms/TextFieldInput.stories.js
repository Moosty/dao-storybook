import React from "react";

import {TextFieldInput} from "./TextFieldInput";
import {Meta} from "@storybook/addon-docs/blocks";

<Meta title="Forms/TextFieldInput" component={TextFieldInput}/>


export default {
    title: "Forms/TextFieldInput",
    component: TextFieldInput,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <TextFieldInput {...args} />;

export const All = () => <div className="my-4 mx-auto w-11/12 ">
    <TextFieldInput
        title="Description (optional)"
        placeholder="Any information you'd like to share with your team."
        description
    />
    <div className="my-4">
        <TextFieldInput
            title="Description (optional)"

            placeholder="testester"
            description
            error
            errorMessage="error message"
        />
    </div>

    <div className="my-4">
        <TextFieldInput
            title="Description (optional)"

            placeholder="read only"
            description
            descriptionText="Any information you'd like to share with your team."
            readOnly
            disabled
        />
    </div>
    <div className="my-4">
        <TextFieldInput
            title="Description (optional)"

            placeholder="disabled"
            description
            descriptionText="Any information you'd like to share with your team."
            disabled
        />
    </div>
</div>