import { TechnologiesProps } from "@/types";
import { useTranslations } from "next-intl";
import { SkillLevel } from "./SkillLevel";

type BadgeDegreeStatus = {
  status: string;
}

type BadgeTechnologiesProps = {
  technologies: TechnologiesProps[]
}

export const BadgeDegreeStatus = ({ status }: BadgeDegreeStatus) => {
  switch (status) {
    case 'Incompleta':
      return (
        <span className="w-24 text-center rounded-md bg-yellow-200 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
          {status}
        </span>
      );
    case 'Incompleted':
      return (
        <span className="w-24 text-center rounded-md bg-yellow-200 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
          {status}
        </span>
      );
    case 'In Progress':
      return (
        <span className="w-24 text-center rounded-md bg-green-200 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          {status}
        </span>
      );
    case 'Em Andamento':
      return (
        <span className="w-24 text-center rounded-md bg-green-200 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          {status}
        </span>
      );
    case 'Completa':
      return (
        <span className="w-24 text-center rounded-md bg-green-800 px-2 py-1 text-xs font-medium text-green-200 ring-1 ring-inset ring-green-600/20">
          {status}
        </span>
      );
    case 'Completed':
      return (
        <span className="w-24 text-center rounded-md bg-green-800 px-2 py-1 text-xs font-medium text-green-200 ring-1 ring-inset ring-green-600/20">
          {status}
        </span>
      );
    default:
      (
        <span className="w-24 text-center rounded-md bg-blue-200 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
          {status}
        </span>
      )
  }
}

export const BadgeTechnologies = ({ technologies }: BadgeTechnologiesProps) => {
  const t = useTranslations('resume');

  return technologies.map((item, index) => !item.skillLevel ? (
    <span key={index} className="my-1 sm:max-w-xs text-center rounded-md bg-gray-200 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
      {item.technology}
    </span>
  ) : (
    <div key={index} className="my-1 mx-1 sm:max-w-xl rounded-md bg-gray-200 px-4 py-3 text-base font-medium text-gray-600 ring-1 ring-inset ring-green-500/10">
      <b className="font-semibold">{`${t('skills.technology')}: `}</b>
      {item.technology} <br />
      <b className="font-semibold">{`${t('skills.skillLevel')}: `} <SkillLevel skillLevel={item.skillLevel} /></b>
      <b className="font-semibold">{`${t('skills.yearsOfExperience')}: `}</b>
      {item.yearsofExperience}
    </div>
  ))
}
