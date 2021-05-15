import React from "react";
import {Typography} from "./Typography";

export const BlogSection = ({descriptionTop, title, blogPosts}) => {
  return (
    <div className="relative bg-white mt-4 pb-10 lg:pb-10">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"/>
      </div>
      <div className="relative  mx-auto">
        <div className="">
          <Typography type="h1" Element="h1">{title}</Typography>
          <Typography type="body"> {descriptionTop}
          </Typography>
        </div>
        <div className="mt-4 mx-auto grid gap-5 lg:grid-cols-3 ">
          {blogPosts && blogPosts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt=""/>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <Typography type="caption">
                    <a href={post.category.href} className="hover:underline"  target="_blank" rel="noopener noreferrer" >
                      {post.category.name}
                    </a>
                  </Typography>
                  <a href={post.href} target="_blank" rel="noopener noreferrer"  className="block mt-2">
                    <Typography type="bodyStrong" Element="h4">{post.title}</Typography>
                    <p className="text-xl font-semibold text-gray-900"></p>
                    <Typography type="body">{post.description}</Typography>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href} target="_blank" rel="noopener noreferrer" >
                      <span className="sr-only">{post.author.name}</span>
                      <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt=""/>
                    </a>
                  </div>
                  <div className="ml-3">
                    <Typography type="bodyStrong" Element="p">
                      <a href={post.author.href} className="hover:underline"  target="_blank" rel="noopener noreferrer" >
                        {post.author.name}
                      </a>
                    </Typography>
                    <div className="flex space-x-1 text-sm">
                      <Typography type="body" Element="p">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
