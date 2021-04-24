import React from "react";
import {SimpleInput} from "./SimpleInput";
import {Typography} from "../Typography";

export const MultipleChoice = () => {

  return (
    <div>
      <div className="mb-2">
        <SimpleInput default placeholder={"default"}/>
      </div>
      <div className="mb-2">
        <SimpleInput default placeholder={"default"}/>
      </div>
      <div className="mb-2">
        <SimpleInput default placeholder={"default"}/>
      </div>
      <div className="ml-4 mt-4">
        <Typography type="bodyStrong" className="hover:underline cursor-pointer">
          + Add an option </Typography>
      </div>
    </div>
  )
}