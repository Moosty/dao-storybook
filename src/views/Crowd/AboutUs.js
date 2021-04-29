import React from "react";
import {BlogSection} from "../../stories/BlogSection";
import {Button, Container, Form, NavBar, Typography} from "../../stories";
import {appWidth} from "../../shared/styles";
import {PlusIcon} from "@heroicons/react/solid";

export const AboutUs = () => {
  return (
    <div>
      <NavBar {...navBarArgs} />

      <Container className={[appWidth, "space-x-4", "flex", "flex-row"].join(" ")}>
        <div className="lg:ml-4 my-4 ">
          <Typography type="h2" Element='h2'>
            About Us
          </Typography>
        </div>
      </Container>
      <Container className={[appWidth, "space-x-4", "flex", "flex-row"].join(" ")}>

        <BlogSection title="Read more about Moosty & Lisk" descriptionTop="Read more about the lisk application platform, or our other initiatives"/>
      </Container>

    </div>
  )
}


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