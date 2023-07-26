import { Metadata, ResolvingMetadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from 'next/navigation';
import { fetchBlogPost, fetchBlogPosts } from "@/contentful/blogPost";
import Link from "next/link";
import RichText from '@/contentful/RichText';
import { FooterSection, HeaderSection } from "@/components";

interface BlogPostPageParams {
  slug: string;
}

interface BlogPostPageProps {
  params: BlogPostPageParams;
}

export async function generateMetadata({ params }: BlogPostPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const blogPost = await fetchBlogPost({ slug: params.slug, preview: draftMode().isEnabled });

  if (!blogPost)
    return notFound();

  return {
    title: blogPost.title
  }
}

async function BlogPostPage({ params }: BlogPostPageProps) {
  const blogPost = await fetchBlogPost({ slug: params.slug, preview: draftMode().isEnabled });

  if (!blogPost)
    return notFound();

  return (
    <>
      <HeaderSection />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900">
        <Link href="/">← Posts</Link>
        <div className="prose mt-8 border-t pt-8">
          {blogPost.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={blogPost.image.src}
              srcSet={`${blogPost.image.src}`}
              alt={blogPost.image.alt}
            />
          )}
          <h1>{blogPost.title}</h1>
          <RichText document={blogPost.body} />
          <a href={blogPost.linkReference!}>Watch on Youtube</a>
        </div>

      </main>
      <FooterSection />
    </>
  );
}

export default BlogPostPage;
