import React, {useState} from "react";
import {CrowdCardImage} from "./crowd/CrowdCardImage";
import {Typography} from "./Typography";
import {ProgressBar} from "./ProgressBar";
import {CashIcon, UsersIcon} from "@heroicons/react/solid";
import {crowdFundStates, userRoles} from "../shared/global.crowdfund";
import {Button} from "./Button";
import {ButtonGroup} from "./ButtonGroup";
import PropTypes from "prop-types";
import {Modal} from "./modals/Modal";
import {BackProjectModal} from "./modals/crowd/BackProjectModal";

export const AccountProjectSingleItem = ({
                                           image,
                                           gradient,
                                           id,
                                           title,
                                           targetAmount,
                                           totalRaised,
                                           state,
                                           backers,
                                           userRole,
                                           onClick,
                                           account,
                                           onClickRegister,
                                           onClickVote,
                                           claim,
                                           onClickCancel,
                                           onClickOption,
                                           onClickClaim,
                                         }) => {


  return (
    <div>
      <li key={id}>
        <a className="block hover:bg-gray-50">
          <div className="flex flex-row  items-center py-2">
            <div className="flex flex-row items-center w-1/5">
              <CrowdCardImage className="w-16 h-16 mr-2 rounded-default" image={image} gradient={gradient}/>
              <div className="flex flex-col w-full mx-4">
                <Typography type="bodyStrong" Element="span">{title}</Typography>
                <ProgressBar classname="w-full" target={targetAmount} current={totalRaised} unit="LSK"
                             state={state}/>
              </div>
            </div>
            <div className=" items-center w-1/5 ">
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
            <div className=" items-center w-2/5 ">
            </div>
            {account && <div>{account.crowd.funded.find(project => project.crowdfund === id)?.amount}</div>}
            <div className=" items-center w-1/5 ">
              {(userRole === userRoles.BACKER && state === crowdFundStates.ACTIVE.VOTING) &&
              <Button onClick={onClickVote} label="Vote"/>
              }
              {userRole === userRoles.BACKER && state === crowdFundStates.ACTIVE.CLAIMING &&
              <Button label="Claim" onClick={onClickClaim}/>
              }
              {userRole === userRoles.OWNER && state === crowdFundStates.ACTIVE.PENDING &&
              <Button label="Register Start Date" onClick={onClickRegister} claim={claim}/>
              }
              {userRole === userRoles.OWNER && state === crowdFundStates.ACTIVE.ACTIVE &&
              <ButtonGroup buttons={[
                {
                  icon: <Typography type="body" Element="span"
                                    className="text-themeButtonTextPrimary"
                  > Cancel </Typography>
                },
                {
                  icon: <Typography type="body" Element="span"
                                    className="text-themeButtonTextPrimary" onClick={onClickOption}> Optie </Typography>
                },
                {
                  icon: <Typography type="body" Element="span"
                                    className="text-themeButtonTextPrimary"
                                    onClick={onClickClaim}
                  > Claim </Typography>
                },
              ]}/>
              }
            </div>
          </div>
        </a>
      </li>
    </div>
  )
}


AccountProjectSingleItem.propTypes = {
  userRole: PropTypes.oneOf(userRoles),
  onClick: PropTypes.func,
};

AccountProjectSingleItem.defaultProps = {
  userRole: userRoles.GUEST,
  onClick: () => null,
};