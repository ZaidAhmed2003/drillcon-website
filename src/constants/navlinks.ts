// ==============================
// NAVIGATION LINKS CONTENT
// ==============================

export const navLinks = [
  { name: "Home", path: "/#" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services/drilling-service",
    dropdown: [
      { name: "Drilling Service", path: "/services/drilling-service" },
      { name: "Construction Service", path: "/services/construction-service" },
    ],
  },
  { name: "Our Projects", path: "/#projects" },
  { name: "Contact", path: "/#contact" },
];
