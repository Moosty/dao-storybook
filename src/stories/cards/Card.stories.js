import React from "react";

import { Card } from "./Card";
import {allCardsData} from "../../fixtures/cards";
import {Container} from "../Container";
import {VotingContainer} from "../voting/VotingContainer";

export default {
    title: "Elements/Card",
    component: Card,
}

export const Playground = (args) => <div className={"m-5"}><Card {...args}/></div>
export const CardWithData = Playground.bind({});
CardWithData.args = {...allCardsData[4]};

export const All = () => <Container>
    <div className="flex flex-row flex-wrap justify-between space-y-8 ">
        {allCardsData.map(card => <VotingContainer {...card} />)}
    </div>
</Container>