import React from "react";
import PropTypes from "prop-types";
import {CardHeader} from "./CardHeader";
import {CardFooter} from "./CardFooter";
import {CardContent} from "./CardContent";
import {Paper} from "../Paper";

export const Card = ({className, result, header, content, footer}) => (<div className="flex">
    <Paper className={[ "w-card", className].join(" ")}>
      {result && <div className={[
        result === "no" && "bg-dangerIcon shadow-cardNo",
        result === "yes" && "shadow-cardYes bg-successIcon ",
        "bg-formBorder",
        "w-1",
        "h-full",
      ].join(" ")}
      />}
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
  </div>
)

Card.propTypes = {
  votingResult: PropTypes.oneOf(["yes", "no", "inconclusive"]),
  header: PropTypes.object,
  content: PropTypes.object,
  footer: PropTypes.object,
};

Card.defaultProps = {
  votingResult: "inconclusive",
  header: {},
  content: {},
  footer: {},
};
