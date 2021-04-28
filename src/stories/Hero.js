import React from "react";
import {Container} from "./Container";
import {Typography} from "./Typography";
import {appWidth} from "../shared/styles";
import {Button} from "./Button";

export const Hero = ({backgroundImage, gradient, title, subTitle}) => {
  return (
      // <div className={[appWidth].join(" ")}>
    <div className="relative bg-themeNavBarBg">
      <div className="absolute inset-0">
        {backgroundImage &&
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          alt=""
        />
        }
        {gradient &&
        <div className="absolute inset-0 bg-themeButtonBg" style={{mixBlendMode: 'multiply'}} aria-hidden="true"/>
        }
      </div>
      <Container className={[appWidth, "py-24"].join(" ")}>
        <div className="flex flex-col">
        <Typography className="text-themeButtonTextPrimary" type="h1" Element="h1">{title}</Typography>
        <Typography type='bodyStrong' Element="span">{subTitle}</Typography>
        </div>
        <div className="flex flex-row space-x-4 mt-6">
          <Button
            label="Explore" />
          <Button
            secondary
            label="Create Crowdfund!"/>
        </div>
      </Container>
    </div>
  )
}