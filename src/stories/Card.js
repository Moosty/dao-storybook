import React from "react";
import {CardHeader} from "./CardHeader";
import {CardFooter} from "./CardFooter";
import {CardContent} from "./CardContent";
import PropTypes from "prop-types";
import {Button} from "./Button";
import {Paper} from "./Paper";
import {ProgressCircle} from "./ProgressCircle";
import {VotingCardContent} from "./VotingCardContent";


export const Card = ({className, content,footer, open,closed, footerNotice, buttonLabel,userVote, votingResult, header,buttonGroup, isOpen, userState}) => {
  return (
  <Paper className="w-card ">
      <div className={[
        votingResult === "no" && "bg-dangerIcon shadow-cardNo",
        votingResult === "yes" && "shadow-cardYes bg-successIcon ",
        "bg-formBorder",
        "w-1",
        "h-full",
      ].join(" ")}
      >
      </div>

      <div className={[
        "divide-gray-200",
        "flex",
        "flex-col",
        "w-full",
      ].join(" ")}>
        <CardHeader {...header}/>
        <CardContent {...content} />
        <CardFooter {...footer} />

      </div>
    </Paper>
  )
}


Card.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  votingResult: PropTypes.oneOf(["yes", "no", "inconclusive"]),
  isOpen: PropTypes.bool,
  userState: PropTypes.oneOf(["yes", "no", "closed", "open"]),


};

Card.defaultProps = {
  votingResult: "inconclusive",
  isOpen: true,
  userState: "open",

};


