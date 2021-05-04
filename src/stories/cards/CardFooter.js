import React from "react";
import PropTypes from "prop-types";

export const CardFooter = ({left, className, right, bgColor, center}) => (
  <div className={[
    "flex flex-end flex-row",
    "justify-between items-center",
    "rounded-default",
    "w-full h-10",
    `bg-${bgColor}`,
    className,
  ].join(" ")
  }>
    {left && <div className="pl-4 items-center sm:pl-6 w-auto">{left}</div>}
    {center && <div className="pl-4 items-center sm:pl-6 w-full">{center}</div>}

    {right && <div className="flex-end justify-end w-auto">{right}</div>}
  </div>
)

CardFooter.propTypes = {
  className: PropTypes.string,
  left: PropTypes.func,
  right: PropTypes.func,
  bgColor: PropTypes.oneOf(["surfaceBg", "surfaceIconBg"]),
};

CardFooter.defaultProps = {
  className: "",
  bgColor: "surfaceBg"
};