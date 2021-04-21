import React from "react";
import {ButtonTwo} from "./ButtonTwo";

export default {
    title: "Elements/ButtonTwo",
    component: ButtonTwo,
    argTypes: { backgroundColor: 'control'}
}

export const Template = (args) => <ButtonTwo {...args}/>

export const All = () => <div>
    <ButtonTwo />
</div>