import React from "react";
import {BalloonLeft, DaoLandingThemeSvg, RocketSvg} from "../../shared/themeSvgs";
import {
  BlogSection,
  Button,
  Container,
  Footer,
  NavBar,
  Typography,
} from "../../stories";
import {appWidth} from "../../shared/styles";
import {FooterAuthorDAO, FooterItemsDAO} from "../../fixtures/dao/footerItemsDAO";
import {navBarArgs} from "../../fixtures/dao/navbar";
import {allDaoData} from "../../fixtures/daos";
import {allMembers} from "../../fixtures/members";
import {allVotingTypes} from "../../fixtures/votingTypes";
import {blogPostsDAO} from "../../fixtures/dao/blogsDAO";

export const LandingsPage = () => {
  return (

    <div>
      <NavBar {...navBarArgs} />
      <div className={[appWidth].join(" ")}>

        <Container className="flex flex-col lg:items-center  lg:flex-row-reverse  lg:my-16 lg:justify-between min-h-screen">
          <div className="flex w-full  lg:w-2/3 ">
            <DaoLandingThemeSvg/>
          </div>
          <div className="flex flex-col my-10 lg:my-auto w-full lg:w-1/3">
            <Typography type="sloganLarge" Element="h5" className="text-themeButtonBg  hidden lg:block">Together, we decide!</Typography>
            <Typography type="sloganSmall" Element="h5" className="text-themeButtonBg lg:hidden ">Together, we decide!</Typography>
            <Typography type="h3" Element="span" className="text-textBody my-auto ">Everyone is equally important</Typography>
            <Button label="Get started!" iconBefore icon={<RocketSvg/>} className="mt-8 w-2/7 lg:w-3/7" shadow />
          </div>
        </Container>
      </div>
      <Container
        className={[appWidth, "flex flex-col lg:flex-row justify-between my-4 space-x-20  lg:my-10"].join(" ")}>
        <div className="flex flex-col w-1/2  mb-4">
          <Typography type="h1" Element="h1">Kalipo</Typography>
          <Typography type="body" Element="span">Voting is a valuable governance tool. Votings give community members the possibility to exert influence and to express their viewpoints. However, votings consume time and energy of the voters and a voting committee. This often results in poor voter attendance and even in invalid votings. Kalipo solves this problem by making votings easy. Kalipo powers the community!
          </Typography>
        </div>
        <div className="flex flex-col  w-1/2 ">
          <Typography type="h1" Element="h1">About the Kalipo team</Typography>
          <Typography type="body" Element="span">The team consists of Xinrong Ding, Peter Nobels and <a
            href="https://moosty.com/contact" target="_blank" rel="noopener noreferrer">Moosty</a> (Jurre, Raphael,
            Sander). With different background, skillsets and experience we are on a journey to reinvent how organisations
            work.
            <a href="https://kalipo.com/contact" target="_blank" rel="noopener noreferrer" className="">
              {` `}Reach out to us!
            </a></Typography>
        </div>
      </Container>
      <Container className={[appWidth, "flex", "flex-row "].join(" ")}>
        <BlogSection title="Blogs" descriptionTop="" blogPosts={blogPostsDAO}/>
      </Container>
      <Footer items={FooterItemsDAO} author={FooterAuthorDAO}></Footer>
    </div>


  )
}


const filters = [
  {
    label: "Select DAO",
    items: allDaoData,
    selected: {
      ...allDaoData[0],
    },
  },
  {
    label: "Initiated by Anyone",
    items: allMembers,
    selected: {
      ...allMembers[0],
    },
  },
  {
    label: "Open and Closed",
    items: allVotingTypes,
    selected: {
      ...allVotingTypes[0],
    },
  },
]

