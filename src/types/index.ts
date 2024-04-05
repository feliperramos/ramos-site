export interface MockProps {
  personal: PersonalProps;
  intro: IntroductionProps;
  education: EducationProps;
  experiences: ExperienceProps;
  skills: TechnologiesProps[];
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
  companyLink: string;
}

export interface TechnologiesProps {
  technology: string;
  skillLevel?: string;
  yearsofExperience?: number;
}

export interface ServicesLanguageProps {
  [key: string]: ServicesProps[];
}

export interface ServicesProps {
  title: string;
  description: string;
  price: number | string;
  features: FeatureProps[];
  whatsappMessage: string;
  promotion?: boolean;
  devChoice?: boolean;
}

export interface FeatureProps {
  title: string;
  description: string;
}
