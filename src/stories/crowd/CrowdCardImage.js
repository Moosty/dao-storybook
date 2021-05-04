import React from "react";
import {projectImages} from "./constants";

export const CrowdCardImage = ({image, gradient}) => {
  return (
    <div className="relative ">
      <img
        className="w-full h-24 object-cover"
        src={projectImages[image || 0]}
        alt=""
      />
      {gradient &&
      <div className="absolute inset-0 bg-themeButtonBgSecondary" style={{mixBlendMode: 'multiply'}}
           aria-hidden="true"/>
      }

    </div>
  )
}