import React from "react";
import {BreadCrumbs, Container, FilterDao, FilterWrapper, Footer, NavBar} from "../../stories";
import {navBarArgs} from "../../fixtures/crowdfund/navbar";
import {appWidth} from "../../shared/styles";
import {projects} from "../../fixtures/crowdfund/projects";
import {AccountProjectList} from "../../stories/AccountProjectList";
import {FooterAuthor, FooterItems} from "../../fixtures/crowdfund/footerItems";
import {crowdFundStates} from "../../shared/global.crowdfund";
import {AccountProjectSingleItem} from "../../stories/AccountProjectSingleItem";

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
      <Container className={[appWidth, "my-10"].join(" ")}>
        <AccountProjectList projects={projects}>
          {projects && projects.filter(project => project.state === crowdFundStates.PENDING || project.state === crowdFundStates.ACTIVE.ACTIVE || project.state === crowdFundStates.ACTIVE.PENDING || project.state === crowdFundStates.ACTIVE.CLAIMING || project.state === crowdFundStates.ACTIVE.VOTING)
            .map((project) => (
              <AccountProjectSingleItem {...project} />
            ))}
        </AccountProjectList>
      </Container>
      <Footer items={FooterItems} author={FooterAuthor}></Footer>
    </>
  )
}