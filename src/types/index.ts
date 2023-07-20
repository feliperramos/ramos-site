export interface MockProps {
  personal: PersonalProps;
  intro: IntroductionProps;
  education: EducationProps;
  experiences: ExperienceLanguageProps;
  skils: TechnologiesProps[];
}

export interface PersonalProps {
  name: string;
  location: string;
  email: string;
  phone: string;
  age: number;
}

export interface IntroductionProps {
  description: {
    [key: string]: string;
  };
}

export interface EducationProps {
  [key: string]: EducationLanguageProps[];
}

export interface EducationLanguageProps {
  degree: string;
  college: string;
  startDate: string;
  endDate: string;
  status: string;
}

export interface ExperienceProps {
  [key: string]: ExperienceLanguageProps[];
}

export interface ExperienceLanguageProps {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: TechnologiesProps[];
}

export interface TechnologiesProps {
  technology: string;
  skillLevel?: string;
  yearsofExperience?: number;
}
