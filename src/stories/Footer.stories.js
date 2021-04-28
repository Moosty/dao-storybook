import React from "react";
import {Footer} from "./Footer";

export default {
  title: "Elements/Footer",
  component: Footer,
  argTypes: {backgroundColor:'color'}
}

export const Template = (args) => <Footer {...args} />

export const all = () => {

  return (
    <div>
      <Footer items={items}></Footer>
    </div>
  )
}