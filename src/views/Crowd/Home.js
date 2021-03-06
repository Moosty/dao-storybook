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
import {Button, Footer, Typography} from "../../stories";
import {FooterAuthor, FooterItems} from "../../fixtures/crowdfund/footerItems";
import {crowdFundStates} from "../../shared/global.crowdfund";
import {AccountProjectSingleItem} from "../../stories/AccountProjectSingleItem";
import {ContentSection} from "../../stories/sections/ContentSection";
import {projectImages} from "../../shared/global.dao";

export const Home = ({}) => {
  const [visible, setVisible] = useState(true);

  return (<>
      <NavBar {...navBarArgs} />
      <Hero
        title="Lisk Crowd | A Regulated Crowdfund Platform"
        subTitle="Regulate your crowdfund journey with Lisk Crowd!"
        buttonLabel2="Start Crowdfund!"
        buttonLabel1="Explore"
      />
      <Container className={[appWidth, "py-6"].join(" ")}>
        <FilterWrapper>
          <BreadCrumbs/>
          <FilterDao classname/>
        </FilterWrapper>
        <Button label="Toggle View" onClick={() => setVisible(!visible)}/>
      </Container>
      {visible &&
      <Container className={[appWidth, "space-x-4", "space-y-4", "flex", "flex-wrap", "flex-row", "my-20"].join(" ")}>
        {projects && projects.filter(project => project.state === crowdFundStates.PREVIEW || project.state === crowdFundStates.OPEN).map((project) =>
          <CrowdCardContainer {...project} />
        )}
      </Container>}
      {!visible && <Container className={[appWidth, "my-20"].join(" ")}>
        <AccountProjectList>
          {projects && projects.filter(project => project.state === crowdFundStates.PREVIEW || project.state === crowdFundStates.OPEN).map((project) =>
            <AccountProjectSingleItem {...project}/>
          )}
        </AccountProjectList>
      </Container>}

      <ContentSection gradient
                      title="The New Way Of Crowdfunding"
                      subTitle="more transparency, more structure, more success. "
                      titleContent="What would you do?"
                      content="Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst. Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.Dit is een stukje tekst.Dit is een stukje tekst.  Dit is een stukje tekst.  Dit is een stukje tekst.  "
                      image={projectImages[1]}
                      backgroundImage
      />
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

Home.defaultProps = {user: null,};

