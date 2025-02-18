// ==============================
// NAVIGATION LINKS CONTENT
// ==============================

export const navLinks = [
  { name: "Home", path: "/#" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services/drilling",
    dropdown: [
      { name: "Drilling Service", path: "/services/drilling" },
      { name: "Construction Service", path: "/services/construction" },
    ],
  },
  { name: "Our Projects", path: "/#projects" },
  { name: "Contact", path: "/#contact" },
];
