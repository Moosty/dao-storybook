import React from "react";
import {FilterDao} from "./FilterDao";
import {InputAvatar} from "./forms/InputAvatar";
import {AdjustmentsIcon} from "@heroicons/react/solid";
import {IconButton} from "./IconButton";

export const FilterWrapper = ({}) => {
  return (
<div className="flex flex-row my-4 justify-end w-full">

  <InputAvatar />
  <IconButton>
    <AdjustmentsIcon className="mx-auto w-5 h-5"/>

  </IconButton>

</div>
  )
}