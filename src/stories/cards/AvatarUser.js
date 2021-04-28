import React from 'react';
import {Typography} from "../Typography";
import PropTypes from "prop-types";

export const AvatarUser = ({address, name}) => <div className="items-center flex flex-row">
  <img
    className="h-4 w-4 rounded-full mr-2"
    src={`https://avatar.moosty.com/${address}`}
    alt={`${name} avatar`}
  />
  <div className="flex flex-col">
    <Typography type="body" Element="span">{name}</Typography>
  </div>
</div>

AvatarUser.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
};

AvatarUser.defaultProps = {
  name: "",
  address: "",
};
