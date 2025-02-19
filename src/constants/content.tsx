import {
  FaEnvelope,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaBullseye,
  FaHandshake,
  FaEye,
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
// EXPORTS
// ==============================

const aboutContent = {
  mission: {
    icon: <FaBullseye />,
    title: "Our Mission",
    description:
      "Our mission is to provide reliable, high-quality construction and drilling services that exceed client expectations while maintaining the highest standards of safety and environmental responsibility. We pride ourselves on our reputation for delivering projects that stand the test of time and contribute to the growth and development of our community.",
  },
  commitment: {
    icon: <FaHandshake />,
    title: "Our Commitment",
    description:
      "we are unwavering in our commitment to excellence, safety, and integrity in every aspect of our work. Whether it's a small-scale project or a large, complex drilling operation, we approach every task with the same dedication to quality and precision.",
  },
  vision: {
    icon: <FaEye />,
    title: "Our Vision",
    description:
      "We envision a future where every project we undertake contributes to shaping a better, more efficient world—one where safety, environmental responsibility, and customer satisfaction are at the forefront of everything we do.",
  },
};

export { contactContent, aboutContent };
