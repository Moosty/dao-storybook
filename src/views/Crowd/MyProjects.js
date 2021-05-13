import React, {useEffect, useState} from "react";
import {
  BreadCrumbs,
  Button,
  Container,
  FilterDao,
  FilterWrapper,
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

export const MyProjects = () => {
  const [user, setUser] = useState("345733333743L");
  const [visible, setVisible] = useState(true);


  return (
    <>
      <NavBar {...navBarArgs} />
      <Hero
        title="My Account"
        subTitle="An overview of your projects and/or investments."/>
      <Container className={[appWidth, "py-6"].join(" ")}>
        <FilterWrapper>
          <BreadCrumbs/>
          <FilterDao classname/>
        </FilterWrapper>
        <Button label="Toggle View" onClick={() => setVisible(!visible)}/>
      </Container>
      {visible &&
        <Container className={[appWidth, "space-x-4", "space-y-4", "flex", "flex-wrap", "flex-col", "my-10"].join(" ")}>

        <Typography type="h1" Element="h1">My Crowdfunds</Typography>
        <Container className={[appWidth,"mx-0", "space-x-4", "space-y-4", "flex", "flex-wrap", "flex-row", "my-10"].join(" ")}>
        {projects && projects.filter(project => project.userAddress === user).map((project) =>
          <CrowdCardContainer {...project} />
        )}
      </Container>
        </Container>}
      {!visible && <Container className={[appWidth, "my-20"].join(" ")}>
        <AccountProjectList>
          {projects && projects.filter(project => project.userAddress === user).map((project) =>
            <AccountProjectSingleItem {...project}/>
          )}
        </AccountProjectList>
      </Container>}
      <Container className={[appWidth, "my-20"].join(" ")}>
        <Typography type="h1" Element="h1">My Projects</Typography>
        <AccountProjectList>
          {projects && projects.filter(project => project.userAddress === user).map((project) =>
            <AccountProjectSingleItem {...project}/>
          )}
        </AccountProjectList>
        <Typography type="h1" Element="h1">My Investments</Typography>
        <AccountProjectList>
          { account && account.crowd.funded.map(({crowdfund}) =>  <AccountProjectSingleItem {...projects.find(project => project.id === crowdfund)} account={account}/>)
          }
        </AccountProjectList>
      </Container>
      <Footer items={FooterItems} author={FooterAuthor}></Footer>
    </>
  )
}