import React from "react";
import {CardHeader} from "./CardHeader";
import {CardFooter} from "./CardFooter";
import {CardContent} from "./CardContent";
import PropTypes from "prop-types";
import {Button} from "./Button";


export const Card = ({className, footer, cardLeftShadow,icon, footerNotice, buttonLabel,userVote, votingResult, header,buttonGroup, isOpen, userState}) => {
  return (
    <div className={[
      className,
      "m-4",
      "flex",
      "flex-row",
      "bg-cardBg",
      "shadow-defaultPrimary",
      "overflow-hidden",
      "rounded-default",
      "divide-y",
      "w-full",
    ].join(" ")}>
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
        <CardContent>
          CONTENT
        </CardContent>

        <CardFooter {...footer} />

      </div>
    </div>
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


