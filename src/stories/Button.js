import React from 'react';
import PropTypes from 'prop-types';
import {fontStyles} from "../shared/styles";

const buttonSizes = {
  large: [fontStyles.buttonL].join(" "),
  medium: [fontStyles.buttonM].join(" "),
  small: [fontStyles.buttonS].join(" "),
}

export const Button = ({
                         rounded,
                         size,
                         iconBefore,
                         iconAfter,
                         icon,
                         label,
                         containerSide,
                         disabled,
                         className,
                         shadow,
                         secondary,
                         tertiary,
                         onClick,
                         ...props
                       }) => {
  const primaryClass = [
    'bg-themeButtonBg',
    'hover:bg-themeHover',
    'focus:bg-themePressed',
    'text-themeButtonTextPrimary',
  ].join(" ");
  const secondaryClass = [
    'bg-themeButtonBgSecondary',
    'border-surfaceOutline',
    'border',
    'hover:text-themeHover',
    'focus:text-themePressed',
    'text-textBody',
  ].join(" ");
  const disabledClass = [
    secondary ? 'bg-surfaceBg' : 'bg-formDisabled',
    'text-textDisabled',
  ].join(" ");
  const tertiaryClass = [
    'hover:text-themeHover',
    'hover:underline',
    'focus:text-themePressed',
    'text-textBody',
  ].join(" ");
  const buttonSize = buttonSizes[size || "medium"];

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
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  iconBefore: PropTypes.bool,
  iconAfter: PropTypes.bool,
  icon: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
  shadow: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  containerSide: PropTypes.string,
};

Button.defaultProps = {
  secondary: false,
  tertiary: false,
  iconBefore: true,
  iconAfter: false,
  icon: null,
  size: 'medium',
  label: "Button",
  onClick: () => null,
  rounded: true,
  shadow: true,
  disabled: false,
  className: "",
  containerSide: null,
};
