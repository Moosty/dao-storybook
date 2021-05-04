import React from "react";
import {Typography} from "./Typography";

/* This example requires Tailwind CSS v2.0+ */
const posts = [
  {
    title: 'High Level Overview of Interoperability',
    href: 'https://lisk.io/blog/research/high-level-overview-lisk-interoperability',
    category: {name: 'Research', href: '#'},
    description:
      'The blog post described different types of blockchain interoperability, ranging from cross-chain token exchange to general cross-chain messages. ',
    date: 'Mar 31, 2021',
    datetime: '2020-03-16',
    imageUrl:
      'https://lisk.io/sites/default/files/images/2021-03/high-level-overview-interoperability-MAIN%402x.png',
    readingTime: '13 min',
    author: {
      name: 'Andreas Kendziorra Ph.D',
      href: '#',
      imageUrl:
        'https://lisk.io/sites/default/files/styles/person_xs/public/pictures/2021-03/Andreas_thumb.jpg?itok=fUhuRZyu',
    },
  },
  {
    title: 'Building the Lisk Crowd Project\n',
    href: 'https://lisk.io/blog/apps/building-lisk-crowd-project',
    category: {name: 'Proof of concept', href: '#'},
    description:
      'Liskcrowd is a crowdfund platform where backers (investors) have more control over their donation. The fundraiser can allow periods of voting in which backers can cancel the project...',
    date: 'Sept 15, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://lisk.io/sites/default/files/images/2020-09/building-the-lisk-crowd-project-OG%402x.png',
    readingTime: '7 min',
    author: {
      name: 'Moosty',
      href: 'https://moosty.com/',
      imageUrl:
        'https://lisk.io/sites/default/files/styles/person_xs/public/pictures/2020-08/jurre.jpg?itok=kqP0cVAH',
    },
  },
  {
    title: 'Lisk Builders: Interview with Jurre Machielsen',
    href: '#',
    category: {name: 'Interview', href: '#'},
    description:
      'The “Lisk Builders interviews” is a short series of blog posts, each of them featuring one previous participant of the Lisk Builders program.',
    date: 'Mar 15, 2021',
    datetime: '2020-02-12',
    imageUrl:
      'https://lisk.io/sites/default/files/images/2021-03/interviews-placeholder-MAIN%402x.png',
    readingTime: '4 min',
    author: {
      name: 'Moosty',
      href: '#',
      imageUrl:
        'https://lisk.io/sites/default/files/styles/person_xs/public/pictures/2020-08/jurre.jpg?itok=kqP0cVAH',
    },
  },
]

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
          {posts.map((post) => (
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
