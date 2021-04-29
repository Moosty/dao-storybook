import React from "react";
import { AboutUs} from "./AboutUs";
import {PlayGround} from "../../stories/BreadCrumbs.stories";

export default {
  title: 'Crowd/Pages/Aboutus',
  component: AboutUs,
}

export const Playground = (args) => <AboutUs {...args} />

export const aboutUs = PlayGround.bind({});
aboutUs.args = {};