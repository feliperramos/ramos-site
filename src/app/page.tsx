import { draftMode } from "next/headers";
import { fetchBlogPosts } from "@/contentful/blogPost";
import Link from "next/link";

import AboutMeSection from "@/components/AboutMe";
import HeaderSection from "@/components/Header";
import ProjectsSection from "@/components/Projects";
import BlogSection from "@/components/Blog";

export default async function Home() {

  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled });

  return (
    <div className="font-mono">
      <HeaderSection />
      <AboutMeSection />
      <ProjectsSection />
      <BlogSection posts={blogPosts} />
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
      </main> */}
    </div>
  )
}
