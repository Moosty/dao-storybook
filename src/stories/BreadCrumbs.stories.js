import React from "react";
import {BreadCrumbs} from "./BreadCrumbs";

export default {
  title: "Elements/BreadCrumbs",
  component: BreadCrumbs,
}

export const Example = () => <BreadCrumbs
  className="m-4"
  crumbs={[
    {
      name: "Home",
      onClick: () => console.log("goto home"),
    },
    {
      name: "DAOs",
      onClick: () => console.log("goto daos"),
    },
    {
      name: "LCU Dao",
      onClick: () => console.log("goto lcu dao"),
      current: true,
    },
  ]}
/>

export const PlayGround = (args) => <BreadCrumbs
  {...args}
/>
PlayGround.args = {
  className: "m-4"
}
