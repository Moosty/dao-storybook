import React, {useState} from "react";
import {InputAvatar} from "../forms/InputAvatar";
import {AdjustmentsIcon} from "@heroicons/react/solid";
import {IconButton} from "../IconButton";

export const Filter = ({filters, defaultShow = true}) => {
  const [show, setShow] = useState(defaultShow);
  return (
    <div className={[
      "flex flex-row space-x-2",
      "invisible lg:visible",
    ].join(" ")}>
      {filters?.map(filter => <InputAvatar
        className={[
          "invisible",
          "lg:visible",
          !show ? "hidden" : "",
        ].join(" ")}
        label={filter.label}
        items={filter.items}
        onChange={filter.onChange}
        selectedItem={filter.selected}
        dropDownShadow
      />)}
      <IconButton onClick={() => setShow(!show)}>
        <AdjustmentsIcon className="mx-auto h-5 w-5 "/>
      </IconButton>
    </div>
  )
}