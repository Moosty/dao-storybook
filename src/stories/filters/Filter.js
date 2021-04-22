import React from "react";
import {InputAvatar} from "../forms/InputAvatar";
import {AdjustmentsIcon} from "@heroicons/react/solid";
import {IconButton} from "../IconButton";

export const Filter = () => {

    return(
        <div className="flex flex-row w-full">
            <InputAvatar className="mr-2"/>
            <InputAvatar className="mr-2"/>
            <InputAvatar className="mr-2"/>
            <IconButton>
                <AdjustmentsIcon className="mx-auto  h-5 w-5 "/></IconButton>
        </div>
    )
}