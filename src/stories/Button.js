import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import {Typography} from "./Typography";
import {fontStyles} from "../shared/styles";

/**
 * Primary UI component for user interaction
 */

const fontSizes = {
  large: "buttonL",
  medium: "buttonM",
  small: "buttonS",
}

const buttonSizes = {
  large: [fontStyles.buttonL ].join(" "),
  medium:  [fontStyles.buttonM].join(" "),
  small: [fontStyles.buttonS].join(" "),
}

export const Button = ({secondary, size, type, state, iconBefore, iconAfter, label, disabled, ...props}) => {
  const primaryClass = ['bg-themeButtonBg', 'hover:bg-themeHover', 'focus:bg-themePressed', 'text-themeButtonTextPrimary'].join(" ");
  const secondaryClass = ['bg-themeButtonBgSecondary', 'hover:text-themeHover', 'focus:text-themePressed', 'text-textLink'].join(" ");
  const disabledClass = [secondary ? 'bg-surfaceBg' :'bg-formDisabled', 'text-textDisabled'].join(" ");

  const buttonSize = buttonSizes[size || "medium"]

 return (

    <button
      disabled={disabled}
      className={[
        buttonSize,
        disabled ? disabledClass : secondary ? secondaryClass : primaryClass ,
        "rounded-md",
      ].join(" ")}
      {...props}
    >
      {label}
    </button>


  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  /**
   * What icon to use
   */
  iconBefore: PropTypes.func,
  iconAfter: PropTypes.func,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Button type default: 'standard'
   */
  type: PropTypes.string,
};

Button.defaultProps = {
  icon: null,
  secondary: false,
  disabled: false,
  size: 'medium',
  onClick: undefined,
  type: 'strandard'
};
