import React from "react";
import {Footer} from "./Footer";

export default {
  title: "Elements/Footer",
  component: Footer,
}

const author = {
  name: "KALIPO TEAM",
  url: "https://moosty.com"
}

const items = {
  kalipo: [
    {label: "Read the blog", to: "https://lisk.io/blog/apps/building-lisk-crowd-project"},
    {label: "About the project team", to: "https://moosty.com"},
    {label: "Github", to: "https://github.com/Moosty/lisk-crowdfund"},
  ],
  lisk: [
    {label: "What is Lisk?", to: "https://lisk.io/what-is-lisk", newTag: true,},
    {label: "What is blockchain?", to: "https://lisk.io/what-is-blockchain"},
    {label: "Lisk SDK documentation", to: "https://lisk.io/documentation/lisk-sdk/index.html"},
    {label: "Join Lisk chat", to: "https://lisk.chat", newTag: true},
  ],
  "Kalipo Team": [
    {label: "About the team", to: "https://moosty.com/"},
    {label: "See projects", to: "https://moosty.com/lisk-ecosystem/"},
    {label: "Get in touch", to: "https://moosty.com/contact/"},
  ]
}

export const Playground = (args) => <Footer {...args} />

Playground.args = {items, author}

export const all = () => {

  return (
    <div>
      <Footer items={items} author={author} ></Footer>
    </div>
  )
}

