import React from "react";
import {Filter} from "./Filter";

export const FilterWrapper = ({filters, className}) => {
  return (
<div className={[className, "flex", "flex-row",].join("")} >
  <Filter filters={filters} />
</div>
  )
}