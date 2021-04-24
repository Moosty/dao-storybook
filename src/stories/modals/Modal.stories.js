import React from "react";
import {Modal} from "./Modal";

export default {
  title: "Modals/Modal",
  component: Modal,
  argTypes: { backgroundColor: 'control'}
}

export const LogIn = (args) => <Modal {...args}/>

export const SignUp = () => <div>
  <Modal />
</div>