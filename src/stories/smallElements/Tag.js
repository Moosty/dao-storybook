import React from "react";
import PropTypes from "prop-types";

export const Tag = ({
                      className,
                      filled,
                      outline,
                      title,
                      rounded,
                      large,
                      success,
                      warning,
                      error,
                      info,
                      light,
                    }) => {

  return (
    <>
      <span className={["inline-flex items-center text-sm font-medium ",
        rounded ? "rounded-default" : " ",
        (success && filled) ? "bg-successIcon text-white" : (success && outline) ? "border-2 border-successIcon text-successIcon" :
          (error && filled) ? "bg-dangerIcon text-white" : (error && outline) ? "border-2 border-dangerIcon text-dangerIcon" :
            (warning && filled) ? "bg-warningIcon text-white" : (warning && outline) ? "border-2 border-warningIcon text-warningIcon" :
              (info && filled) ? "bg-infoIcon text-white" : (info && outline) ? "border-2 border-infoIcon text-infoIcon" :
                (info && light) ? "bg-infoLight text-infoIcon" :
                "bg-black text-white",
        large ? "px-3.5 py-0.5" : "px-2.5 py-0.3",
        className,
      ].join(" ")}>
        {title}
      </span>
    </>
  )
}

Tag.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  rounded: false,
};

Tag.defaultProps = {
  size: ' ',
  rounded: false,
}