import React, {useEffect, useState} from "react";
import {Modal} from "./Modal";
import {Button, LoginModal, MemberModal} from "../index";
import {CreateAccountModal} from "./templates/createAccount";
import {ConfirmTransactionModal} from "./templates/confirmTransaction";
import {ResultTransactionModal, transactionStates} from "./templates/resultTransaction";
import {CrowdCardContainer} from "../crowd/CrowdCardContainer";
import {categories, crowdFundStates, projectImages} from "../../shared/global.crowdfund";
import {BackProjectModal} from "./crowd/BackProjectModal";
import {ModalTemplate} from "./ModalTemplate";

export default {
  title: "Modals/Modal",
  component: Modal,
  argTypes: {backgroundColor: 'control'}
}

export const Playground = (args) => {
  const [open, setOpen] = useState(false)
  const onClose = () => {
    setOpen(false)
  }
  return <div>
    <Button onClick={() => setOpen(true)} label={"Open"}/>
    <Modal open={open} onClose={onClose} {...args}/>
  </div>
}

export const SignIn = (args) => {
  const [open, setOpen] = useState(false)
  const [passphrase, setPassphrase] = useState(null)

  const onClose = () => {
    setOpen(false)
  }

  return <div>
    <Button onClick={() => setOpen(true)} label={"Sign in"}/>
    <Modal
      open={open}
      onClose={onClose}
      ctaButton={{
        label: "Sign in",
        disabled: !passphrase || passphrase?.map(p => p.length > 0).filter(Boolean).length < 12,
        onClick: () => console.log(passphrase),
      }}><ModalTemplate>
      <LoginModal
        gotoSignup={() => null}
        changePassphrase={(e) => setPassphrase(e)}
      /></ModalTemplate>
    </Modal>
  </div>
}

export const SignUp = (args) => {
  const [open, setOpen] = useState(false)
  const [defaultAccount, changeAccount] = useState(null)
  const [username, setUsername] = useState(null)
  const [usernameError, setUsernameError] = useState(null)

  useEffect(() => {
    if (username) {
      if (username.length > 30) {
        setUsernameError("Username should be 30 characters or shorter")
        return;
      }
      if (username.length < 3) {
        setUsernameError("Username should be at least 3 characters long")
        return;
      }
      const usernameRegex = /^(?=.{3,30}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
      if (!username.match(usernameRegex)) {
        setUsernameError(<>Username only allowed [a-zA-Z0-9._] <br/>(do not start or end with _ or . nor use them
          double)</>)
        return;
      }
      setUsernameError(null)
    }
  }, [username])

  const onClose = () => {
    setOpen(false)
  }

  const accounts = [
    {
      passphrase: "focus gorilla hurdle burger toddler hurry large leg mimic suggest enforce spawn".split(" "),
      address: "638f61458434bf58962a6f30f91dd9da9c8c86ec",
    },
    {
      passphrase: "odor anchor theme robust auto sauce cinnamon aunt vote baby cupboard island".split(" "),
      address: "f05ab9093d1aca82bfdf8ba02fe08398323f7c6f",
    },
    {
      passphrase: "library tenant orchard apple trip know tank stairs fiscal much parent satoshi".split(" "),
      address: "7de99397c45402e25b38d94e0e46e78f3dfadf4f",
    },
  ]

  return <div>
    <Button onClick={() => setOpen(true)} label={"Sign up"}/>
    <Modal
      open={open}
      onClose={onClose}
      ctaButton={{
        label: "Sign Up",
        disabled: !!usernameError || !username,
        onClick: () => console.log("signup"),
      }}><ModalTemplate>
      <CreateAccountModal
        gotoLogin={() => console.log("goto login")}
        accounts={accounts}
        selectedAccount={defaultAccount}
        changeAccount={changeAccount}
        changeUsername={setUsername}
        username={username}
        usernameError={usernameError}
      /></ModalTemplate>
    </Modal>
  </div>
}

export const MemberDetails = () => {
  const [open, setOpen] = useState(false)
  const onClose = () => {
    setOpen(false)
  }
  return <div>
    <Button onClick={() => setOpen(true)} label={"Open"}/>
    <Modal
      open={open}
      onClose={onClose}
    ><ModalTemplate>
      <MemberModal
        noAccount
        address={"lsk123413466543"}
        name={"Tanya Fox"}
        daos={[
          {name: "Dao 1"},
          {name: "Dao 2"},
          {name: "Dao 3"},
          {name: "Dao 4"},
        ]}
      /></ModalTemplate>
    </Modal>
  </div>
}

export const ConfirmTransactions = () => {
  const [open, setOpen] = useState(false)
  const onClose = () => {
    setOpen(false)
  }
  return <div>
    <Button onClick={() => setOpen(true)} label={"Do Transaction"}/>
    <Modal
      open={open}
      onClose={onClose}

    ><ModalTemplate>
      <ConfirmTransactionModal
        address={"lsk123413466543"}
        name={"Tanya Fox"}
        transaction={{
          fee: "0.0023 LSK",
          type: "dao:create",
        }}
      /></ModalTemplate>
    </Modal>
  </div>
}
export const ResultTransactions = () => {
  const [open, setOpen] = useState(false)
  const [state, setState] = useState(transactionStates.pending)
  const [text, setText] = useState("Waiting for transaction to confirm, this can take upto 10 seconds to complete.")
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setText("Account does not exist.")
        setState(transactionStates.error)
        setTimeout(() => {
          setText("Transaction was successful accepted on the blockchain.")
          setState(transactionStates.confirmed)
        }, 2000)
      }, 2000)
    }
  }, [open])
  const onClose = () => {
    setOpen(false)
  }
  return <div>
    <Button onClick={() => setOpen(true)} label={"Do Transaction"}/>
    <Modal
      open={open}
      onClose={onClose}
      cancelLabel={"Close"}
    ><ModalTemplate iconCancel  onClose={onClose}>
      <ResultTransactionModal
        transactionId={"2422e2eceec75d2e2e6c641c326c1cad6fe616f0e7ba2d9c8cf35e720014e4c6"}
        state={state}
        text={text}
      /></ModalTemplate>
    </Modal>
  </div>
}


export const CrowdfundModalVote = () => {
  const [open, setOpen] = useState(false)
  const onClose = () => {
    setOpen(false)
  }
  return <div className="p-10">
    <Button onClick={() => setOpen(true)} label={"Vote"}/>
    <Modal
      open={open}
      onClose={onClose}
    >
      <BackProjectModal
        iconCancel
        vote/>
    </Modal>
  </div>
}


export const CrowdfundModalClaim = () => {
  const [open, setOpen] = useState(false)
  const onClose = () => {
    setOpen(false)
  }
  return <div className="p-10">
    <Button onClick={() => setOpen(true)} label={"Claim"}/>
    <Modal
      open={open}
      onClose={onClose}
    >
      <BackProjectModal iconCancel claim/>
    </Modal>
  </div>
}

export const CrowdfundModalCancel = () => {
  const [open, setOpen] = useState(false)
  const onClose = () => {
    setOpen(false)
  }
  return <div className="p-10">
    <Button onClick={() => setOpen(true)} label={"Cancel"}/>
    <Modal
      open={open}
      onClose={onClose}
    >
      <BackProjectModal cancel cancelLabel="cancel"
      />
    </Modal>
  </div>
}
