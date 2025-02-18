import {
  FaEnvelope,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

// ==============================
// GENERAL CONTACT INFORMATION
// ==============================

const contactContent = {
  contact: [
    {
      display: "drillcon20@gmail.com",
      link: "mailto:drillcon20@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      display: "+923331777213",
      link: "tel:+923331777213",
      icon: <FaPhoneAlt />,
    },
  ],
  social: [
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/p/Drill-con-100064129091118/",
    },
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/+923331777213",
    },
    {
      icon: <FaInstagram />,
      link: "https://instagram.com/business",
    },
  ],
};

// ==============================
// MILESTONES CONTENT
// ==============================

const milestoneContent = [
  {
    name: "Small hand pump",
    count: 480,
  },
  {
    name: "Community Pump",
    count: 1235,
  },
  {
    name: "Solar water project",
    count: 93,
  },
  {
    name: "Agriculture water project",
    count: 6,
  },
];

// ==============================
// PROJECTS CONTENT
// ==============================

// ==============================
// WHY CHOOSE US CONTENT
// ==============================

// ======================================================================================================================================================
// ABOUT US CONTENT
// ======================================================================================================================================================

// ==============================
// EXPORTS
// ==============================

export { milestoneContent, contactContent };
