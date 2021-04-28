import React from "react";
import {ButtonGroup} from "./ButtonGroup";
import {ThumbDownIcon, ThumbUpIcon} from "@heroicons/react/solid";

export default {
  title: "Buttons/ButtonGroup",
  component: ButtonGroup,
}

export const Thumbs = () => <ButtonGroup
  className="m-4"
  buttons={[
    {icon: <ThumbUpIcon className="h-5 w-5"/>},
    {icon: <ThumbDownIcon className="h-5 w-5"/>},
  ]}/>

export const Text = () => <ButtonGroup
  className="m-4"
  buttons={[
    {label: "<"},
    {label: "1"},
    {label: "2"},
    {label: "3"},
    {label: ">"},
  ]}/>
