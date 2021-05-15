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

        <Container className="flex flex-col lg:flex-row-reverse lg:my-32 justify-between">

          <div className="flex lg:w-2/3 ">
            <DaoLandingThemeSvg/>
          </div>
          <div className="flex flex-col my-10 lg:my-auto lg:w-1/3">
            <Typography type="sloganLarge" Element="h5" className="text-themeButtonBg  invisible lg:visible">Together, we decide!</Typography>
            <Typography type="sloganSmall" Element="h5" className="text-themeButtonBg lg:hidden ">Together, we decide!</Typography>
            <Typography type="h3" Element="h1" className="text-textBody my-auto ">Everyone is equally important</Typography>
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

