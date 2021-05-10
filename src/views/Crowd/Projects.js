import React from "react";
import {BreadCrumbs, Container, FilterDao, FilterWrapper, Footer, NavBar} from "../../stories";
import {navBarArgs} from "../../fixtures/crowdfund/navbar";
import {appWidth} from "../../shared/styles";
import {projects} from "../../fixtures/crowdfund/projects";
import {CrowdCardContainer} from "../../stories/crowd/CrowdCardContainer";
import {AccountProjectList} from "../../stories/AccountProjectList";
import {FooterAuthor, FooterItems} from "../../fixtures/crowdfund/footerItems";
import {crowdFundStates} from "../../shared/global.crowdfund";

export const Projects = () => {

  return (
    <>
      <NavBar {...navBarArgs} />
      <Container className={[appWidth, "py-6"].join(" ")}>
        <FilterWrapper>
          <BreadCrumbs/>
          <FilterDao classname/>
        </FilterWrapper>
      </Container>
      <Container className={[appWidth, "space-x-4", "space-y-4", "flex", "flex-wrap", "flex-row"].join(" ")}>
        {projects && projects.map((project) => {
          if (project.state === crowdFundStates.PENDING || project.state === crowdFundStates.ACTIVE.ACTIVE || project.state === crowdFundStates.ACTIVE.PENDING || project.state === crowdFundStates.ACTIVE.CLAIMING || project.state === crowdFundStates.ACTIVE.VOTING) return <CrowdCardContainer {...project} />
        })}
      </Container>
      <Container className={[appWidth].join(" ")}>
        <AccountProjectList projects={projects}/>
      </Container>
      <Footer items={FooterItems} author={FooterAuthor}></Footer>
    </>
  )
}