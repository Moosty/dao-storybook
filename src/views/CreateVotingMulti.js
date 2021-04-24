import React from 'react';
import PropTypes from 'prop-types';
import {CreateVoting} from "./CreateVoting";

export const CreateVotingMulti = ({user, onLogin, onLogout, onCreateAccount}) => (
  <div>
    <CreateVoting voteTypeMulti />
  </div>

);
CreateVotingMulti.propTypes =
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

CreateVotingMulti.defaultProps =
  {
    user: null,
  }
;
