import React from "react";

export const VotingFooterLeft = ({notAllowed}) => {
  return (<>
    {notAllowed &&
    < div>
      This
      Voting
      isnt
      for you
    < /div>
    }
    </>
  )
}