import React from "react";
import {NavBar} from "../../stories/nav/NavBar";
import {Hero} from "../../stories/Hero";
import {appWidth} from "../../shared/styles";
import {Container} from "../../stories/Container";
import {FilterWrapper} from "../../stories/filters/FilterWrapper";
import {BreadCrumbs} from "../../stories/BreadCrumbs";
import {FilterDao} from "../../stories/filters/FilterDao";
import {Card} from "../../stories/cards/Card";
import {CardHeader} from "../../stories/cards/CardHeader";
import {CrowdCardHeader} from "../../stories/cards/CrowdCardHeader";
import {Paper} from "../../stories/Paper";
import {CrowdCard} from "../../stories/cards/CrowdCard";

export const Home= ({}) => {
  return ( <>
    <NavBar />
    <Hero
    title="Lisk Crowd | A Regulated Crowdfund Platform"
    subTitle="Regulate your crowdfund journey with Lisk Crowd!"/>
      <Container className={[appWidth, "py-6"].join(" ")}>
        <FilterWrapper>
          <BreadCrumbs />
          <FilterDao />
        </FilterWrapper>
      </Container>
      <Container className={[appWidth, ""].join(" ")}>
        <CrowdCard>
          <CrowdCardHeader userAddress="123L" user="Raphael Cornelis" title="Title" />
        </CrowdCard>
      </Container>
    </>
  )
}