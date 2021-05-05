import React from "react";
import {Typography} from "./Typography";
import {blogPosts} from "../fixtures/blogs";

export const BlogSection = ({descriptionTop, title,}) => {
  return (
    <div className="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"/>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="">
          <Typography type="h2" Element="h2">{title}</Typography>
          <Typography type="body"> {descriptionTop}
          </Typography>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {blogPosts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt=""/>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <Typography type="caption">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </Typography>
                  <a href={post.href} className="block mt-2">
                    <Typography type="bodyStrong">{post.title}</Typography>
                    <p className="text-xl font-semibold text-gray-900"></p>
                    <Typography type="body">{post.description}</Typography>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt=""/>
                    </a>
                  </div>
                  <div className="ml-3">
                    <Typography type="bodyStrong" Element="p">
                      <a href={post.author.href} className="hover:underline">
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
