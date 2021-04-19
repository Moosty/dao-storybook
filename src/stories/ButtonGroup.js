import React from "react";
import {Button} from "./Button";

export const ButtonGroup = ({

                              buttons,
                            }) => {
  return (
    <span className="flex flex-row">
  {buttons?.map((button, i) => {
    let side = 'center'
    if (i === 0) {
      side = 'left'
    }
    if (i === buttons?.length - 1) {
      side = 'right'
    }
    return <Button containerSide={side} {...button} />
  })}

</span>
  )
}

