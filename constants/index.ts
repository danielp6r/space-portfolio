import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
  skill_name: "Java",
  image: "java.png",
  width: 80,
  height: 80,
},
{
  skill_name: "Spring Boot",
  image: "springboot.png",
  width: 80,
  height: 80,
},
{
  skill_name: "Spring Framework",
  image: "spring.png",
  width: 80,
  height: 80,
},
{
  skill_name: "Spring Security",
  image: "springsecurity.png",
  width: 80,
  height: 80,
},
{
  skill_name: "JPA / Hibernate",
  image: "jpa.png",
  width: 80,
  height: 80,
},
{
  skill_name: "Maven",
  image: "maven.png",
  width: 70,
  height: 70,
},
{
  skill_name: "Python",
  image: "python.png",
  width: 70,
  height: 70,
},

] as const;

export const SOCIALS = [
  
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/danielp6r",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/danielp6r",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com/danielp6r",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
] as const;

export const FULLSTACK_SKILL = [
  
] as const;

export const OTHER_SKILL = [
  
] as const;

export const PROJECTS = [
  {
    title: "Sistema Web para Auto Center",
    description:
      'Embark on a journey through my professional evolution with the "Modern Next.js Portfolio" - a dynamic showcase of my skills, experiences, and passion for web development. Crafted with precision and powered by Next.js, this portfolio is more than just a static display; it\'s an immersive experience that reflects the cutting edge of modern web technologies.',
    image: "/projects/project-1.png",
    link: "https://example.com",
  },
  {
    title: "Interactive Cards Portfolio",
    description:
      'Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience. Ditching the conventional static layout, this portfolio leverages interactive cards to showcase my skills, projects, and personality in an engaging and dynamic manner.',
    image: "/projects/project-2.png",
    link: "https://example.com",
  },
  {
    title: "Portifolio Space Themed Website",
    description:
      'Embark on an interstellar journey with my "Space Themed Website", a mesmerizing space-themed website that invites you to explore the cosmic wonders beyond our world. Immerse yourself in an awe-inspiring digital experience that blends cutting-edge design with the mysteries of the universe.',
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Repositórios",
    data: [
      {
        name: "GitHub",
      icon: RxGithubLogo,
      link: "https://github.com/danielp6r",
      },

    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/danielp6r/",
      },
    ],
  },
  {
    title: "Contato",
    data: [
      
      {
        name: "danielp6r@gmail.com",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Sobre mim",
    link: "#about-me",
  },
  {
    title: "Stack",
    link: "#skills",
  },
  {
    title: "Projetos",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/danielp6r/space-portfolio",
};
