import React from "react";
import {Typography} from "../../Typography";
import {Container} from "../../Container";
import {InformationCircleIcon} from "@heroicons/react/solid";

export const ConfirmTransactionModal = ({address, transaction, name}) => {

  return <div>
    <div className="mx-auto flex items-center justify-center h-16 w-16">
      <InformationCircleIcon className={"h-full w-full text-infoIcon"}/>
    </div>
    <div className="mt-3 text-center sm:mt-5 ">
      <Typography type="h1" Element="h1">
        Confirm transaction
      </Typography>
      <Typography type="h2" Element="div">{transaction?.type}</Typography>
      <Typography type="h4" Element="div">Fee: {transaction?.fee}</Typography>
      <Container className="w-full flex-col items-center flex justify-between py-4 px-2 mt-2">
        <Typography type="h3" Element="div">From</Typography>
        <Typography type="bodyStrong" Element="div">{name}</Typography>
        <Typography type="bodyStrong" Element="div">{address}</Typography>
      </Container>
    </div>

  </div>
}