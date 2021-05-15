import React from 'react';
import {Tag} from "./smallElements/tag";

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

export const Footer = ({items, author}) => {

  return (<div className={`w-full h-auto block text-white text-left`}>
    <div className="relative top-0 bottom-0 w-full h-full bg-themeNavBarBg">
      <div className="container w-10/12 mx-auto px-6">
        <div className="sm:flex py-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            {items && Object.keys(items)?.map(
              title => <div className="flex flex-col">
                <Links title={title} links={items[title]}/>
              </div>
            )}
            <div className="flex flex-col">
              <div className=" font-normal text-base mb-2 mt-4 uppercase ">
                <b>Socials</b>
              </div>
              <div className="flex flex-row w-full justify-center space-x-2 text-white ">
                <a href="https://www.linkedin.com/company/moosty/" target="_blank"
                   rel="noopener noreferrer">
                  <svg className="cursor-pointer " xmlns="http://www.w3.org/2000/svg" fill="white" width="24"
                       height="24" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/MoostyTeam" target="_blank"
                   rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>

              </div>
              <div className="w-full justify-center text-white ">
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
            &copy;{new Date().getFullYear()} by <a target="_blank"
                                                   rel="noopener noreferrer" href={author?.url}>{author?.name}</a>
          </p>
        </div>
      </div>
    </div>
  </div>);
};
