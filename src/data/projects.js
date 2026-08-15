export const projects = [
  {
    slug: "omvia",
    number: "01",
    title: "Omvia",
    year: "2025",
    category: "Product Design",
    description:
      "A soft-tech smart home app focused on clarity, comfort, and adaptive spatial control.",
    tags: ["Mobile App", "Systems Design", "IoT", "UI/UX", "Product Design"],
    image: "/images/projects/omvia.png",
    link: "/projects/omvia",
    featured: true,
    type: "uiux",
  },
  {
    slug: "613flea",
    number: "02",
    title: "613Flea",
    year: "2025",
    category: "Brand + Web",
    description:
      "A complete brand refresh and responsive website concept for Ottawa's creative marketplace.",
    tags: ["Visual Identity", "UI Design", "E-commerce", "UI/UX", "Branding"],
    image: "/images/projects/613flea.png",
    link: "/projects/613flea",
    featured: true,
    type: "uiux",
  },
  {
    slug: "auren",
    number: "03",
    title: "Auren",
    year: "2026",
    category: "UX Research",
    description:
      "A noise-cancelling app concept designed to support focus, calm, and deep work through sound control and intentional interface design.",
    tags: ["iOS Experience", "Sound Design", "Motion UI", "UX Research", "UI/UX"],
    image: "/images/projects/auren.png",
    link: "/projects/auren",
    featured: false,
    inProgress: true,
    type: "uiux",
  },
  {
    slug: "quench",
    number: "04",
    title: "Quench",
    year: "2022 / 24",
    category: "Branding / Packaging / Advertising",
    description:
      "A conceptual juice brand identity focused on bold packaging, visual refreshment, and campaign-ready product storytelling.",
    tags: ["Branding", "Packaging", "Advertising", "Graphic Design"],
    image: "/images/projects/quench.gif",
    link: "/projects/quench",
    featured: true,
    type: "graphics",
  },

  {
  slug: "blossom-theory",
  number: "05",
  title: "Blossom Theory",
  year: "In Progress",
  category: "Brand Identity / Skincare / Visual Design",
  description:
    "A personal brand identity project for the luxury skincare market, combining botanical elegance with a scalable visual system that builds consumer trust.",
  tags: ["Branding", "Visual Identity", "Skincare", "In Progress"],
  image: "/images/projects/blossom-theory.gif",
  link: "/projects/blossom-theory",
  featured: false,
  inProgress: true,
  type: "graphics",
}

  /*
    Add future projects below.

    Set featured: true only if you want it on the homepage.
    Set featured: false if it should only appear on UI/UX or Graphics pages.
  */

  /*
  {
    slug: "new-project",
    number: "05",
    title: "New Project",
    year: "2025",
    category: "UI/UX",
    description: "Short project description here.",
    tags: ["UI/UX", "Research", "Prototype"],
    image: "/images/projects/new-project.png",
    link: "/projects/new-project",
    featured: false,
    type: "uiux",
  },
  */
];

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getUiUxProjects() {
  return projects.filter((project) => project.type === "uiux");
}

export function getGraphicsProjects() {
  return projects.filter((project) => project.type === "graphics");
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectNavigation(currentSlug) {
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug);

  if (currentIndex === -1) {
    return {
      previousProject: null,
      nextProject: null,
    };
  }

  const previousProject =
    currentIndex === 0 ? projects[projects.length - 1] : projects[currentIndex - 1];

  const nextProject =
    currentIndex === projects.length - 1 ? projects[0] : projects[currentIndex + 1];

  return {
    previousProject,
    nextProject,
  };
}
