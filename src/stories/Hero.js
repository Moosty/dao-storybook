import React from "react";
import {Container} from "./Container";
import {Typography} from "./Typography";
import {appWidth} from "../shared/styles";
import {Button} from "./Button";

export const Hero = ({backgroundImage, gradient, title, subTitle,buttonLabel1,buttonLabel2, onClickButton1, onClickButton2}) => {
  return (
    <div className="relative bg-themeNavBarBg">
     
      <Container className={[appWidth, "py-24"].join(" ")}>
        <div className="flex flex-col">
        <Typography className="text-themeButtonTextPrimary" type="h1" Element="h1">{title}</Typography>
        <Typography type='bodyStrong' Element="span" className="text-themeButtonTextPrimary">{subTitle}</Typography>
        </div>
        {buttonLabel1 &&
        <div className="flex flex-row space-x-4 mt-6">
          <Button
          label={buttonLabel1}
          onClick={onClickButton1}
          />
          <Button
          secondary
          label={buttonLabel2}
          onClick={onClickButton2}
          />
          </div>
        }
      </Container>
    </div>
  )
}
