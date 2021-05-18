import React from "react";
import {CrowdCardImage} from "./crowd/CrowdCardImage";
import {Typography} from "./Typography";
import {CashIcon, TrashIcon, UsersIcon} from "@heroicons/react/outline";
import {crowdFundStates, PROJECT_LIFECYCLE, userRoles} from "../shared/global.crowdfund";
import {Button} from "./Button";
import PropTypes from "prop-types";
import {IconButton} from "./IconButton";
import moment from "moment";

export const AccountProjectSingleItem = ({
                                           image,
                                           gradient,
                                           id,
                                           title,
                                           targetAmount,
                                           state,
                                           backers,
                                           userRole,
                                           account,
                                           onClickRegister,
                                           onClickVote,
                                           onClickCancel,
                                           onClickClaim, // refund
                                           durationProject,
                                           budget, // used amount goal - balance = budget
                                           unit = "LSK",
                                           startDate = "12-07-2021",
                                           onClickClaimOwner, // claim
                                           claimed,
                                           claims,
                                           startProject = 0,
                                           lastHeight = 46,
                                         }) => {
  const blocksSinceStartProject = lastHeight - startProject
  const currentPeriod = Math.floor((blocksSinceStartProject / PROJECT_LIFECYCLE.PERIOD_BLOCKS)) // IN BLOCKS
  const startVoting = (startProject + (currentPeriod * PROJECT_LIFECYCLE.PERIOD_BLOCKS) + (PROJECT_LIFECYCLE.PERIOD_BLOCKS - PROJECT_LIFECYCLE.VOTE_BEFORE_END_PERIOD - PROJECT_LIFECYCLE.VOTE_BLOCKS)) - lastHeight
  const startVotingSeconds = startVoting * PROJECT_LIFECYCLE.BLOCK_TIME
  const endVoting = startVoting + PROJECT_LIFECYCLE.VOTE_BLOCKS;
  const endVotingSeconds = endVoting * PROJECT_LIFECYCLE.BLOCK_TIME;

  const currentBlockThisPeriod = (lastHeight - startProject) - ((currentPeriod) * PROJECT_LIFECYCLE.PERIOD_BLOCKS)
  const blocksLeftThisPeriod = (PROJECT_LIFECYCLE.PERIOD_BLOCKS - currentBlockThisPeriod)
  const blocksFirstPhase = PROJECT_LIFECYCLE.PERIOD_BLOCKS - (PROJECT_LIFECYCLE.VOTE_BEFORE_END_PERIOD + PROJECT_LIFECYCLE.VOTE_BLOCKS)

  const timeLabel = blocksLeftThisPeriod > (PROJECT_LIFECYCLE.VOTE_BLOCKS + PROJECT_LIFECYCLE.VOTE_BEFORE_END_PERIOD + (blocksFirstPhase / 2)) ? "New period started" :
    startVotingSeconds > 0 ?
      `Voting starts ${moment().add(startVotingSeconds, 'seconds').from()}` :
      blocksLeftThisPeriod > (PROJECT_LIFECYCLE.VOTE_BEFORE_END_PERIOD + (PROJECT_LIFECYCLE.VOTE_BLOCKS / 2)) ? "" :
        endVotingSeconds > 0 ?
          `Voting closes ${moment().add(endVotingSeconds, 'seconds').from()}` :
          state === crowdFundStates.ACTIVE.ACTIVE ? "Project is active" : state === crowdFundStates.CANCELED ? "Project is canceled by backers" : "--"
  const isPendingStart = startProject > lastHeight
  const isVoting = PROJECT_LIFECYCLE.PERIOD_BLOCKS - PROJECT_LIFECYCLE.VOTE_BEFORE_END_PERIOD >= currentBlockThisPeriod && currentBlockThisPeriod >= PROJECT_LIFECYCLE.PERIOD_BLOCKS - PROJECT_LIFECYCLE.VOTE_BEFORE_END_PERIOD - PROJECT_LIFECYCLE.VOTE_BLOCKS
  const lastClaim = claims?.length > 0 && claims.reduce((acc, claim) => acc > claim.period ? acc : claim.period, 0)
  const isClaiming = claims?.length === 0 ? currentPeriod > 0 && currentBlockThisPeriod >= PROJECT_LIFECYCLE.PERIOD_BLOCKS : lastClaim < currentPeriod
  const isTimeEnded = currentPeriod >= durationProject
  return (
    <div>
      <li key={id}>
        <a className="block hover:bg-gray-50">
          <div className="flex flex-row  items-center py-2">
            <div className="flex flex-row items-center w-1/2">
              <CrowdCardImage className="w-16 h-16 mr-2 rounded-default" image={image} gradient={gradient}/>
              <div className="flex flex-col w-full mx-4">
                <div className="flex flex-row">
                  <Typography type="bodyStrong" Element="span" className="mr-2">{title}</Typography>
                  <Typography type="caption" Element="span">{state}</Typography>
                </div>
                targetAmount: {targetAmount}{unit} durationproject: {durationProject} budget: {budget}
              </div>
            </div>
            <div className=" items-center flex flex-row justify-between w-1/2">
              <div className=" items-center ">
                <div className="flex flex-col item-center">
                  <p className="flex  text-sm text-gray-500 mr-2">
                    <UsersIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                    {backers && backers.length}
                  </p>
                  <p className="flex items-center text-sm text-gray-500 ">
                    <CashIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                    {targetAmount}
                  </p>
                </div>
              </div>

              {!isTimeEnded && state !== crowdFundStates.ENDED && <div className="  items-center flex flex-row">
                {userRole === userRoles.OWNER && state === crowdFundStates.PENDING &&
                <Button label="Register Start Date" size="small" onClick={onClickRegister}/>}
                {userRole === userRoles.OWNER && isClaiming &&
                <Button label="Claim" size="small" onClick={onClickClaimOwner} disabled={!!claimed}/>}
                {userRole === userRoles.BACKER && state === crowdFundStates.ACTIVE.ACTIVE && isVoting &&
                <Button onClick={onClickVote} size="small" label="Vote"/>}
                {userRole !== userRoles.GUEST && (state === crowdFundStates.CANCELED || state === crowdFundStates.FAILED) &&
                <Button label="Refund" type="small" onClick={onClickClaim}/>}
                {userRole === userRoles.BACKER && state === crowdFundStates.PENDING &&
                <Typography type="caption" Element="span">Waiting for start date</Typography>}
                {account && <div className="ml-4">
                  {account?.chain?.crowd?.funded.find(project => project.id === id)?.amount}
                </div>}
                {(state === crowdFundStates.PENDING || state === crowdFundStates.ACTIVE.ACTIVE) &&
                <Typography type="caption" Element="span" className=" ml-4">{timeLabel}</Typography>}
                {userRole === userRoles.OWNER && <IconButton className="" onClick={onClickCancel}>
                  <TrashIcon className="h-5 w-5 mx-auto"/>
                </IconButton>}
              </div>}
              {isTimeEnded && state !== crowdFundStates.PENDING && state !== crowdFundStates.FAILED && state !== crowdFundStates.CANCELED && <div className="  items-center flex flex-row">
                {userRole !== userRoles.OWNER &&
                <Typography type="caption" Element="span" className=" ml-4">
                  Project has ended
                </Typography>}
                {userRole === userRoles.OWNER && isClaiming &&
                <Button label="Claim" size="small" onClick={onClickClaimOwner} disabled={!!claimed}/>}
              </div>}
              {state === crowdFundStates.CANCELED &&
              <Typography type="caption" Element="span" className=" ml-4">Project is canceled</Typography>}
              {state === crowdFundStates.FAILED &&
              <Typography type="caption" Element="span" className=" ml-4">Project has failed</Typography>}
            </div>
          </div>
        </a>
      </li>
    </div>
  )
}


AccountProjectSingleItem.propTypes = {
  userRole: PropTypes.oneOf(userRoles),
};

AccountProjectSingleItem.defaultProps = {
  userRole: userRoles.GUEST,
};