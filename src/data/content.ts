export type Language = 'en' | 'nl';

export interface Project {
  id: string;
  slug: string;
  title: { en: string; nl: string };
  description: { en: string; nl: string };
  techStack: string[];
  status: { en: string; nl: string };
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'personal-portfolio',
    title: { en: 'Personal Portfolio Website', nl: 'Persoonlijke Portfolio Website' },
    description: {
      en: 'Designed and built using AI-assisted development. Includes multilingual support, theme toggle, and modern UI design.',
      nl: 'Ontworpen en gebouwd met behulp van AI-ondersteunde ontwikkeling. Inclusief meertalige ondersteuning, thema-schakelaar en modern UI-ontwerp.',
    },
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    status: { en: 'Completed', nl: 'Voltooid' },
    screenshots: [
      '/Portfolio_Site/1.png',
      '/Portfolio_Site/2.png',
      '/Portfolio_Site/3.png',
      '/Portfolio_Site/4.png',
    ],
  },
  {
    id: '2',
    slug: 'driving-school-website',
    title: { en: 'Driving School Website', nl: 'Rijschool Website' },
    description: {
      en: 'Website built for a local driving instructor. Clear service presentation, booking integration, and mobile optimization.',
      nl: 'Website gebouwd voor een lokale rijinstructeur. Duidelijke servicepresentatie, boekingsintegratie en mobiele optimalisatie.',
    },
    techStack: ['Next.js', 'Tailwind CSS', 'Lucide Icons'],
    status: { en: 'Completed / In Development', nl: 'Voltooid / In Ontwikkeling' },
    screenshots: [
      '/Walat/1.png',
      '/Walat/2.png',
      '/Walat/3.png',
      '/Walat/4.png',
    ],
  },
  {
    id: '3',
    slug: 'microservices-learning',
    title: { en: 'Microservices Learning Project', nl: 'Microservices Leerproject' },
    description: {
      en: 'Exploring backend systems, API development, and database integration as part of my software engineering development.',
      nl: 'Verkennen van backend-systemen, API-ontwikkeling en database-integratie als onderdeel van mijn software engineering ontwikkeling.',
    },
    techStack: ['Node.js', 'Express', 'Docker', 'PostgreSQL'],
    status: { en: 'In Development', nl: 'In Ontwikkeling' },
  },
];

export const translations = {
  en: {
    nav: {
      about: 'About Me',
      projects: 'Projects',
      contact: 'Let\'s Connect',
      cv: 'Download CV',
    },
    hero: {
      hi: 'Hi, I’m',
      name: 'Mohammed',
      statement: 'I combine AI tools and software engineering to build real-world solutions for growing businesses.',
      highlight: 'AI',
      credibility: 'First-Year Software Engineering Student | Based in the Netherlands',
      languages: 'Arabic (Fluent) • English (C1) • Dutch (B1)',
      viewWork: 'View My Work',
      downloadCV: 'Download CV',
      explore: 'Explore My Work',
    },
    approach: {
      title: 'AI + Engineering Approach',
      content: 'I use AI tools responsibly to accelerate development while focusing on clean architecture, system thinking, and real-world problem solving. My goal is to bridge the gap between cutting-edge AI capabilities and solid software engineering principles. As a student engineer, I emphasize continuous learning and growth, ensuring that every solution I build is both efficient and maintainable.',
    },
    testimonials: {
      title: 'What Clients Say',
      list: [
        {
          text: 'Mohammed helped me bring my driving school online. The website is professional, easy to use, and has helped me reach more students. His approach to using modern tools made the process very efficient.',
          author: 'Driving Instructor',
        },
      ],
    },
    about: {
      title: 'The Story / How I Got Here',
      content: 'I am a 23-year-old software engineering student from Yemen, currently living and studying in the Netherlands. My passion lies in building real-world solutions that solve actual problems. I focus on AI-assisted development and mastering software fundamentals. I believe in the power of technology to transform businesses and lives, and I am dedicated to continuous improvement and learning.',
      age: '23 years old',
      origin: 'From Yemen',
      study: 'Studying Software Engineering in the Netherlands',
      focus: 'Focused on AI-assisted development and software fundamentals',
      languagesTitle: 'Languages',
    },
    contact: {
      title: 'Ready to build something extraordinary?',
      subtitle: 'Get in touch',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: {
      madeWith: 'Made with love by Mohammed Al Sewari',
    },
  },
  nl: {
    nav: {
      about: 'Over Mij',
      projects: 'Projecten',
      contact: 'Laten we praten',
      cv: 'Download CV',
    },
    hero: {
      hi: 'Hoi, ik ben',
      name: 'Mohammed',
      statement: 'Ik combineer AI-tools en software engineering om real-world oplossingen te bouwen voor groeiende bedrijven.',
      highlight: 'AI',
      credibility: 'Eerstejaars Software Engineering Student | Gevestigd in Nederland',
      languages: 'Arabisch (Vloeiend) • Engels (C1) • Nederlands (B1)',
      viewWork: 'Bekijk Mijn Werk',
      downloadCV: 'Download CV',
      explore: 'Verken Mijn Werk',
    },
    approach: {
      title: 'AI + Engineering Aanpak',
      content: 'Ik gebruik AI-tools op een verantwoorde manier om de ontwikkeling te versnellen, terwijl ik me concentreer op schone architectuur, systeemdenken en het oplossen van echte problemen. Mijn doel is om de kloof te overbruggen tussen geavanceerde AI-mogelijkheden en solide software engineering principes. Als student-engineer leg ik de nadruk op continu leren en groeien, zodat elke oplossing die ik bouw zowel efficiënt als onderhoudbaar is.',
    },
    testimonials: {
      title: 'Wat Klanten Zeggen',
      list: [
        {
          text: 'Mohammed heeft me geholpen mijn rijschool online te brengen. De website is professioneel, gebruiksvriendelijk en heeft me geholpen meer studenten te bereiken. Zijn aanpak met moderne tools maakte het proces erg efficiënt.',
          author: 'Rijinstructeur',
        },
      ],
    },
    about: {
      title: 'Het Verhaal / Hoe Ik Hier Kwam',
      content: 'Ik ben een 23-jarige software engineering student uit Jemen, momenteel woonachtig en studerend in Nederland. Mijn passie ligt in het bouwen van real-world oplossingen die daadwerkelijke problemen oplossen. Ik richt me op AI-ondersteunde ontwikkeling en het beheersen van softwarefundamentals. Ik geloof in de kracht van technologie om bedrijven en levens te transformeren, en ik ben toegewijd aan voortdurende verbetering en leren.',
      age: '23 jaar oud',
      origin: 'Uit Jemen',
      study: 'Studeert Software Engineering in Nederland',
      focus: 'Gericht op AI-ondersteunde ontwikkeling en softwarefundamentals',
      languagesTitle: 'Talen',
    },
    contact: {
      title: 'Klaar om iets buitengewoons te bouwen?',
      subtitle: 'Neem contact op',
      email: 'E-mail',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: {
      madeWith: 'Gemaakt met liefde door Mohammed Al Sewari',
    },
  },
};
