import React from "react";
import {FilterDao} from "./FilterDao";
import {InputAvatar} from "../forms/InputAvatar";
import {AdjustmentsIcon} from "@heroicons/react/solid";
import {IconButton} from "../IconButton";

export const FilterWrapper = ({className}) => {
  return (
<div className={[className].join(" ")} >

  <InputAvatar />
  <IconButton>
    <AdjustmentsIcon className="mx-auto w-5 h-5"/>
  </IconButton>

</div>
  )
}