import React, {useState} from "react";
import {
  Container,
  Footer,
  Hero,
  NavBar,
  Typography
} from "../../stories";
import {navBarArgs} from "../../fixtures/crowdfund/navbar";
import {appWidth} from "../../shared/styles";
import {projects} from "../../fixtures/crowdfund/projects";
import {CrowdCardContainer} from "../../stories/crowd/CrowdCardContainer";
import {AccountProjectList} from "../../stories/AccountProjectList";
import {FooterAuthor, FooterItems} from "../../fixtures/crowdfund/footerItems";
import {AccountProjectSingleItem} from "../../stories/AccountProjectSingleItem";
import {account} from "../../fixtures/crowdfund/account";
import {crowdFundStates, userRoles} from "../../shared/global.crowdfund";

export const MyProjects = () => {
  const [projectOwner, setProjectOwner] = useState("345733333743L");

  return (
    <>
      <NavBar {...navBarArgs} />
      <Hero
        title="My Account"
        subTitle="An overview of your projects and/or investments."
      />
      {/*
      MY CROWDFUNDS (STATUS: PREVIEW, OPEN)
      */}
      <Container
        className={[appWidth, "flex", "flex-wrap", "flex-col", "my-10", "py-4", "bg-surfaceBg", "rounded-default"].join(" ")}>
        <div className="flex flex-col my-4 divide-gray-200">
          <Typography className="w-full bg-surfaceBg mt-5 " type="h4" Element="span">
            My Crowdfunds</Typography>
          <Typography className="" type="body" Element="span">Your currently running crowdfundprojects.</Typography>
        </div>
        <div className="flex flex-row flex-wrap space-x-4 space-y-4">
          {projects && projects.filter(project => project.userAddress === projectOwner && (project.state === crowdFundStates.PREVIEW || project.state === crowdFundStates.OPEN)).map((project) =>
            <CrowdCardContainer {...project} userRole={userRoles.OWNER}/>
          )}
        </div>
      </Container>

      {/*
      MY PROJECTS (STATUS: PENDING, ACTIVE)
      */}
      <Container
        className={[appWidth, "flex", "flex-wrap", "flex-col", "mb-10", "py-4", "rounded-default"].join(" ")}>
        <div className="flex flex-col my-4 divide-gray-200">
          <Typography className="w-full mt-5 " type="h4" Element="span">
            My Projects</Typography>
          <Typography className="" type="body" Element="span">Your currently running projects</Typography>
        </div>
        <div className="flex flex-col flex-wrap space-x-4 space-y-4">
          <AccountProjectList>
            {projects && projects.filter(project => project.userAddress === projectOwner && (project.state !== crowdFundStates.PREVIEW && project.state !== crowdFundStates.OPEN)).map((project) =>
              <AccountProjectSingleItem {...project} userRole={userRoles.OWNER}/>
            )}
          </AccountProjectList>
        </div>
      </Container>

      {/*
      MY INVESTMENTS
      */}
      <Container className={[appWidth, "mb-10"].join(" ")}>
        <div className="flex flex-col my-4 divide-gray-200">
          <Typography className="w-full mt-5 " type="h4" Element="span">
            My Investments</Typography>
          <Typography className="" type="body" Element="span">Your currently investments</Typography>
        </div>
        <AccountProjectList>
          {account && account.crowd.funded.map(({crowdfund}) =>
            <AccountProjectSingleItem {...projects.find(project => project.id === crowdfund)} account={account}
                                      userRole={userRoles.BACKER}/>)
          }
        </AccountProjectList>
      </Container>
      <Footer items={FooterItems} author={FooterAuthor}></Footer>
    </>
  )
}