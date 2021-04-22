import React from "react";
import { Filter } from "./Filter";

export default {
    title: "Filters/Filter",
    component: Filter,
    argTypes: { backgroundColor: 'config'}
}

export const Template = (args) => <Filter {...args} />

export const All = () => {
    return (
        <div className="m-4">
            <Filter/>
        </div>
    )
}