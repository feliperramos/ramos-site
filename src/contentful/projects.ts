import { TypeProjectsSkeleton } from "./types";
import { Entry } from "contentful";
import contentfulClient from "./contentfulClient";
import { ContentImage, parseContentfulContentImage } from "./contentImage";

type ProjectEntry = Entry<TypeProjectsSkeleton, undefined, string>;

export interface Project {
  projectName: string;
  description: string;
  technology: string;
  logo: ContentImage | null;
  url: string;
}

export function parseContentfulProject(
  projectEntry?: ProjectEntry
): Project | null {
  if (!projectEntry) return null;

  return {
    projectName: projectEntry.fields.projectName || "",
    description: projectEntry.fields.description,
    technology: projectEntry.fields.technology || "",
    logo: parseContentfulContentImage(projectEntry.fields.logo),
    url: projectEntry.fields.url,
  };
}

interface FetchProjectsOptions {
  preview: boolean;
  locale: string;
}

export async function fetchProjects({
  preview,
  locale,
}: FetchProjectsOptions): Promise<Project[]> {
  const contentful = contentfulClient({ preview });

  const projectsResult = await contentful.getEntries<TypeProjectsSkeleton>({
    content_type: "ramosSite",
    include: 2,
    locale,
  });

  return projectsResult.items.map(
    (projectEntry) => parseContentfulProject(projectEntry) as Project
  );
}
