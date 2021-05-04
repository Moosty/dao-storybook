import React from "react";
import {Typography} from "../../Typography";
import {Container} from "../../Container";

export const MemberModal = ({address, daos, name}) => {

  return <div>
    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full">
      <img
        className="h-10 w-10 rounded-full mr-2"
        src={`https://avatar.moosty.com/${address}`}
        alt=""
      />
    </div>
    <div className="mt-3 text-center sm:mt-5 ">
      <Typography type="h1" Element="h1">
        {name}
      </Typography>
      <Typography type="bodyStrong" Element="div">{address}</Typography>
      <Container className="w-full flex-col items-center flex justify-between py-4 px-2 mt-2">
        <Typography type="bodyStrong" Element="div">Member of:</Typography>
        {daos?.map(dao => <Typography className="text-textHeadings" type="body" Element="span">{dao.name}</Typography>)}
      </Container>
    </div>

  </div>
}