import React from "react";
import {fontStyles} from "../shared/styles";

export const Typography = ({children, type, className, Element = 'p'}) => {
  return <Element className={[fontStyles[type || 'body'], className].join(" ")}>{children}</Element>
}