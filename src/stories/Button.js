import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'bg-themeButtonBg' : 'bg-textError';
  return (
    <button
      type="button"
      className={['bg-primary', `storybook-button--${size}`, `font-body`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
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
  primary: PropTypes.bool,
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
  primary: false,
  size: 'medium',
  onClick: undefined,
  type: 'strandard'
};
