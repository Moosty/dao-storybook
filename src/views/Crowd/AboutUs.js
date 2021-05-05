import React from "react";
import {BlogSection} from "../../stories/BlogSection";
import {Button, Container, Footer, Form, NavBar, Typography} from "../../stories";
import {appWidth} from "../../shared/styles";
import {FooterAuthor, FooterItems} from "../../fixtures/crowdfund/footerItems";
import {navBarArgs} from "../../fixtures/crowdfund/navbar";

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
      <Footer items={FooterItems} author={FooterAuthor}></Footer>

    </div>
  )
}

