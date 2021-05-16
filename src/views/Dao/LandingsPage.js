import React from "react";
import {DaoLandingThemeSvg, RocketSvg} from "../../shared/themeSvgs";
import {
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

export const LandingsPage = () => {
  return (

    <div>
      <NavBar {...navBarArgs} />
      <div className={[appWidth].join(" ")}>

        <Container className="flex flex-col lg:items-center  lg:flex-row-reverse my-10 lg:my-16 lg:justify-between">

          <div className="flex w-full  lg:w-2/3 ">
            <DaoLandingThemeSvg/>
          </div>
          <div className="flex flex-col my-10 lg:my-auto w-full lg:w-1/3  ">
            <Typography type="sloganLarge" Element="h5" className="text-themeButtonBg  hidden lg:block">Together, we decide!</Typography>
            <Typography type="sloganSmall" Element="h5" className="text-themeButtonBg lg:hidden ">Together, we decide!</Typography>
            <Typography type="h3" Element="span" className="text-textBody my-auto ">Everyone is equally important</Typography>
            <Button label="Get started!" iconBefore icon={<RocketSvg/>} className="mt-8 w-2/7 lg:w-3/7" shadow />
          </div>
        </Container>
      </div>
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

