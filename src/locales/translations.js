import Project1 from '/public/project1.png';
import JamcoreImg from '/public/jamcore.png';

const translations = {
  en: {
    professionalExp: "Professional Experience",
    academicExp: "Academic Experience",
    name: "Lucas Gomes Cruz",
    role: ".NET Fullstack Developer",
    phone: "(13) 99804-8091",
    email: "lcs.gomes33@gmail.com",
    github: "https://github.com/lucascruzestudo",
    linkedin: "https://www.linkedin.com/in/lucasgomescruz",
    summary: "Fullstack Developer with expertise in .NET, CQRS, and Clean Architecture.",
    welcome: "Welcome — explore selected projects, experience, and feel free to get in touch.",
    downloadResume: "Resume",
    contactMe: "Contact",
    nav: {
      home: "Home",
      tech: "Stack",
      experience: "Experience",
      education: "Studies",
      projects: "Projects",
      contact: "Reach Out",
    },
    stacks: {
      title: "Tech Stack",
      backend: "Backend",
      frontend: "Frontend",
      databases: "Databases",
      devops: "DevOps",
      dataScience: "Data Engineering",
      other: "Others",
    },
    experience: {
      title: "Experience",
      current: "Present",
      mosten_dev: {
        company: "MOSTEN",
        role: "Fullstack Developer",
        period: "Feb 2024 – Present",
        description: "Backend .NET developer coordinating critical tasks and integrating multiple systems into a robust, scalable application using CQRS. Design and optimize database models, implement complex SQL (views, procedures) and performance improvements; manage branches/repos and lead code reviews and technical mentoring. Responsible for production deployments and increasing system reliability.",
        technologies: [".NET Core", "CQRS", "SQL", "Git", "Azure DevOps"]
      },
      mosten_intern: {
        company: "MOSTEN",
        role: "Data Intern",
        period: "Jul 2023 – Feb 2024",
        description: "Worked on backend integration and end-to-end data pipelines: implemented ETL processes, facial-recognition prototypes and monitoring systems. Built SQL/NoSQL data models and Power BI dashboards to surface operational insights; used Apache Spark and Pandas for large-scale processing and ML prototyping. Collaborated with Git and Azure DevOps to enable continuous delivery.",
        technologies: ["Python", "Apache Spark", "Pandas", "SQL/NoSQL", "Power BI", "Git"]
      },
      santos_port: {
        company: "Santos Port Authority",
        role: "Innovation Intern",
        period: "Apr 2022 – Jul 2023",
        description: "Modeled and optimized relational databases; developed Python RPAs and robust APIs to integrate AIS and terminal-operation data. Automated data collection, web mining and processing pipelines to increase accuracy and operational visibility; documented solutions and monitored scripts in Linux production environments.",
        technologies: ["Python", "RPA", "APIs", "SQL", "Linux"]
      }
    },
    education: {
      title: "Education",
      degree: "Systems Analysis & Development",
      institution: "FATEC Rubens Lara",
      period: "Mar 2021 – Dec 2024",
      description: "Technologist in Systems Analysis & Development with a solid foundation in web solution development: programming logic, databases, API design, information security, software engineering, networking and team leadership. Practical labs and projects focused on building robust, usable and secure systems, combined with project and people management skills.",
      topics: [
        "Algorithms & Programming",
        "Object-Oriented Programming",
        "Databases",
        "API Design",
        "Software Engineering",
        "Information Security",
        "Computer Networks",
        "Project Management",
        "Team Management",
        "Artificial Intelligence"
      ]
    },
    projects: {
      title: "Projects",
      viewOnGitHub: "GitHub",
      projectA: {
        title: "CoreAPI",
        description: "Production-style .NET API showcasing CQRS, RabbitMQ messaging, Redis caching and Dockerized deployment — implemented features to demonstrate practical knowledge.",
        projectUrl: "https://github.com/lucascruzestudo/DOTNET_CoreAPI",
        technologies: [".NET", "CQRS", "RabbitMQ", "Redis", "Docker", "PostgreSQL"],
        image: Project1,
      },
      jamcore: {
        title: "Jamcore",
        description: "Jamcore is a music discovery platform that blends the best of Spotify, SoundCloud and Last.fm — dynamic streaming UX, free track uploads, rich social features and deep listening analytics for personalized recommendations.",
        projectUrl: "https://github.com/lucascruzestudo/DOTNET_JamcoreAPI",
        projectUrl2: "https://github.com/lucascruzestudo/REACT_Jamcore",
        technologies: [".NET", "React", "PostgreSQL", "Docker"],
        image: JamcoreImg,
      },
    },
    whatsappMessage: "Hi Lucas, I saw your portfolio and would like to talk.",
    emailMe: "Email",
    sendMeWhatsapp: "WhatsApp",
    contactDescription: "Let's connect. I'm open to discussing opportunities.",
    showMore: "Show more",
    showLess: "Show less"
  },
  pt: {
    professionalExp: "Experiência Profissional",
    academicExp: "Experiência Acadêmica",
    name: "Lucas Gomes Cruz",
    role: "Desenvolvedor .NET Fullstack",
    phone: "(13) 99804-8091",
    email: "lcs.gomes33@gmail.com",
    github: "https://github.com/lucascruzestudo",
    linkedin: "https://www.linkedin.com/in/lucasgomescruz",
    summary: "Olá, seja bem-vindo(a) ao meu portfólio.",
    welcome: "Seja bem-vindo(a) — explore meu portfólio, meus projetos, experiência e sinta-se à vontade para entrar em contato.",
    downloadResume: "Currículo",
    contactMe: "Fale Comigo",
    nav: {
      home: "Início",
      tech: "Tecnologias",
      experience: "Experiência",
      education: "Educação",
      projects: "Projetos",
      contact: "Contato",
    },
    stacks: {
      title: "Tecnologias",
      backend: "Backend",
      frontend: "Frontend",
      databases: "Bancos de Dados",
      devops: "DevOps",
      dataScience: "Engenharia de Dados",
      other: "Outros",
    },
    experience: {
      title: "Experiência",
      current: "O momento",
      mosten_dev: {
        company: "MOSTEN",
        role: "Dev Fullstack",
        period: "Fev 2024 – Presente",
        description: "Desenvolvedor backend .NET responsável por coordenar e executar tarefas críticas, integrando sistemas em aplicações robustas com arquitetura CQRS. Projeto e otimização de modelos de banco, implementação de consultas complexas (views, procedures) e melhorias de performance; gestão de branches/repos, revisões de código e mentoria técnica. Realizo deploys em produção garantindo confiabilidade.",
        technologies: [".NET Core", "CQRS", "SQL", "Git", "Azure DevOps"]
      },
      mosten_intern: {
        company: "MOSTEN",
        role: "Estagiário de Dados",
        period: "Jul 2023 – Fev 2024",
        description: "Atuação em integração backend e pipelines de dados: implementei processos ETL, protótipos de reconhecimento facial e sistemas de monitoramento. Modelei bases SQL/NoSQL e criei dashboards em Power BI para apoiar decisões; usei Apache Spark e Pandas para processamento em larga escala e provas de conceito de ML. Trabalhei com Git e Azure DevOps para entrega contínua.",
        technologies: ["Python", "Apache Spark", "Pandas", "SQL/NoSQL", "Power BI", "Git"]
      },
      santos_port: {
        company: "Porto de Santos",
        role: "Estagiário de Inovação",
        period: "Abr 2022 – Jul 2023",
        description: "Modelagem e otimização de bancos relacionais; desenvolvimento de automações (RPAs) em Python e APIs para integrar dados AIS e operações portuárias. Automatizei coleta e processamento (web scraping, pipelines), documentei soluções e monitorei scripts em servidores Linux em produção, contribuindo para digitalização e melhoria operacional.",
        technologies: ["Python", "RPA", "APIs", "SQL", "Linux"]
      }
    },
    education: {
      title: "Educação",
      degree: "Tecnologia em ADS",
      institution: "FATEC Rubens Lara",
      period: "Mar 2021 – Dez 2024",
      description: "Tecnólogo em Análise e Desenvolvimento de Sistemas com formação sólida em desenvolvimento de soluções web: lógica de programação, bancos de dados, construção de APIs, segurança da informação, engenharia de software, redes e liderança de equipes. Laboratórios e projetos práticos com foco em construir sistemas robustos, usáveis e seguros, além de competências em gestão de projetos e equipes.",
      topics: [
        "Algoritmos e Lógica",
        "Programação Orientada a Objetos",
        "Banco de Dados",
        "Construção de APIs",
        "Engenharia de Software",
        "Segurança da Informação",
        "Redes de Computadores",
        "Gestão de Projetos",
        "Gestão de Equipes",
        "Inteligência Artificial"
      ]
    },
    projects: {
      title: "Projetos",
      viewOnGitHub: "GitHub",
      projectA: {
        title: "CoreAPI",
        description: "API em .NET que demonstra CQRS, arquitetura orientada a mensagens (RabbitMQ), cache com Redis e containerização com Docker — funcionalidades implementadas para comprovar conhecimento.",
        projectUrl: "https://github.com/lucascruzestudo/DOTNET_CoreAPI",
        technologies: [".NET", "CQRS", "RabbitMQ", "Redis", "Docker", "PostgreSQL"],
        image: Project1,
      },
      jamcore: {
        title: "Jamcore",
        description: "Jamcore é uma plataforma de descoberta musical que une o melhor do Spotify, SoundCloud e Last.fm — experiência dinâmica de streaming, liberdade para upload de faixas, forte interação social e análises detalhadas de consumo para recomendações personalizadas.",
        projectUrl: "https://github.com/lucascruzestudo/DOTNET_JamcoreAPI",
        projectUrl2: "https://github.com/lucascruzestudo/REACT_Jamcore",
        technologies: [".NET", "React", "PostgreSQL", "Docker"],
        image: JamcoreImg,
      },
    },
    whatsappMessage: "Olá Lucas, vi seu portfólio e gostaria de conversar.",
    emailMe: "Email",
    sendMeWhatsapp: "WhatsApp",
    contactDescription: "Vamos conversar. Estou aberto a novas oportunidades profissionais e colaborações técnico-estratégicas.",
    showMore: "Ver mais",
    showLess: "Ver menos"
  }
};

export default translations;