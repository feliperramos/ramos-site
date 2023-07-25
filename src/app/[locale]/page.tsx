import { draftMode } from "next/headers";
import { fetchBlogPosts } from "@/contentful/blogPost";

import { HeaderSection, AboutMeSection, ProjectsSection, BlogSection, FooterSection } from "@/components";

export default async function Home() {

  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled });

  return (
    <div className="font-mono">
      <HeaderSection />
      <AboutMeSection />
      <ProjectsSection />
      <BlogSection posts={blogPosts} />
      <FooterSection />
    </div>
  )
}
