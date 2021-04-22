import React from "react";
import {InputAvatar} from "../forms/InputAvatar";
import {AdjustmentsIcon} from "@heroicons/react/solid";

export const Filter = () => {

    return(
        <div className="flex flex-row w-full">
            <InputAvatar className="mr-2"/>
            <InputAvatar className="mr-2"/>
            <InputAvatar className="mr-2"/>
            <AdjustmentsIcon className="mt-2 mr-1 ml-2 h-5 w-5 text-textBody"/>
        </div>
    )
}