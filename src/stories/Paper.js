import React from "react";
import PropTypes from "prop-types";

export const Paper = ({className, children}) => (
  <div className={[
    className,
    "flex",
    "flex-row",
    "bg-cardBg",
    "shadow-defaultPrimary",
    "overflow-hidden",
    "rounded-default",
    "divide-y",
  ].join(" ")}>
    {children}
  </div>
)

Paper.propTypes = {
  className: PropTypes.string,
};

Paper.defaultProps = {
  className: "",
};
