'use client';
import HeaderSection from "@/components/Header";
import { useTranslations, useLocale } from "next-intl";
import { ResumeData } from "@/mock/resume";
import { getAvatarData } from "@/utils/getAvatarData";

export default function Resume() {
  const t = useTranslations('resume');
  const locale = useLocale();
  const { personal, intro, education } = ResumeData;
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
              <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-o">{personal.email}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-100">{t('personal.phone')}</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-o">{personal.phone}</dd>
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

          <dl className="divide-y divide-slate-900">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-100">{t('education.title')}</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-o"></dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
