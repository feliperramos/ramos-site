import { draftMode } from "next/headers";
import { fetchBlogPosts } from "@/contentful/blogPost";
import Link from "next/link";

import AboutMeSection from "@/components/AboutMe";
import HeaderSection from "@/components/Header";

export default async function Home() {

  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled });

  return (
    <>
      <HeaderSection />
      <AboutMeSection />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="prose">
          <h1>Blog Post</h1>

          <ul>
            {blogPosts.map((blogPost) => {
              return (
                <li key={blogPost.slug}>
                  <Link href={`/${blogPost.slug}`}>{blogPost.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </main>
    </>
  )
}
