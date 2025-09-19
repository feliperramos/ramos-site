'use client';
import { useTranslations } from 'next-intl';
import type { Project } from "@/contentful/projects";
import { useMemo } from 'react';
import Link from 'next/link';

interface ProjectSection {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectSection) {
  const t = useTranslations('projects');

  const pinnedPA: Project = useMemo(
    () => ({
      projectName: 'PuzzleArena',
      description:
        t('puzzlearena.description'),
      technology: 'React Native',
      logo: { src: '/images/puzzlearena/hero.png' } as any,
      url: '/puzzlearena',
    }),
    []
  );

  const merged = useMemo(() => {
    const isSame = (p: Project) =>
      p.projectName?.toLowerCase() === pinnedPA.projectName.toLowerCase() ||
      (p.url || '').replace(/\/$/, '') === pinnedPA.url;

    return [pinnedPA, ...projects.filter((p) => !isSame(p))];
  }, [projects, pinnedPA]);

  return (
    <div className="bg-sky-900 py-20 sm:py-24">
      <div className="mx-4 max-w-7x1 px-12 lg:px-16">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('title')}</h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">{t('description')}</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {merged.map((item, index) => {
            const isInternal = item.url?.startsWith('/');
            const CardLink = isInternal ? Link : ('a' as any);
            const linkProps = isInternal
              ? { href: item.url }
              : { href: item.url, target: '_blank', rel: 'noopener noreferrer' };

            const toAbs = (u?: string) =>
              u?.startsWith('//') ? `https:${u}` : (u ?? '/images/placeholder-wide.png');

            const src = toAbs(item.logo?.src);

            return (
              <article key={index} className="flex max-wl flex-col items-start justify-between">

                <div className="grid place-items-center w-full aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img srcSet={src} src={src} alt="" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-2xl font-bold leading-6 text-gray-100">
                    {item.projectName}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-200 text-justify">{item.description}</p>
                </div>
                <div className="mt-5 flex justify-around items-center content-between gap-x-4 text-xs">
                  <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-bold text-sm text-sky-800 hover:bg-gray-100">
                    {item.technology}
                  </p>
                  <CardLink
                    {...linkProps}
                    className="font-semibold text-slate-200 hover:text-white"
                  >
                    {t('button')} <span aria-hidden="true">→</span>
                  </CardLink>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  );
}
