export interface Technology {
  name: string;
  icon: string;
}

export interface TechStack {
  category: string;
  technologies: Technology[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  liveUrl: string;
  githubUrl: string;
  image?: string;
}

export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface PortfolioData {
  name: string;
  presentation: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  stacks: TechStack[];
  projects: Project[];
  contact: Contact;
}

export const portfolioData: PortfolioData = {
  name: "Sarah Tabet",
  presentation: "Hey, je suis Sarah.",
  title: "Développeuse Front-end",
  subtitle: "Je crée des sites et applications modernes qui allient esthétique, performance et efficacité.",
  description: "Depuis plus de 2 ans, j'accompagne la création et la refonte de projets digitaux.\nMon approche : transformer une idée ou un design en un produit fonctionnel, fluide et impactant, qui apporte une réelle valeur à ses utilisateurs.",

  skills: [
    "React", "TypeScript", "Next.js",
    "Tailwind CSS", "WordPress"
  ],

  stacks: [
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: "/icons/react.svg" },
        { name: "TypeScript", icon: "/icons/typescript.svg" },
        { name: "Next.js", icon: "/icons/nextjs.svg" },
        { name: "JavaScript ES6+", icon: "/icons/javascript.svg" }
      ]
    },
    {
      category: "Styling & Design",
      technologies: [
        { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
        { name: "shadcn/ui", icon: "/icons/shadcn.svg" },
        { name: "CSS3", icon: "/icons/css.svg" },
        { name: "Figma", icon: "/icons/figma.svg" }
      ]
    },
    {
      category: "Outils & Workflow",
      technologies: [
        { name: "Git", icon: "/icons/git.svg" },
        { name: "WordPress", icon: "/icons/wordpress.svg" },
        { name: "Claude Code", icon: "/icons/claude.svg" },
        { name: "Responsive Design", icon: "/icons/responsive.svg" }
      ]
    }
  ],

  projects: [
    {
      title: "E-commerce Dashboard",
      description: "Interface d'administration moderne pour une plateforme e-commerce avec gestion des produits, commandes et analytics en temps réel.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/images/mockup-desktop.png"
    },
    {
      title: "Portfolio d'Artiste",
      description: "Site portfolio créatif pour un artiste digital avec galerie interactive, animations fluides et design minimaliste.",
      technologies: ["Vue.js", "Nuxt.js", "GSAP", "SASS"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/images/mockup-tablet.png"
    },
    {
      title: "App Mobile de Productivité",
      description: "Application mobile intuitive pour la gestion de tâches avec notifications push et synchronisation cloud.",
      technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/images/mockup-mobile.png"
    }
  ],

  contact: {
    email: "sarah.tabet69@gmail.com",
    phone: "+33 6 12 34 56 78",
    linkedin: "https://www.linkedin.com/in/sarah-tabet-",
    github: "https://github.com/Sarah-0911"
  }
};
