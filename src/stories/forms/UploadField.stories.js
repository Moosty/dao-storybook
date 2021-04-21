import React from "react";

import { UploadField } from "./UploadField";
import {Meta} from "@storybook/addon-docs/blocks";

<Meta title="Forms/Fields" component={UploadField}/>


export default {
    title: "Forms/UploadField",
    component: UploadField,
    argTypes: { backgroundColor: 'control'},
}

export const Template = (args) => <UploadField {...args} />


export const All = () => <div>

    <div className="mx-4">
        <UploadField />
    </div>

</div>