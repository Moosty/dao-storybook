import React from "react";
import {InputAvatar} from "../forms/InputAvatar";
import {AdjustmentsIcon} from "@heroicons/react/solid";
import {IconButton} from "../IconButton";
import {allDaoData} from "../../fixtures/daos";
import {allMembers} from "../../fixtures/members";
import {allVotingTypes} from "../../fixtures/votingTypes";

export const Filter = () => {

  return (
    <div className="flex flex-row w-full space-x-2">
      <InputAvatar label={"Select DAO"} items={allDaoData} selectedItem={allDaoData[3]}/>
      <InputAvatar label={"Initiated by Anyone"} items={allMembers} selectedItem={allMembers[0]}/>
      <InputAvatar label={"Open and Closed"} items={allVotingTypes} placeholder="testing" />
      <IconButton>
        <AdjustmentsIcon className="mx-auto  h-5 w-5 "/>
      </IconButton>
    </div>
  )
}