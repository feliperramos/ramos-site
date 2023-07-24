import { useContext } from "react";
import { draftMode } from "next/headers";
import { fetchBlogPosts } from "@/contentful/blogPost";

import AboutMeSection from "@/components/AboutMe";
import HeaderSection from "@/components/Header";
import ProjectsSection from "@/components/Projects";
import BlogSection from "@/components/Blog";
import FooterSection from "@/components/Footer";
import { LanguageContext } from "@/hooks/useBlogPost";

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
