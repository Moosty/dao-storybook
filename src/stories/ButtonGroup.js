import React from "react";
import {Button} from "./Button";
import PropTypes from "prop-types";

export const ButtonGroup = ({buttons, className, onClick}) => (
  <span className={[
    "flex",
    "flex-row",
    className,
  ].join(" ")}>
  {buttons?.map((button, i) => <Button
    onClick={onClick}
    containerSide={i === 0 ? 'left' : i === buttons?.length - 1 ? 'right' : 'center'}
    {...button}
  />)}
</span>)

ButtonGroup.propTypes = {
  buttons: PropTypes.array,
  className: PropTypes.string,
};

ButtonGroup.defaultProps = {
  buttons: [],
  className: "",
};
