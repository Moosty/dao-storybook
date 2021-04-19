import React from "react";
import {Button} from "./Button";

export const ButtonGroup = ({
                              label,
                              disabled,
                              buttonSize,
                              disabledClass,
                              secondary,
                              secondaryClass,
                              primaryClass,
                              props,
                            }) => {
return (
  <span className="flex flex-row">
  <Button/>
    <Button/>

</span>
)
}


