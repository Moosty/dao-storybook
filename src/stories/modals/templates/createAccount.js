import React, {useState} from "react";
import {Button, FormElement, SimpleInput, Typography} from "../../index";
import {Passphrase} from "../../forms/Passphrase";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

export const CreateAccountModal = ({
                                     accounts,
                                     selectedAccount,
                                     changeAccount,
                                     usernameError,
                                     changeUsername,
                                     username,
                                     gotoLogin
                                   }) => {
  const [copiedPhrase, setCopiedPhrase] = useState(false)

  return (
    <div>
      <div className="mt-3 text-center sm:mt-5 ">
        <Typography type="h1" Element="h1">
          Create an account!
        </Typography>
        <Typography type="body" Element="div" className={"mt-2"}>
          By creating an account on the Lisk dao Blockchain you will be able to create or participate in different
          DAO's.
        </Typography>
        <Typography className="text-textHeadings mt-6" type="bodyStrong" Element="div">
          Step 1. Choose your avatar!
        </Typography>
        <div className="flex flex-row justify-around space-x-2 mx-auto w-2/3 my-4  ">
          {accounts?.map(account => <img
            onClick={() => {
              setCopiedPhrase(false)
              changeAccount(account)
            }}
            className={[
              "h-10 w-10 rounded-full cursor-pointer",
              "hover:shadow-defaultPrimary",
              selectedAccount?.address === account.address && "ring-1 ring-formActive shadow-defaultPrimary",
            ].join(" ")}
            src={`https://avatar.moosty.com/${account.address}`}
            alt=""
          />)}
        </div>
        {selectedAccount && <div className="w-full mx-auto">
          <Passphrase
            readOnly
            defaultPassphrase={selectedAccount?.passphrase}
          />
          <div className="w-full mx-auto">
            <Typography className="text-textHeadings my-6" type="bodyStrong" Element="div">
              Step 2. Copy passphrase and save it at a secure location!
            </Typography>
            <div className="w-2/5 mx-auto">
              <CopyToClipboard text={selectedAccount?.passphrase?.join(" ")} onCopy={() => setCopiedPhrase(true)}>
                <Button secondary label="Copy Passphrase" size="small"/>
              </CopyToClipboard>
            </div>
          </div>
        </div>}

        {selectedAccount && copiedPhrase &&
        <Typography className="text-textHeadings my-6" type="bodyStrong" Element="div">
          Step 3. Choose your username!
        </Typography>}
      </div>
      {selectedAccount && copiedPhrase && <FormElement errorMessage={usernameError}>
        <SimpleInput placeholder="Username" value={username} onChange={(e) => changeUsername(e.target.value)}/>
      </FormElement>}
      <hr className={"mt-6"}/>
      <Typography className="w-full text-center mt-6" type="body" Element="div">
        Already an account? <a
        className="text-textLink hover:text-textHover hover:underline cursor-pointer"
        onClick={gotoLogin}>Log in directly</a>.
      </Typography>
    </div>
  )
}