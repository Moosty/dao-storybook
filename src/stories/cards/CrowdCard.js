import React from "react";
import PropTypes from "prop-types";
import {CardHeader} from "./CardHeader";
import {CardFooter} from "./CardFooter";
import {CardContent} from "./CardContent";
import {Paper} from "../Paper";
import {CrowdCardHeader} from "./CrowdCardHeader";
import {CrowdCardContent} from "./CrowdCardContent";

export const CrowdCard = ({votingResult, header, content, footer}) => (<div className="flex">
    <Paper className="w-card">

      <div className={[
        "divide-gray-200",
        "flex",
        "flex-col",
        "w-full",
        "border",
        "border-gray-300",
        "rounded-default",

      ].join(" ")}>
        <CrowdCardHeader {...header}/>
        <CrowdCardContent {...content} />
        <CardFooter {...footer} />
      </div>
    </Paper>
  </div>
)

CrowdCard.propTypes = {
  votingResult: PropTypes.oneOf(["yes", "no", "inconclusive"]),
  header: PropTypes.object,
  content: PropTypes.object,
  footer: PropTypes.object,
};

CrowdCard.defaultProps = {
  votingResult: "inconclusive",
  header: {},
  content: {},
  footer: {},
};
