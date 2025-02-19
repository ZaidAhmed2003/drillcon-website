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
      { name: "Drilling Services", path: "/services/drilling" },
      { name: "Construction Services", path: "/services/construction" },
    ],
  },
  { name: "Our Projects", path: "/#projects" },
  { name: "Contact", path: "/#contact" },
];
