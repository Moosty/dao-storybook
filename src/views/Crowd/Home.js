import React from "react";
import {NavBar} from "../../stories/NavBar";
import {Hero} from "../../stories/Hero";
import {appWidth} from "../../shared/styles";

export const Home= ({}) => {
  return ( <>
    <NavBar />
    <Hero />
      <div className={[appWidth].join(" ")}>

      </div>
    </>
  )
}