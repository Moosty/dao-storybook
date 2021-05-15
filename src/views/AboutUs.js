import React from "react";
import {BlogSection} from "../stories/BlogSection";
import {Container, Footer, NavBar, Typography} from "../stories";
import {appWidth} from "../shared/styles";
import {FooterAuthorDAO, FooterItemsDAO} from "../fixtures/dao/footerItemsDAO";
import {navBarArgsDAO} from "../fixtures/dao/navbar";
import {blogPostsDAO} from "../fixtures/dao/blogsDAO";

export const AboutUs = () => {
  return (
    <div>
      <NavBar {...navBarArgsDAO} />
      <Container className={[appWidth, "flex flex-col lg:flex-row justify-between mt-4 max-w-7xl lg:mt-10"].join(" ")}>
        <div className="flex flex-col max-w-lg mb-4">
          <Typography type="h1" Element="h1">Kalipo</Typography>
          <Typography type="body" Element="span">Voting is a valuable governance tool, it gives the members of a community the possibility to exert influence and also collects information about viewpoints. However, votings consume time and energy of the voters and a voting committee. This often results in poor voter attendance and even in invalid votes.
          </Typography>
        </div>
        <div className="flex flex-col max-w-lg">
          <Typography type="h1" Element="h1">About the Kalipo team</Typography>
          <Typography type="body" Element="span">The team consists of Xinrong Ding, Peter Nobels and <a href="https://moosty.com/contact" target="_blank" rel="noopener noreferrer">Moosty</a> (Jurre, Raphael, Sander). With different background, skillsets and experience we are on a journey to reinvent how organisations work.
            <a href="https://kalipo.com/contact"  target="_blank" rel="noopener noreferrer" className="">
              {` `}Reach out to us!
            </a></Typography>
        </div>
      </Container>
      <Container className={[appWidth, "flex", "flex-row max-w-7xl"].join(" ")}>
        <BlogSection title="Blogs" descriptionTop="" blogPosts={blogPostsDAO}/>
      </Container>
      <Footer items={FooterItemsDAO} author={FooterAuthorDAO}></Footer>

    </div>
  )
}

