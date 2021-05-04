import React, {useState} from "react";
import {Button, FormElement, SimpleInput, Typography} from "../../index";
import {Passphrase} from "../../forms/Passphrase";

export const LoginModal = ({changePassphrase, gotoSignup}) => {

  return (
    <div>
      <div className="mt-3 text-center sm:mt-5 ">
        <Typography type="h1" Element="h1">
          Sign in!
        </Typography>
        <Typography type="body" Element="div" className={"mt-2"}>
          Use your passphrase to log in to your account.
        </Typography>
        <div className="w-full mx-auto">
          <Passphrase onChange={changePassphrase}/>
        </div>
      </div>
      <hr className={"mt-6"}/>
      <Typography className="w-full text-center mt-6" type="body" Element="div">
        Don't have an account yet?
        <a
        className="text-textLink hover:text-textHover hover:underline cursor-pointer"
        onClick={() => gotoSignup}>
          Sign up directly
        </a>.
      </Typography>
    </div>
  )
}