import React from "react";
import {Modal} from "./Modal";
import {Typography} from "../Typography";

export default {
  title: "Modals/Modal",
  component: Modal,
  argTypes: {backgroundColor: 'control'}
}

export const Template = (args) => <Modal {...args}/>

export const LogIn = () => <div>
  <Modal loggedOut title="Log in"
         description="Use your passphrase to log in to your account."/>
</div>


export const SignUp = () => <div>
  <Modal noAccount title="Create an account!"
         description="By creating an account on the Lisk dao Blockchain you will be able to create or participate in
                      different DAO's."
  />
</div>