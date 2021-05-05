import React from "react";
import {NavBar} from "../../stories/nav/NavBar";
import {Hero} from "../../stories/Hero";
import {appWidth} from "../../shared/styles";
import {Container} from "../../stories/Container";
import {FilterWrapper} from "../../stories/filters/FilterWrapper";
import {BreadCrumbs} from "../../stories/BreadCrumbs";
import {FilterDao} from "../../stories/filters/FilterDao";
import PropTypes from "prop-types";
import {Button} from "../../stories/Button";
import {PlusIcon} from "@heroicons/react/solid";
import {AccountProjectList} from "../../stories/AccountProjectList";
import {CrowdCardContainer} from "../../stories/crowd/CrowdCardContainer";
import {projects} from "../../fixtures/crowdfund/projects";
import {navBarArgs} from "../../fixtures/crowdfund/navbar";
import {Footer} from "../../stories";
import {FooterAuthor, FooterItems} from "../../fixtures/crowdfund/footerItems";

export const Home= ({}) => {
  return ( <>
    <NavBar {...navBarArgs} />
    <Hero
    title="Lisk Crowd | A Regulated Crowdfund Platform"
    subTitle="Regulate your crowdfund journey with Lisk Crowd!"/>
      <Container className={[appWidth, "py-6"].join(" ")}>
        <FilterWrapper>
          <BreadCrumbs />
          <FilterDao classname/>
        </FilterWrapper>
      </Container>
      <Container className={[appWidth, "space-x-4","space-y-4", "flex","flex-wrap", "flex-row"].join(" ")}>
        {projects.map((project) => (<CrowdCardContainer {...project} />))}
        </Container>
      <Container className={[appWidth].join(" ")}>
        <AccountProjectList projects={projects} />
      </Container>
      <Footer items={FooterItems} author={FooterAuthor}></Footer>

    </>
  )
}


Home.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Home.defaultProps = {
  user: null,
};

