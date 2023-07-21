import { useTranslations } from "next-intl";
import { ExperienceLanguageProps } from "@/types";
import { BadgeTechnologies } from './Badges';

interface ExperienceItemProps {
  experience: ExperienceLanguageProps;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const t = useTranslations('resume');

  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      <li className="ml-6">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <span className="mt-1 text-xl leading-6 text-gray-500 sm:col-span-2 sm:mt-o">{`${experience.startDate} - ${experience.endDate}`}</span>
        <div className="divide-y divide-slate-900">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">{t('experience.company')}</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-o">{experience.company}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">{t('experience.role')}</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-o">{experience.role}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">{t('experience.description')}</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-o">{experience.description}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">{t('experience.companyLink')}</dt>
            <a className="mt-1 text-sm leading-6 text-gray-100 hover:text-cyan-400 sm:col-span-2 sm:mt-o" href={experience.companyLink} target="_blank">{experience.companyLink}</a>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">{t('experience.endDate')}</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-o">{experience.endDate}</dd>
          </div>
          <div className="px-4 py-6 grid grid-cols-1 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">{t('experience.technologies')}</dt>
            <BadgeTechnologies technologies={experience.technologies} />
          </div>
        </div>
      </li>
    </ol>
  )
}
