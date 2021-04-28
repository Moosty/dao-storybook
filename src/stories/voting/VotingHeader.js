import React from "react";
import PropTypes from "prop-types";
import {Typography} from "../Typography";
import {AvatarUser} from "../cards/AvatarUser";
import {VotingState} from "../cards/VotingState";

export const VotingHeader = ({title, dao, user, closed, openLabel}) => (
  <div className="bg-cardBg flex flex-col px-4 py-2  sm:px-6">
    <div className="flex flex-row justify-between">
      <Typography type="body" Element="span">{dao}</Typography>
      <AvatarUser name={user?.name} address={user?.address}/>
    </div>
    <Typography type="bodyStrong" Element="span">{title}</Typography>
    <div className="flex flex-col mt-2">
      <VotingState isOpen={!closed} label={openLabel}/>
    </div>
  </div>)

VotingHeader.propTypes = {
  title: PropTypes.string,
  dao: PropTypes.string,
  user: PropTypes.object,
  openLabel: PropTypes.string,
  closed: PropTypes.bool,
};

VotingHeader.defaultProps = {
  title: "",
  dao: "",
  user: {
    name: "",
    address: "",
  },
  openLabel: "",
  closed: false,
};
