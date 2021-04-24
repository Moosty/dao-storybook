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
  large: [fontStyles.buttonL].join(" "),
  medium: [fontStyles.buttonM].join(" "),
  small: [fontStyles.buttonS].join(" "),
}

export const Button = ({
                         secondary,
                         rounded = true,
                         size,
                         type,
                         state,
                         iconBefore,
                         icon,
                         iconAfter,
                         label,
                         buttonGroup,
                         containerSide,
                         disabled,
                         className,
                         shadow,
                         tertiary,
                         onClick,
                         ...props
                       }) => {
  const primaryClass = ['bg-themeButtonBg', 'hover:bg-themeHover', 'focus:bg-themePressed', 'shadow-defaultPrimary', 'text-themeButtonTextPrimary'].join(" ");
  const secondaryClass = ['', 'bg-themeButtonBgSecondary', 'border-surfaceOutline', 'border', 'hover:text-themeHover', 'focus:text-themePressed', 'text-textBody'].join(" ");
  const disabledClass = [secondary ? 'bg-surfaceBg' : 'bg-formDisabled', 'text-textDisabled'].join(" ");
  const tertiaryClass = ['', 'hover:text-themeHover', "hover:underline", 'focus:text-themePressed', 'text-textBody'].join(" ");


  const buttonSize = buttonSizes[size || "medium"]
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={[
        "m-0 flex flex-row justify-around",
        buttonSize,
        disabled ? disabledClass : tertiary ? tertiaryClass : secondary ? secondaryClass : primaryClass,

        rounded && !containerSide && "rounded-default",
        containerSide === "left" && "rounded-l-default",
        containerSide === "right" && "rounded-r-default ",
        containerSide && containerSide !== "right" && "border-r-3 border-white",
        shadow ? 'shadow-defaultPrimary' : " ",
        className,
      ].join(" ")}
      {...props}
    >
      {!iconAfter && icon}

      {label}
      {iconAfter && icon}

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
  onClick: () => null,
  type: 'strandard',
};
