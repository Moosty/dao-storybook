import React from "react";
import {Chip} from "./Chip";

export default {
  title: "Elements/Chip",
  component: Chip,
}

export const Playground = (args) => <Chip {...args}/>

Playground.args = {
  category: "Category",
}

export const All = () => {
  return(
    <div>
      <Chip category="categorie X"/>
    </div>
  )
}