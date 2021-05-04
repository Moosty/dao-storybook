import React from "react";
import {Typography} from "../../Typography";
import {Container} from "../../Container";
import {CheckCircleIcon, ClockIcon, InformationCircleIcon, XCircleIcon} from "@heroicons/react/solid";
export const transactionStates = {
  pending: "pending",
  error: "error",
  confirmed: "confirmed",
}
export const ResultTransactionModal = ({transactionId, state, text}) => {

  return <div>
    <div className="mx-auto flex items-center justify-center h-16 w-16">
      {transactionStates.pending === state && <ClockIcon className={"h-full w-full text-warningIcon"}/>}
      {transactionStates.error === state && <XCircleIcon className={"h-full w-full text-dangerIcon"}/>}
      {transactionStates.confirmed === state && <CheckCircleIcon className={"h-full w-full text-successIcon"}/>}
    </div>
    <div className="mt-3 text-center sm:mt-5 ">
      <Typography type="h1" Element="h1">
        {state === transactionStates.pending && "Awaiting confirmation"}
        {state === transactionStates.error && "Transaction not accepted"}
        {state === transactionStates.confirmed && "Transaction successful"}
      </Typography>
      <Typography type="h4" Element="div" className="truncate">{transactionId}</Typography>
      <Container className="w-full flex-col items-center flex justify-between py-4 px-2 mt-2">
        <Typography type="caption" Element="div" className={[
          transactionStates.error === state && "text-dangerDark",
          transactionStates.confirmed === state && "text-successDark",
        ].join(" ")}>{text}</Typography>
      </Container>
    </div>
  </div>
}