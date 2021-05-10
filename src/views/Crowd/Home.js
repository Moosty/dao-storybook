import React, {useState} from "react";
import {NavBar} from "../../stories/nav/NavBar";
import {Hero} from "../../stories/Hero";
import {appWidth} from "../../shared/styles";
import {Container} from "../../stories/Container";
import {FilterWrapper} from "../../stories/filters/FilterWrapper";
import {BreadCrumbs} from "../../stories/BreadCrumbs";
import {FilterDao} from "../../stories/filters/FilterDao";
import PropTypes from "prop-types";
import {AccountProjectList} from "../../stories/AccountProjectList";
import {CrowdCardContainer} from "../../stories/crowd/CrowdCardContainer";
import {projects} from "../../fixtures/crowdfund/projects";
import {navBarArgs} from "../../fixtures/crowdfund/navbar";
import {Button, Footer} from "../../stories";
import {FooterAuthor, FooterItems} from "../../fixtures/crowdfund/footerItems";
import {crowdFundStates} from "../../shared/global.crowdfund";

export const Home= ({}) => {
  const [visible, setVisible] = useState(false);

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
        <Button label="Toggle View" onClick={() => setVisible(!visible)} />
      </Container>
      {visible && <Container className={[appWidth, "space-x-4", "space-y-4", "flex", "flex-wrap", "flex-row", "my-20"].join(" ")}>
        {projects && projects.filter(project => project.state === crowdFundStates.PREVIEW || project.state === crowdFundStates.OPEN).map((project) =>
          <CrowdCardContainer {...project} />
        )}
      </Container>}
      {!visible && <Container className={[appWidth, "my-20"].join(" ")}>
        {projects && projects.filter(project => project.state === crowdFundStates.PENDING).map((project) =>
          <AccountProjectList projects={projects}/>
        )}
      </Container>}
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

