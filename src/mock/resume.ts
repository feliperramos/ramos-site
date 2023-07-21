import { WHATSAPP_PHONE_LINK, EMAIL } from "@/constants";
import { MockProps } from "@/types";

export const ResumeData: MockProps = {
  personal: {
    name: "Felipe Ramos",
    location: "Sorocaba/SP - Brasil",
    email: EMAIL,
    phone: WHATSAPP_PHONE_LINK,
    age: 26,
  },
  intro: {
    description: {
      pt: "Estou sempre buscando aprimorar meus conhecimentos, já trabalhei com banco de dados e tecnologias como Delphi, C#, React e sou apaixonado por Javascript/Typescript. Estou procurando aprofundar meus conhecimentos em desenvolvimento back-end e front-end para expandir minhas habilidades.",
      en: "I am always seeking to improve my knowledge, having worked with databases and technologies such as Delphi, C#, React, and I am passionate about JavaScript/TypeScript. I am looking to further my expertise in back-end and front-end development to expand my skills.",
    },
  },
  education: {
    pt: [
      {
        degree: "Análise e Desenvolvimento de Sistemas",
        college: "Universidade de Sorocaba",
        startDate: "02/2022",
        endDate: "11/2023",
        status: "Em Andamento",
      },
      {
        degree: "Bacharel em Ciência da Computação",
        college: "Universidade de Sorocaba",
        startDate: "02/2015",
        endDate: "11/2020",
        status: "Incompleta",
      },
    ],
    en: [
      {
        degree: "Analysis and Systems Development",
        college: "Sorocaba University",
        startDate: "2022/02",
        endDate: "2023/11",
        status: "In Progress",
      },
      {
        degree: "Bachelor of Computer Science",
        college: "Sorocaba University",
        startDate: "2015/02",
        endDate: "2020/11",
        status: "Incompleted",
      },
    ],
  },
  experiences: {
    // I need this comment, because the typing error in experiences don't work well like education. the two types has the same logic.
    // @ts-ignore
    pt: [
      {
        company: "ACCT Global / Quality Digital",
        role: "Desenvolvedor FrontEnd Pleno",
        startDate: "06/2021",
        endDate: "06/2023",
        description:
          "Foco em e-commerce, na Quality tive a oportunidade de trabalhar em projetos grandes com tecnologias como Vtex Legacy, Vtex IO, FastStore, Gatsby, React Native, Reactjs, TypeScript, Javascript, GraphQL.",
        technologies: [
          { technology: "React.js" },
          { technology: "React Native" },
          { technology: "TypeScript" },
          { technology: "Node.js" },
          { technology: "JavaScript" },
          { technology: "Desenvolvimento de FrontEnd" },
          { technology: "GraphQL" },
          { technology: "REST API" },
          { technology: "CSS-in-JS" },
          { technology: "styled-components" },
          { technology: "GitLab" },
          { technology: "GitHub" },
          { technology: "CSS" },
          { technology: "Sass" },
          { technology: "jQuery" },
          { technology: "Metodologias Agile" },
          { technology: "Kanban" },
          { technology: "Scrum" },
          { technology: "Vtex Legacy (CMS)" },
          { technology: "Vtex IO" },
          { technology: "Git" },
          { technology: "Gatsby" },
        ],
        companyLink: "https://www.qualitydigital.com.br/",
      },
      {
        company: "Pedido Pago",
        role: "Desenvolvedor FrontEnd",
        startDate: "06/2020",
        endDate: "10/2020",
        description:
          "Desenvolvimento da plataforma web em ReactJS com Bootstrap e posteriormente styled-components e consumo de REST APIs.",
        technologies: [
          { technology: "React.js" },
          { technology: "JavaScript" },
          { technology: "Desenvolvimento de FrontEnd" },
          { technology: "REST API" },
          { technology: "GitHub" },
          { technology: "CSS-in-JS" },
          { technology: "styled-components" },
          { technology: "Bootstrap" },
          { technology: "CSS" },
          { technology: "Metodologias Agile" },
          { technology: "Scrum" },
          { technology: "Git" },
        ],
        companyLink: "https://pedidopago.com.br/",
      },
      {
        company: "Mega Sistemas Corporativos",
        role: "Desenvolvedor Junior",
        startDate: "04/2018",
        endDate: "10/2019",
        description:
          "Desenvolvimento de rotinas em PL/SQL, desenvolvimento de novas funcionalidades dentro do ERP Mega, incluindo telas, rotinas via banco e webservices. Integrações REST e SOAP, consumo de APIs, e desenvolvimento de customizações utilizando tecnologias como ReactJS, NodeJS, C#, Asp.Net e Delphi.",
        technologies: [
          { technology: "React.js" },
          { technology: "JavaScript" },
          { technology: "Material UI" },
          { technology: "Node.js" },
          { technology: "Desenvolvimento de FrontEnd" },
          { technology: "Delphi" },
          { technology: "VBScript" },
          { technology: "C#" },
          { technology: "ASP.NET" },
          { technology: "PL/SQL" },
          { technology: "SQL" },
          { technology: "Banco de Dados Oracle" },
          { technology: "Git" },
          { technology: "CSS" },
          { technology: "ERP" },
        ],
        companyLink: "https://www.mega.com.br/",
      },
      {
        company: "Unimed Sorocaba",
        role: "Estagiário de Desenvolvimento",
        startDate: "01/2017",
        endDate: "04/2018",
        description:
          "Desenvolvimento de Relatórios em Oracle, criação de painéis estatísticos usando HTML5 e CSS3. Páginas com Asp.Net para intranet.",
        technologies: [
          { technology: "JavaScript" },
          { technology: "C#" },
          { technology: "ASP.NET" },
          { technology: "PL/SQL" },
          { technology: "SQL" },
          { technology: "Banco de Dados Oracle" },
          { technology: "Desenvolvimento de FrontEnd" },
          { technology: "HTML5" },
          { technology: "CSS3" },
        ],
        companyLink: "https://www.unimedsorocaba.coop.br/",
      },
    ],
    en: [
      {
        company: "ACCT Global / Quality Digital",
        role: "FrontEnd Mid-Level Developer",
        startDate: "06/2021",
        endDate: "06/2023",
        description:
          "Focus on e-commerce, at Quality I had the opportunity to work on large projects with technologies like Vtex Legacy, Vtex IO, FastStore, Gatsby, React Native, Reactjs, TypeScript, Javascript and GraphQL.",
        technologies: [
          { technology: "React.js" },
          { technology: "React Native" },
          { technology: "TypeScript" },
          { technology: "Node.js" },
          { technology: "JavaScript" },
          { technology: "FrontEnd Development" },
          { technology: "GraphQL" },
          { technology: "REST API" },
          { technology: "CSS-in-JS" },
          { technology: "styled-components" },
          { technology: "GitLab" },
          { technology: "GitHub" },
          { technology: "CSS" },
          { technology: "Sass" },
          { technology: "jQuery" },
          { technology: "Agile Metodology" },
          { technology: "Kanban" },
          { technology: "Scrum" },
          { technology: "Vtex Legacy (CMS)" },
          { technology: "Vtex IO" },
          { technology: "Git" },
          { technology: "Gatsby" },
        ],
        companyLink: "https://qualitydigital.global",
      },
      {
        company: "Pedido Pago",
        role: "FrontEnd Developer",
        startDate: "06/2020",
        endDate: "10/2020",
        description:
          "Development of the web platform in ReactJS with Bootstrap and later styled-components and REST APIs integration.",
        technologies: [
          { technology: "React.js" },
          { technology: "JavaScript" },
          { technology: "FrontEnd Development" },
          { technology: "REST API" },
          { technology: "GitHub" },
          { technology: "CSS-in-JS" },
          { technology: "styled-components" },
          { technology: "Bootstrap" },
          { technology: "CSS" },
          { technology: "Agile Metodology" },
          { technology: "Scrum" },
          { technology: "Git" },
        ],
        companyLink: "https://pedidopago.com.br/",
      },
      {
        company: "Mega Sistemas Corporativos",
        role: "Entry-Level Developer",
        startDate: "04/2018",
        endDate: "10/2019",
        description:
          "Development of routines in PL/SQL, development of new functionalities within ERP Mega, including screens, routines via database and webservices. REST and SOAP integrations, consumption of APIs, and development of customizations using technologies such as ReactJS, NodeJS, C#, Asp.Net and Delphi.",
        technologies: [
          { technology: "React.js" },
          { technology: "JavaScript" },
          { technology: "Material UI" },
          { technology: "Node.js" },
          { technology: "FrontEnd Development" },
          { technology: "Delphi" },
          { technology: "VBScript" },
          { technology: "C#" },
          { technology: "ASP.NET" },
          { technology: "PL/SQL" },
          { technology: "SQL" },
          { technology: "Oracle Database" },
          { technology: "Git" },
          { technology: "CSS" },
          { technology: "ERP" },
        ],
        companyLink: "https://www.mega.com.br/",
      },
      {
        company: "Unimed Sorocaba",
        role: "Intern",
        startDate: "01/2017",
        endDate: "04/2018",
        description:
          "Development of Reports in Oracle, creation of statistical panels using HTML5 and CSS3. Pages with Asp.Net for intranet.",
        technologies: [
          { technology: "JavaScript" },
          { technology: "C#" },
          { technology: "ASP.NET" },
          { technology: "PL/SQL" },
          { technology: "SQL" },
          { technology: "Oracle Database" },
          { technology: "FrontEnd Development" },
          { technology: "HTML5" },
          { technology: "CSS3" },
        ],
        companyLink: "https://www.unimedsorocaba.coop.br/",
      },
    ],
  },
  skills: [
    { technology: "React.js", skillLevel: "Expert", yearsofExperience: 5 },
    {
      technology: "React Native",
      skillLevel: "Advanced",
      yearsofExperience: 3,
    },
    { technology: "NextJs", skillLevel: "Intermediary", yearsofExperience: 1 },
    { technology: "Node.js", skillLevel: "Advanced", yearsofExperience: 3 },
    { technology: "JavaScript", skillLevel: "Expert", yearsofExperience: 6 },
    { technology: "TypeScript", skillLevel: "Advanced", yearsofExperience: 3 },
    { technology: "GraphQL", skillLevel: "Intermediary", yearsofExperience: 2 },
    { technology: "MongoDB", skillLevel: "Intermediary", yearsofExperience: 3 },
    { technology: "NoSQL", skillLevel: "Intermediary", yearsofExperience: 3 },
    { technology: "REST API", skillLevel: "Advanced", yearsofExperience: 4 },
    {
      technology: "styled-components",
      skillLevel: "Advanced",
      yearsofExperience: 3,
    },
    { technology: "CSS-in-JS", skillLevel: "Advanced", yearsofExperience: 3 },
    { technology: "CSS", skillLevel: "Advanced", yearsofExperience: 6 },
    {
      technology: "Bootstrap",
      skillLevel: "Intermediary",
      yearsofExperience: 2,
    },
    { technology: "VTEX IO", skillLevel: "Advanced", yearsofExperience: 2 },
    { technology: "VTEX Legacy", skillLevel: "Advanced", yearsofExperience: 2 },
    { technology: "Gatsby", skillLevel: "Beginner", yearsofExperience: 1 },
    {
      technology: "Oracle Database",
      skillLevel: "Intermediary",
      yearsofExperience: 3,
    },
    { technology: "PL/SQL", skillLevel: "Advanced", yearsofExperience: 3 },
    { technology: "MySQL", skillLevel: "Intermediary", yearsofExperience: 1 },
    { technology: "MSSQL", skillLevel: "Advanced", yearsofExperience: 4 },
    { technology: "Delphi", skillLevel: "Beginner", yearsofExperience: 1 },
    { technology: "C#", skillLevel: "Beginner", yearsofExperience: 2 },
    { technology: "ASP.NET", skillLevel: "Beginner", yearsofExperience: 2 },
    { technology: "HTML", skillLevel: "Expert", yearsofExperience: 6 },
    { technology: "Git", skillLevel: "Advanced", yearsofExperience: 4 },
  ],
};
