import React from 'react';

import {InputAvatar} from './InputAvatar';
import {Typography} from "../Typography";
import {Meta} from "@storybook/addon-docs/blocks";
import {ExampleForm} from "./ExampleForm";

<Meta title="Forms/InputAvatar" component={InputAvatar}/>


export default {
    title: 'Forms/InputAvatar',
    component: InputAvatar,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <InputAvatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button',
};

export const All = () => <div>
    <div className="ml-10 w-1/2">
        <Typography type="h1" Element='h1'>
            Input Avatar </Typography>

        <div className="mt-4"></div>
        <Typography type="h2" Element='h2'>
            Default fields </Typography>

        <InputAvatar  label={"default + shadow"} shadow/>
        <InputAvatar  label={"default"} />
        <InputAvatar error label={"error"} errorMessage="error message here"/>

    </div>
</div>