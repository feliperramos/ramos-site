'use client';

import RichText from "@/contentful/RichText";
import type { BlogPost } from "@/contentful/blogPost";
import { getFormattedDate } from "@/utils/getFormattedDate";

interface BlogSection {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSection) {
  return (
    <div className="overflow-hidden bg-slate-900 py-20 sm:py-24">
      <div className="mx-auto max-w-7x1 px-12 lg:px-16">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-sky-800 sm:text-4xl">blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">New features, projects, videos in youtube channel and hobbies</p>
        </div>
        <div className="my-auto mt-10 flex flex-row max-w-4xl border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((item, index) => (
            <article key={index} className="flex max-wl flex-col items-start justify-between">
              <div className="my-2 flex items-center gap-x-4 text-xs">
                <p className="text-gray-500">{getFormattedDate(item.publishDate)}</p>
                <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-bold text-sky-800 hover:bg-gray-100">
                  {item.category}
                </p>
              </div>
              <div className="mx-auto flex justify-center content-center items-center gap-x-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img srcSet={item.image?.src} src={item.image?.src} alt="" className="rounded-3xl" />
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-2xl font-bold leading-6 text-gray-100">
                  {item.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-200 text-justify"><RichText document={item.body} /></p>
              </div>
              <div className="mt-5 flex justify-around items-center content-between gap-x-4 text-xs">
                <a href={`/blog/${item.slug}`} className="font-semibold text-slate-800 text-base hover:text-black">
                  read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </article>
          )).slice(0, 3)}
        </div>
      </div>
    </div>
  );
}
