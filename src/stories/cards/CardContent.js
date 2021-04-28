import React from "react";
import PropTypes from "prop-types";

export const CardContent = ({children, className}) => (
  <div className={[
    className,
    "px-4",
    "flex-grow",
    "bg-cardBg",
    "w-full",
    "py-2",
  ].join(" ")}>
    {children}
  </div>
)

CardContent.propTypes = {
  className: PropTypes.string,
};

CardContent.defaultProps = {
  className: "",
};
