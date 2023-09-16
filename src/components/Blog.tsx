'use client'
import RichText from "@/contentful/RichText";
import type { BlogPost } from "@/contentful/blogPost";
import { getFormattedDate } from "@/utils/getFormattedDate";
import { getAvatarData } from "@/utils/getAvatarData";
import { useLocale, useTranslations } from 'next-intl';

interface BlogSection {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSection) {
  const t = useTranslations('blog');
  const locale = useLocale();

  return (
    <div className="overflow-hidden bg-slate-900 py-20 sm:py-24">
      <div className="mx-auto max-w-7x1 px-12 lg:px-16">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-sky-800 sm:text-4xl">{t('title')}</h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">{t('description')}</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((item, index) => (
            <article key={index} className="my-3 mx-auto flex max-wl sm:flex-row items-start justify-between min-h-fit">
              <div className="max-w-sm min-h-fit">
                <div className="basis-2/6 my-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img srcSet={item.image?.src} src={item.image?.src} alt="" className="rounded-3xl" />
                </div>
                <div className="basis-4/6 mx-4 my-auto">
                  <div className="my-2 flex items-center gap-x-4 text-xs">
                    <p className="text-gray-500">{getFormattedDate(item.publishDate)}</p>
                    <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-bold text-sky-800 hover:bg-gray-100">
                      {item.category}
                    </p>
                  </div>
                  <div className="mx-auto flex justify-center content-center items-center gap-x-1">
                  </div>
                  <div className="group relative">
                    <a href={`/blog/${item.slug}`}>
                      <h3 className="mt-3 text-2xl font-bold leading-10 line-clamp-1 text-sky-800 hover:text-sky-700">
                        {item.title}
                      </h3>
                    </a>
                    <div className="mt-3 line-clamp-3 text-sm leading-6 text-gray-200 text-justify"><RichText document={item.body} /></div>
                  </div>
                  <div className="mt-2 flex justify-start items-start gap-x-4 text-xs">
                    <div className="relative mt-8 flex items-center gap-x-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img srcSet={getAvatarData.avatar} src={getAvatarData.avatar} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-400">
                          {getAvatarData.name}
                        </p>
                        <p>{getAvatarData.description}</p>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="mt-2 flex justify-start items-start gap-x-4 text-xs">
                  <a href={`/blog/${item.slug}`} className="font-semibold text-sky-800 text-base hover:text-sky-700">
                    {t('buttonReadMore')} <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </article>
          )).slice(0, 3)}
        </div>

        <div className="my-auto mt-10 flex flex-col max-w-2xl border-t border-gray-200 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
          <a href={`${locale}/blog`} className="font-semibold text-sky-800 text-xl hover:text-sky-700">
            {t('buttonSeeMorePosts')} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
