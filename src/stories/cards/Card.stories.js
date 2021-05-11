import React from "react";
import {Card} from "./Card";

export default {
  title: "Cards/Card",
  component: Card,
}

export const Playground = (args) => <div className={"m-5"}><Card {...args}/></div>

Playground.args = {
};
