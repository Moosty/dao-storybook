import React from 'react';

export const Links = ({title, links}) => {
  return (<div className="my-2 w-full h-auto">
    <div className=" font-normal text-base uppercase mb-2">
      <b>{title}</b>
    </div>
    <ul className="list-reset leading-normal">
      {links && links.map(link => (
        <li className=" cursor-pointer  text-base ">
          <a
            href={link.to}
            variant="inherit"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: "white"}}
            className="hover:underline"
          >{link.label}</a>
        </li>
      ))}
    </ul>
  </div>);
}




export const Footer = () => {

  const items = {
    liskcrowd: [
      {label: "Read the blog", to: "https://lisk.io/blog/apps/building-lisk-crowd-project"},
      {label: "About the project team", to: "https://moosty.com"},
      {label: "Github", to: "https://github.com/Moosty/lisk-crowdfund"},
    ],
    lisk: [
      {label: "What is Lisk?", to: "https://lisk.io/what-is-lisk"},
      {label: "What is blockchain?", to: "https://lisk.io/what-is-blockchain"},
      {label: "Lisk SDK documentation", to: "https://lisk.io/documentation/lisk-sdk/index.html"},
      {label: "Join Lisk chat", to: "https://lisk.chat"},
    ],
    moosty: [
      {label: "About the team", to: "https://moosty.com/"},
      {label: "See projects", to: "https://moosty.com/lisk-ecosystem/"},
      {label: "Get in touch", to: "https://moosty.com/contact/"},
    ]
  }


  return (<div className={`w-full h-auto block text-white text-left`}>
    <div className="relative top-0 bottom-0 w-full h-full bg-themeNavBarBg">
      <div className="container w-10/12 mx-auto px-6">
        <div className="sm:flex py-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <Links title="liskcrowd" links={items.liskcrowd}/>
            </div>
            <div className="flex flex-col">
              <Links title="Lisk" links={items.lisk}/>
            </div>
            <div className="flex flex-col">
              <Links title="Moosty" links={items.moosty}/>
            </div>
            <div className="flex flex-col">
              <div className=" font-normal text-base mb-2 mt-4 uppercase ">
                <b>Socials</b>
              </div>
              <div className="w-full justify-center ">
                buttons
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-6">
      <div className=" border-gray-300 flex flex-col items-center">
        <div className="sm:w-2/3 text-center py-4">
          <p className="text-sm text-themeButtonBg font-bold mb-2">
            &copy;{new Date().getFullYear()} by <a href="https://moosty.com">MOOSTY</a>
          </p>
        </div>
      </div>
    </div>
  </div>);
};
