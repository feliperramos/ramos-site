import { useTranslations } from "next-intl";

import { EducationLanguageProps } from '@/types';
import { BadgeDegreeStatus } from "./Badges";

type CollegeItem = {
  education: EducationLanguageProps;
}

export default function CollegeItem({ education }: CollegeItem) {

  const t = useTranslations('resume');
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      <li className="ml-6">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <span className="mt-1 text-xl leading-6 text-gray-500 sm:col-span-2 sm:mt-o">{`${education.startDate} - ${education.endDate}`}</span>
        <dl className="divide-y divide-slate-900">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">{t('education.degree')}</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-o">{education.degree}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">{t('education.college')}</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-o">{education.college}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">{t('education.status')}</dt>
            <BadgeDegreeStatus status={education.status} />
          </div>
        </dl>
      </li>
    </ol>
  )
}
