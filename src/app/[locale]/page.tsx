import { useContext } from "react";
import { draftMode } from "next/headers";
import { fetchBlogPosts } from "@/contentful/blogPost";

import { LanguageContext } from "@/hooks/useBlogPost";
import { HeaderSection, AboutMeSection, ProjectsSection, BlogSection, FooterSection } from "@/components";

export default async function Home() {
  const { locale } = useContext(LanguageContext);

  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled, locale });

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
