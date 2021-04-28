import React from "react";
import {Filter} from "./Filter";

export const FilterWrapper = ({className}) => {
  return (
<div className={[className].join("")} >
  <Filter />
</div>
  )
}