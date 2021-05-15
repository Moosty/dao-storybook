import React from "react";
import {BlogSection} from "../../stories/BlogSection";
import {Container, Footer, Hero, NavBar, Typography} from "../../stories";
import {appWidth} from "../../shared/styles";
import {FooterAuthor, FooterItems} from "../../fixtures/crowdfund/footerItems";
import {navBarArgs} from "../../fixtures/crowdfund/navbar";
import {blogPostsCrowdfund} from "../../fixtures/crowdfund/blogs";

export const AboutUs = () => {
  return (
    <div>
      <NavBar {...navBarArgs} />
      <Hero
        title="Lisk Crowd | A Regulated Crowdfund Platform"
        subTitle="Regulate your crowdfund journey with Lisk Crowd!"
        buttonLabel2="Start Crowdfund!"
        buttonLabel1="Explore"
      />
      <Container className={[appWidth, "flex flex-col lg:flex-row justify-between mt-4 max-w-7xl lg:mt-10"].join(" ")}>
        <div className="flex flex-col max-w-lg mb-4">
        <Typography type="h1" Element="h1">About Lisk crowd</Typography>
        <Typography type="body" Element="span">Lisk crowd is a proof of concept showing how blockchain protocols can be used to regulated crowdfunds in a decentralised way. It provides backers (investors) more control over their donation. In addition it forces the fundraiser to keep everyone updated. The fundraiser can allow periods of voting in which backers can cancel the project. When a project starts a crowdfund, they must indicate the amount of investment they need per period and how many periods are needed to realize their project. Hereafter we explain why it might be useful and how it works.
        </Typography>
        </div>
        <div className="flex flex-col max-w-lg">
          <Typography type="h1" Element="h1">About Moosty</Typography>
          <Typography type="body" Element="span">Moosty is a multidisciplinary project team working on a diverse set of innovative solutions. Specifically focusing on blockchain/decentralization related initiatives. The team consists of three members: Sander (Corbifex), Raphael, Jurre. Most importantly we like working together and working with others. Create new things and new collaborations. Interested in working together?
            <a href="https://moosty.com/contact"  target="_blank" rel="noopener noreferrer" className="">
              {` `}Reach out to us!
            </a></Typography>
        </div>
      </Container>
      <Container className={[appWidth, "flex", "flex-row max-w-7xl"].join(" ")}>
        <BlogSection title="Blogs" descriptionTop="" blogPosts={blogPostsCrowdfund}/>
      </Container>
      <Footer items={FooterItems} author={FooterAuthor}></Footer>

    </div>
  )
}

