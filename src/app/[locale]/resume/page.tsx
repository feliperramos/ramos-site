'use client';
import { useTranslations, useLocale } from "next-intl";
import { ResumeData } from "@/mock";
import { getAvatarData } from "@/utils/getAvatarData";
import HeaderSection from "@/components/Header";
import CollegeItem from "@/components/Resume/College";
import ExperienceItem from "@/components/Resume/Experiences";
import { BadgeTechnologies } from "@/components/Resume/Badges";
import FooterSection from "@/components/Footer";
import { Email, WhatsApp } from "@material-ui/icons";

export default function Resume() {
  const t = useTranslations('resume');
  const locale = useLocale();
  const { personal, intro, education, experiences, skills } = ResumeData;
  const { avatar } = getAvatarData;

  return (
    <div className="font-mono">
      <HeaderSection />
      <div className="mx-auto bg-slate-800 py-20 sm:py-24">
        <div className="flex flex-col items-center px-4 sm:px:0">
          <h3 className="my-6 text-5xl font-semibold">{t('title')}</h3>
          <p className="my-4 max-w-3xl text-center text-lg leading-6 text-gray-200">{t('description')}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="my-6 h-36 w-36 shadow-xl ring-1 ring-gray-800 rounded-full" srcSet={avatar} src={avatar} alt="" />
        </div>


        <div className="mt-6 mx-8 sm:mx-20 border-t border-gray-700">
          <p className="my-4 text-3xl font-semibold leading-7">{t('personal.title')}</p>
          <dl className="divide-y divide-slate-900">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-100">{t('personal.name')}</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-o">{personal.name}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-100">{t('personal.location')}</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-o">{personal.location}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-100">{t('personal.email')}</dt>
              <a href={`mailto:${personal.email}?subject=${t('title')}`} className="mt-1 text-sm leading-6 text-gray-100 hover:text-cyan-400 sm:col-span-2 sm:mt-o"><Email className="h-4 w-4" /></a>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-100">{t('personal.phone')}</dt>
              <a href={`https://wa.me/${personal.phone}`} target="_blank" className="mt-1 text-sm leading-6 text-gray-100 hover:text-green-500 sm:col-span-2 sm:mt-o"><WhatsApp className="h-4 w-4" /></a>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-100">{t('personal.age')}</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-o">{personal.age}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-6 mx-8 sm:mx-20 border-t border-gray-700">
          <p className="my-4 text-3xl font-semibold leading-7">{t('intro.title')}</p>

          <dl className="divide-y divide-slate-900">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-100">{t('intro.title')}</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-o">{intro.description[locale]}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-6 mx-8 sm:mx-20 border-t border-gray-700">
          <p className="my-4 text-3xl font-semibold leading-7">{t('education.title')}</p>
          {education[locale].map((item, index) => (
            <CollegeItem key={index} education={item} />
          ))}
        </div>

        <div className="mt-6 mx-8 sm:mx-20 border-t border-gray-700">
          <p className="my-4 text-3xl font-semibold leading-7">{t('experience.title')}</p>
          {experiences[locale].map((item, index) => (
            <ExperienceItem key={index} experience={item} />
          ))}
        </div>

        <div className="mt-6 mx-8 sm:mx-20 border-t border-gray-700">
          <p className="my-4 text-3xl font-semibold leading-7">{t('skills.title')}</p>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <BadgeTechnologies technologies={skills} />
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
