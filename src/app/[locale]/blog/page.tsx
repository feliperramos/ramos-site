import { useLocale } from "next-intl";
import { draftMode } from "next/headers";
import { fetchBlogPosts } from "@/contentful/blogPost";
import { FooterSection, HeaderSection } from "@/components";
import { getTranslator } from "next-intl/server";
import { getFormattedDate } from "@/utils/getFormattedDate";
import RichText from "@/contentful/RichText";
import { getAvatarData } from "@/utils/getAvatarData";

async function BlogPostPage() {
  const locale = useLocale()
  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled, locale: locale });
  const t = await getTranslator(locale, 'blog');
  const { name, avatar, description } = getAvatarData;

  return (
    <>
      <HeaderSection />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900">
        <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white">{t('title')}</h2>
            <p className="mt-2 text-lg leading-8 text-gray-300">{t('description')}</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {blogPosts.map((item, index) => (
              <article key={index} className="p-6 bg-slate-700 rounded-lg border border-gray-700 shadow-md">
                <div className="flex justify-between items-center mb-5 text-sky-800">
                  <p className="text-gray-400 text-sm font-semibold">{getFormattedDate(item.publishDate)}</p>
                  <p className="relative z-10 rounded-full bg-gray-50 px-2 py-1 font-bold text-sky-800 hover:bg-gray-100">
                    {item.category}
                  </p>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img srcSet={item.image?.src} src={item.image?.src} alt="" className="rounded-3xl mb-2" />
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-sky-600 hover:text-sky-500">{item.title}</h2>
                <span className="mb-5 font-light text-gray-400 text-justify line-clamp-3"><RichText document={item.body} /></span>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-7 h-7 rounded-full" src={avatar} alt={name} />
                    <span className="font-medium text-white">
                      {name}
                    </span>
                  </div>
                  <a href={`/blog/${item.slug}`} className="inline-flex items-center font-medium text-sky-600 hover:text-sky-500">
                    {t('buttonReadMore')}{' '} <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}

export default BlogPostPage;
