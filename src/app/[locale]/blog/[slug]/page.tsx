import { Metadata, ResolvingMetadata } from "next";
import { useLocale } from "next-intl";
import { draftMode } from "next/headers";
import { notFound } from 'next/navigation';
import { fetchBlogPost } from "@/contentful/blogPost";
import Link from "next/link";
import RichText from '@/contentful/RichText';
import { FooterSection, HeaderSection } from "@/components";
import { getTranslator } from "next-intl/server";
import { getYoutubeVideoId } from "@/utils/getYoutubeVideoId";

interface BlogPostPageParams {
  slug: string;
}

interface BlogPostPageProps {
  params: BlogPostPageParams;
}

export async function generateMetadata({ params }: BlogPostPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale()
  const blogPost = await fetchBlogPost({ slug: params.slug, preview: draftMode().isEnabled, locale });
  if (!blogPost)
    return notFound();

  return {
    title: blogPost.title
  }
}

async function BlogPostPage({ params }: BlogPostPageProps) {
  const locale = useLocale()
  const blogPost = await fetchBlogPost({ slug: params.slug, preview: draftMode().isEnabled, locale });
  const t = await getTranslator(locale, 'blog');

  if (!blogPost)
    return notFound();

  return (
    <>
      <HeaderSection />
      <main className="flex min-h-screen flex-col justify-between p-8 lg:p-24 bg-slate-900">
        <Link href="/blog" className="text-left text-2xl font-extrabold text-cyan-600">← Posts</Link>
        <div className="prose mt-8 border-t pt-8 items-center">
          <h1 className="mb-8 text-center text-4xl font-black text-cyan-600">{blogPost.title}</h1>
          {blogPost.linkReference && <iframe
            className="mb-8 w-full lg:min-h-screen h-60"
            src={`https://www.youtube.com/embed/${getYoutubeVideoId(blogPost.linkReference)}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          >
          </iframe>}

          <p className="mb-2 text-gray-200 font-medium text-xl">{t('content.description')}</p>
          <span className="text-gray-300 font-normal text-lg text-justify"><RichText document={blogPost.body} /></span>

        </div>
      </main>
      <FooterSection />
    </>
  );
}

export default BlogPostPage;
