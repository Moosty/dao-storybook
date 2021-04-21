import React from "react";

import { ButtonGroup } from "./ButtonGroup";
import {ThumbDownIcon, ThumbUpIcon} from "@heroicons/react/solid";

export default {
    title: "Buttons/ButtonGroup",
    component: ButtonGroup,
    argTypes: { backgroundColor: 'config' },
}

export const Template = (args) => <ButtonGroup {...args} />

export const All = () => <div>
    <ButtonGroup
        buttons={[
        {icon: <ThumbUpIcon className="h-5 w-5"/>},
        {icon: <ThumbDownIcon className="h-5 w-5"/>},
    ]}/>
</div>