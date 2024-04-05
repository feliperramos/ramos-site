import { EMAIL, PHONE_NUMBER } from "@/constants";
import { BaseServices, MockProps, ServicesLanguageProps } from "@/types";

export const ResumeData: MockProps = {
  personal: {
    name: "Felipe Ramos",
    location: "Sorocaba/SP - Brasil",
    email: EMAIL,
    phone: PHONE_NUMBER,
    age: 27,
  },
  intro: {
    description: {
      "pt-BR":
        "Estou sempre buscando aprimorar meus conhecimentos, já trabalhei com banco de dados e tecnologias como Delphi, C#, React e sou apaixonado por Javascript/Typescript. Estou procurando aprofundar meus conhecimentos em desenvolvimento back-end e front-end para expandir minhas habilidades.",
      "en-US":
        "I am always seeking to improve my knowledge, having worked with databases and technologies such as Delphi, C#, React, and I am passionate about JavaScript/TypeScript. I am looking to further my expertise in back-end and front-end development to expand my skills.",
    },
  },
  education: {
    "pt-BR": [
      {
        degree: "Análise e Desenvolvimento de Sistemas",
        college: "Universidade de Sorocaba",
        startDate: "02/2022",
        endDate: "11/2023",
        status: "Completa",
      },
      {
        degree: "Bacharel em Ciência da Computação",
        college: "Universidade de Sorocaba",
        startDate: "02/2015",
        endDate: "11/2020",
        status: "Incompleta",
      },
    ],
    "en-US": [
      {
        degree: "Analysis and Systems Development",
        college: "Sorocaba University",
        startDate: "2022/02",
        endDate: "2023/11",
        status: "Completed",
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
    "pt-BR": [
      {
        company: "IT Lean",
        role: "Desenvolvedor FrontEnd Pleno",
        startDate: "11/2022",
        endDate: "",
        description:
          "Focado em consultoria em cliente, nesta experiência o foco é trabalhar nas melhorias em conjunto do cliente, usando tecnologias como React para melhorar o app do cliente.",
        technologies: [
          { technology: "React Native" },
          { technology: "TypeScript" },
          { technology: "JavaScript" },
          { technology: "Azure" },
          { technology: "CSS" },
          { technology: "Metodologias Agile" },
        ],
        companyLink: "https://www.itlean.com.br",
      },
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
    "en-US": [
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

export const ServicesData: BaseServices = {
  developer: {
    "pt-BR": [
      {
        title: "Básico",
        description: "Site Profissional ou LandingPage básica.",
        price: 599.9,
        features: [
          {
            title: "Página Única",
            description:
              "Site com uma única página reunindo todas as informações necessárias do profissional, empresa ou serviço",
          },
          {
            title: "Até 4 seções",
            description:
              "Sua página com até 4 (quatro) seções diferentes para expor seu perfil, empresa ou serviço.",
          },
          {
            title: "Botão de Contato",
            description:
              "Um botão flutuante acessível para que seus clientes possam entrar em contato via Whatsapp, Email, Telegram, ou qualquer outra plataforma de sua preferência.",
          },
          {
            title: "Formulário de Contato",
            description:
              "Um formulário simples de contato para engajar seus clientes, com retorno das informações direto para sua caixa de emails, em instantes!",
          },
          {
            title: "Design Exclusivo",
            description: "Cores e fontes a seu gosto e do seu negócio.",
          },
          {
            title: "Mobile First",
            description:
              "Seu site pensado principalmente para acessos via dispositivos móveis.",
          },
          {
            title: "SEO integrado",
            description:
              "O seu site integrado com o Google Search Engine, um serviço de busca de site.",
          },
        ],
        whatsappMessage:
          "Olá, Gostaria de Conversar sobre a criação de um Website BÁSICO.",
        promotion: true,
      },
      {
        title: "Completo",
        description: "Site robusto para seu negócio.",
        price: 1299.9,
        features: [
          {
            title: "Tudo do website básico",
            description: "Todas as features do website básico inclusas!",
          },
          {
            title: "Seções Ilimitadas na página inicial",
            description:
              "Todas as seções que você deseja incluir na página inicial.",
          },
          {
            title: "Até 4 páginas personalizadas",
            description:
              "Até 4 páginas para você apresentar seus produtos, serviços e empresa da maneira mais completa possível.",
          },
          {
            title: "Blog",
            description:
              "Um blog para você apresentar os últimos conteúdos sobre seu negócio, empresa ou serviço.",
          },
          {
            title: "Curadoria de Marca (plano 1)",
            description:
              "Nossos especialistas em UI/UX preparados para tornar seu negócio, produto ou serviço o mais rentável através de melhorias de marca e experiência de usuário.",
          },
        ],
        whatsappMessage:
          "Olá, Gostaria de conversar sobre a criação de um Website COMPLETO.",
        devChoice: true,
      },
      {
        title: "Personalizado",
        description: "Personalize da forma que preferir.",
        price: "Faça uma cotação",
        features: [
          {
            title: "Tudo do básico e do completo",
            description: "Personalize a sua maneira!",
          },
          {
            title: "Páginas Ilimitadas",
            description: "Sem limite de páginas!",
          },
          {
            title: "Template de Loja Virtual (Ecommerce)",
            description:
              "Comece a vender com nosso sistema de ecommerce personalizado para sua necessidade.",
          },
        ],
        whatsappMessage:
          "Olá, Gostaria de conversar sobre a criação de um Website PERSONALIZADO.",
      },
    ],
    "en-US": [
      {
        title: "Basic",
        description: "Development of a Personal or basic LandingPage.",
        price: 100,
        features: [
          {
            title: "Single Page",
            description:
              "Website with a single page bringing together all the necessary information about the professional, company or service.",
          },
          {
            title: "Up to 4 Sections",
            description:
              "Your page with up to 4 (four) different sections to showcase your profile, company or service.",
          },
          {
            title: "Contact Button",
            description:
              "An accessible floating button so your customers can get in touch via Whatsapp, Email, Telegram, or any other platform of your choice.",
          },
          {
            title: "Contact Form",
            description:
              "A simple contact form to engage your customers, with information returned directly to your email inbox, quickly!",
          },
          {
            title: "Exclusive Design",
            description:
              "Colors and fonts to suit your taste and your business.",
          },
          {
            title: "Mobile First",
            description: "Your website designed for mobile devices.",
          },
          {
            title: "SEO Integrated",
            description:
              "Your website integrated with Google Search Engine, a service of search engine.",
          },
        ],
        whatsappMessage:
          "Hello, I'd like to talk about the creation of a basic website.",
      },
      {
        title: "Complete",
        description:
          "Development of a Website or LandingPage for your client or business.",
        price: 250,
        features: [
          {
            title: "Everything from the basic website",
            description:
              "Everything from the basic website including all the features!",
          },
          {
            title: "Up to 4 custom pages",
            description:
              "Up to 4 custom pages to showcase your products, services and company in a more complete way.",
          },
          {
            title: "Blog",
            description:
              "A blog to showcase the latest content about your business, company or service.",
          },
          {
            title: "Marketing Plan (plan 1)",
            description:
              "Our specialists in UI/UX prepared for your business, product or service to be the most affordable at the moment through improvements in marketing and user experience.",
          },
        ],
        whatsappMessage:
          "Hello, I'd like to talk about the creation of a complete website.",
      },
      {
        title: "Personalized",
        description:
          "Development of a Website or E-commerce Personalized for your client or business.",
        price: "Cotar",
        features: [
          {
            title: "Everything from the basic and the complete",
            description: "Personalize your way!",
          },
          {
            title: "No Limit on Pages",
            description: "No Limit on Pages!",
          },
          {
            title: "Ecommerce Template (Ecommerce)",
            description:
              "Start a selling with our ecommerce template for your needs.",
          },
        ],
        whatsappMessage:
          "Hello, I'd like to talk about the creation of a personalized website.",
      },
    ],
  },
  designer: {
    "pt-BR": [
      {
        title: "Identidade Visual",
        description:
          "Criação de Identidade Visual para Profissionais e Negócios",
        price: 599.9,
        features: [
          {
            title: "Criação de Logotipo",
            description:
              "Criamos o Logotipo da sua marca, ao seu gosto e com muito profissionalismo.",
          },
          {
            title: "Versionamento de Logotipo",
            description:
              "Todos os ajustes que você precisar para sua marca ser exatamente o que busca.",
          },
          {
            title: "Banners",
            description:
              "Criamos os melhores banners de websites e redes sociais para alavancar sua marca.",
          },
          {
            title: "Paleta de Cores",
            description:
              "Selecionamos as melhores cores que se encaixam com o propósito da sua marca.",
          },
          {
            title: "Tipografia",
            description:
              "Selecionamos a dedo a melhor fonte que mais se encaixa com seu negócio.",
          },
        ],
        whatsappMessage:
          "Olá, gostaria de conversar sobre a criação da minha identidade visual.",
        promotion: true,
      },
      {
        title: "UI Design",
        description:
          "Ideal para criação completa da sua marca, desde identidade visual até design de interface de site ou app.",
        price: 1299.9,
        features: [
          {
            title: "Tudo da Identidade Visual",
            description: "Tudo que está incluso no design de identidade visual",
          },
          {
            title: "Design de Interface",
            description:
              "Utilizamos o figma para criar uma interface personalizada para seu negócio.",
          },
          {
            title: "Design System",
            description:
              "Utilizamos o figma para criar uma padronização de identidade de marca, este recurso irá auxiliar seus designers e desenvolverdores a personalizar seu website ou app da melhor forma.",
          },
          {
            title: "Style Guide",
            description:
              "Criamos um pdf com todas as informações da sua marca, com cores, tipografia, exemplos de uso tudo que você precisa saber para engajar sua identidade visual",
          },
          {
            title: "Ícones",
            description:
              "Criamos e selecionamos os melhores ícones para utilizar em seu ecosistema de websites e apps.",
          },
        ],
        whatsappMessage:
          "Olá, gostaria de conversar sobre a criação da minha identidade visual e design de interface.",
        devChoice: true,
      },
      {
        title: "Personalizado",
        description: "Personalize da forma que preferir.",
        price: "Faça uma cotação",
        features: [
          {
            title: "Identidade Visual e UI Design Inclusos",
            description: "Personalize a sua maneira!",
          },
          {
            title: "Modificações Ilimitadas",
            description:
              "Não descansamos até que sua marca esteja exatamente como deseja.",
          },
          {
            title: "Criação de Conteúdo",
            description:
              "Deixe que nós nos preocupamos em criar o conteúdo das suas redes sociais.",
          },
        ],
        whatsappMessage:
          "Olá, gostaria de conversar sobre a criação personalizada da minha marca.",
      },
    ],
    "en-US": [
      {
        title: "Identity Visual",
        description:
          "Creation of Identity Visual for Professionals and Businesses",
        price: 99.9,
        features: [
          {
            title: "Logo Design",
            description:
              "We create the logo of your brand, to your heart and with great professionalism.",
          },
          {
            title: "Versioning of Logo",
            description:
              "All the adjustments that you need to your brand exactly match what you are looking for.",
          },
          {
            title: "Banners",
            description:
              "We create the best banners for websites and social networks to boost your brand.",
          },
          {
            title: "Color Palette",
            description:
              "We select the best colors that best fit your business.",
          },
          {
            title: "Typography",
            description:
              "We select the best typography that best fits your business.",
          },
        ],
        whatsappMessage:
          "Hello, I'd like to talk about the creation of a basic identity visual.",
        promotion: true,
      },
      {
        title: "UI Design",
        description:
          "Ideal for creation of a complete website, from identity visual to design of interface of site or app.",
        price: 250,
        features: [
          {
            title: "Everything in Identity Visual",
            description: "Everything included in visual identity design",
          },
          {
            title: "Interface Design",
            description:
              "We use figma to create a personalized interface for your business.",
          },
          {
            title: "Design System",
            description:
              "We use figma to create a standard brand identity, this resource will help your designers and developers to customize your website or app in the best way.",
          },
          {
            title: "Style Guide",
            description:
              "We create a PDF with all the information about your brand, with colors, typography, examples of use, everything you need to know to engage your visual identity",
          },
          {
            title: "Icons",
            description:
              "We create and select the best icons to use on your ecosystem of websites and apps.",
          },
        ],
        whatsappMessage:
          "Hello, I'd like to talk about the creation of a personalized website.",
        devChoice: true,
      },
      {
        title: "Personalized",
        description: "Personalize the way you prefer.",
        price: "Make a quote",
        features: [
          {
            title: "Identity Visual and UI Design Inclusive",
            description: "Personalize your way!",
          },
          {
            title: "Unlimited Modifications",
            description:
              "We don't rest until your brand is exactly how you want it.",
          },
          {
            title: "Creation of Content",
            description:
              "Let us worry about creating the content for your social networks.",
          },
        ],
        whatsappMessage:
          "Hello, I'd like to talk about the creation of a personalized design for my brand.",
      },
    ],
  },
};
