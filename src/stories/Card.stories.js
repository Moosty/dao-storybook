import React from "react";

import { Card } from "./Card";

export default {
    title: "Elements/Card",
    component: Card,
    argTypes: { backgroundColor: 'config' },
}

export const Template = (args) => <Card {...args}/>

export const All = () => <div>
    <Card />
</div>