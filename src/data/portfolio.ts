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
  subtitle: string;
  description: string;
  altText?: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  mockup: string;          // Image du mockup (device frame)
  screenshot: string;      // Screenshot du projet (contenu)
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
      title: "Wonderlive",
      subtitle: "Développement front-end d'une application mobile pour un réseau social basé sur la blockchain.",
      description: "Application mobile permettant aux utilisateurs de partager du contenu et d'interagir sur un réseau social sécurisé, grâce à l'intégration de la blockchain. Le projet est actuellement en phase de bêta-test.",
      altText: "Aperçu de l'application Wonderlive",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript"
      ],
      features: [
        "Intégration de modales dynamiques",
        "Onboarding complet du service marketplace",
        "Éditeur photo avec filtres et rognage",
        "Messagerie intégrée avec chat par conversation",
        "Architecture front propre et conforme à la maquette Figma"
      ],
      liveUrl: "https://wonderlive.io/",
      mockup: "/images/mockup-mobile.png",
      screenshot: "/images/projects/wonderlive/screenshot.png"
    },
    {
      title: "InkPro",
      subtitle: "Développement de modules front et back pour un assistant intelligent dédié aux tatoueurs.",
      description: "Application web permettant aux tatoueurs de gérer leurs rendez-vous, leurs clients et leurs disponibilités, avec un assistant automatisé connecté à Instagram.",
      altText: "Aperçu de l'application InkPro",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Tailwind CSS"
      ],
      features: [
        "Module CRM Clients (liste, fiches détaillées, actions rapides)",
        "Interface de gestion des services et tarifs",
        "Gestion des rendez-vous : création, édition, suppression avec persistance en base",
        "Configuration et sauvegarde des horaires d'ouverture"
      ],
      liveUrl: "https://www.inkpro.io/",
      mockup: "/images/mockup-desktop.png",
      screenshot: "/images/projects/inkpro/screenshot.png"
    },
    {
      title: "Otour2",
      subtitle: "Refonte front-end complète d'un site e-commerce avec Tailwind CSS.",
      description: "Site e-commerce permettant de commander des emballages alimentaires personnalisés. L'interface a été repensée pour une navigation plus moderne et intuitive.",
      altText: "Aperçu du site Otour2",
      technologies: [
        "Tailwind CSS",
        "JavaScript",
        "Figma"
      ],
      features: [
        "Reprise complète du front avec Tailwind CSS",
        "Intégration pixel-perfect à partir d'une maquette Figma",
        "Carrousels et slides dynamiques en JavaScript",
        "Refonte responsive à partir d'un site existant"
      ],
      liveUrl: "https://www.otour2.com/",
      mockup: "/images/mockup-desktop.png",
      screenshot: "/images/projects/otour2/screenshot.png"
    },
    {
      title: "Ucanfit",
      subtitle: "Amélioration du site WordPress d'une salle de sport avec refonte du planning et création d'un encart personnalisé.",
      description: "Site WordPress permettant la gestion des cours et abonnements d'une salle de sport. Amélioration de l'expérience utilisateur grâce à une présentation modernisée du planning et à l'ajout d'un encart informatif personnalisé.",
      altText: "Aperçu du site Ucanfit",
      technologies: [
        "WordPress",
        "Elementor",
        "CSS"
      ],
      features: [
        "Refonte responsive du planning des cours",
        "Création d'un encart fixe (popup figée) avec affichage/masquage activable",
        "Intégration fidèle aux demandes graphiques du client",
        "Optimisation de la mise en page pour desktop et mobile"
      ],
      mockup: "/images/mockup-desktop.png",
      screenshot: "/images/projects/ucanfit/screenshot.png"
    },
    {
      title: "Empowered Geeky Girl",
      subtitle: "Conception et réalisation d'un site/blog WordPress pour une coach indépendante.",
      description: "Site WordPress conçu pour mettre en valeur l'activité d'une coach indépendante à travers un blog professionnel.",
      altText: 'Aperçu du site Empowered Geeky Girl',
      technologies: [
        "Figma",
        "WordPress",
        "Elementor",
        "CSS",
      ],
      features: [
        "Conception de maquettes et prototypes sur Figma",
        "Intégration WordPress (thème personnalisé)",
        "Optimisation SEO",
        "Architecture éditoriale du site",
        "Adaptation du site aux besoins spécifiques du client",
      ],
      mockup: "/images/mockup-desktop.png",
      screenshot: "/images/projects/empowered-geeky-girl/screenshot.png"
    },
  ],

  contact: {
    email: "sarah.tabet69@gmail.com",
    phone: "+33 6 12 34 56 78",
    linkedin: "https://www.linkedin.com/in/sarah-tabet-",
    github: "https://github.com/Sarah-0911"
  }
};
