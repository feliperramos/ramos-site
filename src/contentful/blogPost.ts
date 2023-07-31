import { TypeBlogPostSkeleton } from "./types";
import { Entry } from "contentful";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import contentfulClient from "./contentfulClient";
import { ContentImage, parseContentfulContentImage } from "./contentImage";

type BlogPostEntry = Entry<TypeBlogPostSkeleton, undefined, string>;

export interface BlogPost {
  title: string;
  slug: string;
  body: RichTextDocument | null;
  image: ContentImage | null;
  publishDate: string | null;
  author: string | null;
  category: string | null;
  linkReference: string | null;
}

export function parseContentfulBlogPost(
  blogPostEntry?: BlogPostEntry
): BlogPost | null {
  if (!blogPostEntry) return null;

  return {
    title: blogPostEntry.fields.title || "",
    slug: blogPostEntry.fields.slug,
    body: blogPostEntry.fields.body || null,
    image: parseContentfulContentImage(blogPostEntry.fields.image),
    publishDate: blogPostEntry.fields.publishDate || null,
    author: blogPostEntry.fields.author || "",
    category: blogPostEntry.fields.category || "",
    linkReference: blogPostEntry.fields.linkReference || "",
  };
}

interface FetchBlogPostsOptions {
  preview: boolean;
  locale: string;
}

export async function fetchBlogPosts({
  preview,
  locale,
}: FetchBlogPostsOptions): Promise<BlogPost[]> {
  const contentful = contentfulClient({ preview });

  const blogPostResult = await contentful.getEntries<TypeBlogPostSkeleton>({
    content_type: "blogPost",
    include: 2,
    order: ["fields.publishDate"],
    locale,
  });

  return blogPostResult.items.map(
    (blogPostEntry) => parseContentfulBlogPost(blogPostEntry) as BlogPost
  );
}

interface FetchBlogPostOption {
  slug: string;
  preview: boolean;
  locale: string;
}

export async function fetchBlogPost({
  slug,
  preview,
  locale,
}: FetchBlogPostOption): Promise<BlogPost | null> {
  const contentful = contentfulClient({ preview });

  const blogPostResult = await contentful.getEntries<TypeBlogPostSkeleton>({
    content_type: "blogPost",
    "fields.slug": slug,
    include: 2,
    locale,
  });

  return parseContentfulBlogPost(blogPostResult.items[0]);
}
