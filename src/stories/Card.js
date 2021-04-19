import React from "react";
import {CardHeader} from "./CardHeader";
import {CardFooter} from "./CardFooter";
import {CardContent} from "./CardContent";
import PropTypes from "prop-types";
import {Button} from "./Button";


export const Card = ({className, cardLeftShadow,icon, footerNotice, buttonLabel, votingResult,buttonGroup, isOpen, userState}) => {
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
        votingResult === "yes" && "bg-dangerIcon shadow-cardNo",
        votingResult === "no" && "shadow-cardYes bg-successIcon ",
        "bg-formBorder",
        "w-1",
        "h-full",
      ].join(" ")}
      >
      </div>

      <div className={[
        "divide-gray-200",
        "w-full",
      ].join(" ")}>
        <CardHeader/>
        <CardContent>
          CONTENT
        </CardContent>

        <CardFooter
          footerNotice={footerNotice}
          buttonGroup={buttonGroup}
          buttonLabel={buttonLabel}
          icon={icon}
          isOpen={isOpen}/>
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
  votingResult: "yes",
  isOpen: true,
  userState: "open",

};


