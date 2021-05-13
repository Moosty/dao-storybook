import React, {useState} from "react";
import {Modal} from "../Modal";
import {BackProjectModal} from "./BackProjectModal";

const crowdfundModalSwitcher = (args, children, vote, claim, onClickRegister, ...props) => {
  const [open, setOpen] = useState();

  const onClose = () => {
    setOpen(false)
  }

  return (<div>
      <Modal
        open={open}
        onClose={onClose}
      >
        {onClickRegister && <BackProjectModal registerStartDate/>}
        {/*<BackProjectModal claim/>*/}
        {/*<BackProjectModal vote/>*/}
        {/*<BackProjectModal cancel/>*/}
      </Modal>
      {children}
    </div>
  )
}