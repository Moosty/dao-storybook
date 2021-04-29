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
import PropTypes from "prop-types";
import {Button} from "../../stories/Button";
import {PlusIcon} from "@heroicons/react/solid";
import {Page} from "../Page";
import {Filter} from "../../stories/filters/Filter";

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
      <Container className={[appWidth, "space-x-4", "flex", "flex-row"].join(" ")}>
        <CrowdCard state="active" >
          <CrowdCardHeader userAddress="123L" user="Raphael Cornelis" title="Title" />
        </CrowdCard>
        <CrowdCard state="open" >
          <CrowdCardHeader userAddress="123L" user="Raphael Cornelis" title="Title" />
        </CrowdCard>
        <CrowdCard>
          <CrowdCardHeader userAddress="123L" user="Raphael Cornelis" title="Title" />
        </CrowdCard>
      </Container>
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

const navBarArgs = {
  user: {
    name: "Raphael",
    address: "klasjdflkasjdf",
  },
  navigation: [
    {name: 'Explore', onClick: () => alert("Go to Crowdfunds"), current: true},
    {name: 'Members', onClick: () => alert("Goto Members"), current: false},
    {name: 'DAOs', onClick: () => alert("Goto DAOs"), current: false},
  ],
  ctaButton: <Button
    label="Create new Crowdfund"

    iconBefore
    icon={<PlusIcon className="h-5 w-5 -ml-2 mr-2"/>}
  />,
  userNavigation: [
    {name: 'Create a Dao', onClick: () => alert("Create a dao")},
    {name: 'Create a voting', onClick: () => alert("Create a voting")},
    {name: 'Sign out', onClick: () => alert("Sign out")},
  ],
  invitations: [
    {
      dao: "LiskCenterUtrecht",
      id: "aksldjflksjdflkjdsf",
    }
  ],
}