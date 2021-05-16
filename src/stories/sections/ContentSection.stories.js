import React from "react";
import {ContentSection} from "./ContentSection";
import {projectImages} from "../../shared/global.dao";

export default {
  title: "Sections/ContentSection",
  component: ContentSection,
}



export const All = () => {
  return (
    <div>
      <ContentSection gradient
                      gradientClassName="bg-themeNavBarBg"
                      backgroundImage
                      image={projectImages[6]}
                      title="The New Way Of Crowdfunding"
                      subTitle="more transparency, more structure, more success. "
                      titleContent="What would you do?"
                      content="Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst. Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.  "
      />
    </div>
  )
}


export const Gradient = () => {
  return (
    <div>
      <ContentSection gradient
                      gradientClassName="bg-themeLight"
                      title="The New Way Of Crowdfunding"
                      subTitle="more transparency, more structure, more success. "
                      titleContent="What would you do?"
                      content="Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst. Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.  "
                      image={projectImages[6]}
                      backgroundImage
      />
    </div>
  )
}


export const ContentButton = () => {
  return (
    <div>
      <ContentSection gradient
                      gradientClassName="bg-themeLight"
                      title="The New Way Of Crowdfunding"
                      subTitle="more transparency, more structure, more success. "
                      titleContent="What would you do?"
                      content="Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst. Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.  "
                      image={projectImages[6]}
                      backgroundImage
                      buttonLabel1="Start Now!"
      />
    </div>
  )
}


export const NoImage = () => {
  return (
    <div>
      <ContentSection gradient
                      gradientClassName="bg-themeNavBarBg"

                      title="The New Way Of Crowdfunding"
                      subTitle="more transparency, more structure, more success. "
                      titleContent="What would you do?"
                      content="Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst. Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.  "
                      buttonLabel1="Start Now!"
                      onClickButton1={() => alert("Woowwja")}
      />
    </div>
  )
}


export const SurfaceImage = () => {
  return (
    <div>
      <ContentSection gradient
                      gradientClassName="bg-surfaceOutline"
                      image={projectImages[6]}
                      backgroundImage
                      title="The New Way Of Crowdfunding"
                      subTitle="more transparency, more structure, more success. "
                      titleContent="What would you do?"
                      content="Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst. Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.  "
                      buttonLabel1="Start Now!"
                      onClickButton1={() => alert("Woowwja")}
      />
    </div>
  )
}



export const Surface = () => {
  return (
    <div>
      <ContentSection gradient
                      gradientClassName="bg-surfaceOutline"
                      title="The New Way Of Crowdfunding"
                      subTitle="more transparency, more structure, more success. "
                      titleContent="What would you do?"
                      content="Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst. Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.  "
                      buttonLabel1="Start Now!"
                      onClickButton1={() => alert("Woowwja")}
      />
    </div>
  )
}
