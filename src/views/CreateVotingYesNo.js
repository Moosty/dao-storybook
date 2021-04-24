import React from 'react';
import PropTypes from 'prop-types';
import {CreateVoting} from "./CreateVoting";

export const CreateVotingYesNo = ({user, onLogin, onLogout, onCreateAccount}) => (
  <div>
    <CreateVoting voteTypeYesNo />
  </div>

);
CreateVotingYesNo.propTypes =
  {
    user: PropTypes.shape({}),
    onLogin
:
PropTypes.func.isRequired,
  onLogout
:
PropTypes.func.isRequired,
  onCreateAccount
:
PropTypes.func.isRequired,
}
;

CreateVotingYesNo.defaultProps =
  {
    user: null,
  }
;
