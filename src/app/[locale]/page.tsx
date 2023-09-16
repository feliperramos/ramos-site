import { useLocale } from "next-intl";
import { draftMode } from "next/headers";
import { fetchBlogPosts } from "@/contentful/blogPost";

import { HeaderSection, AboutMeSection, ProjectsSection, BlogSection, FooterSection } from "@/components";

export default async function Home() {
  const locale = useLocale();

  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled, locale: locale });

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
