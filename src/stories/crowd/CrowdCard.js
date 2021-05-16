import React from "react";
import PropTypes from "prop-types";
import {CardHeader} from "../cards/CardHeader";
import {CardFooter} from "../cards/CardFooter";
import {CardContent} from "../cards/CardContent";
import {Paper} from "../Paper";
import {CrowdCardHeader} from "./CrowdCardHeader";
import {CrowdCardContent} from "./CrowdCardContent";

export const CrowdCard = ({header, content, footer, state}) => (<div className="flex">
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
        <CrowdCardContent state={state}/>
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
