import React, {useEffect, useState} from "react";
import {InputAvatar} from "../forms/InputAvatar";
import {AdjustmentsIcon} from "@heroicons/react/solid";
import {IconButton} from "../IconButton";
import {allDaoData} from "../../fixtures/daos";
import {allMembers} from "../../fixtures/members";
import {allVotingTypes} from "../../fixtures/votingTypes";

export const Filter = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="flex flex-row space-x-2 visible">
      <InputAvatar className={[
        "invisible md:visible",
        !show ? "hidden" : " ",
      ].join(" ")} label={"Select DAO"} items={allDaoData} selectedItem={allDaoData[0]} dropDownShadow/>
      <InputAvatar className={[
        "invisible md:visible",
        !show ? "hidden" : " ",
      ].join(" ")} label={"Initiated by Anyone"} items={allMembers} selectedItem={allMembers[0]} dropDownShadow/>
      <InputAvatar className={[
        "invisible md:visible",
        !show ? "hidden" : " ",
      ].join(" ")}
                   label={"Open and Closed"} items={allVotingTypes} selectedItem={allVotingTypes[0]} dropDownShadow/>
      <IconButton onClick={() => setShow(!show)}>
        <AdjustmentsIcon className="mx-auto  h-5 w-5 "/>
      </IconButton>
    </div>
  )
}