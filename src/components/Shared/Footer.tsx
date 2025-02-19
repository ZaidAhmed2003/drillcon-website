import { navLinks } from "@/constants/navlinks";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import { contactContent } from "@/constants/content";
import { ScrollTotop } from "@/components";

const Footer = () => {
  const { social } = contactContent;

  return (
    <footer className="from-secondary to-secondary-dark relative bg-gradient-to-b text-white">
      <div className="container mx-auto grid grid-cols-1 items-start gap-12 px-5 py-24 text-center md:grid-cols-2 md:gap-12 md:text-start lg:grid-cols-4">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Image
            src="/images/logo.png"
            alt="drillcon Logo"
            width={48}
            height={48}
          />
          <p className="text-lg">
            We are leaders in drilling and construction, committed to excellence
            across all projects. We embrace challenges and deliver results.
          </p>
          <div className="">
            <h4 className="mb-6 text-xl font-semibold uppercase md:mb-4 md:text-lg">
              Follow Us
            </h4>
            <div className="flex items-center gap-4 text-2xl">
              {social.map((socialItem, index) => (
                <Link
                  href={socialItem.link}
                  key={index}
                  target="_blank"
                  className="hover:text-secondary bg-primary rounded-full p-3 transition-all duration-300 hover:scale-110"
                >
                  {socialItem.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <h4 className="mb-6 text-xl font-semibold uppercase md:mb-4 md:text-lg">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="hover:text-primary transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-1">
          <h4 className="mb-6 text-xl font-semibold uppercase md:mb-4 md:text-lg">
            Services
          </h4>
          <ul className="flex flex-col gap-2">
            {navLinks
              .filter((link) => link.dropdown) // Only keep links with dropdowns
              .flatMap((link) =>
                link.dropdown?.map((subLink, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      href={subLink.path}
                      className="hover:text-primary transition duration-300"
                    >
                      {subLink.name}
                    </Link>
                  </li>
                )),
              )}
          </ul>
        </div>
        <div className="lg:col-span-1">
          <h4 className="mb-6 text-xl font-semibold uppercase md:mb-4 md:text-lg">
            Contact
          </h4>
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 flex items-center justify-center gap-4">
              <FaEnvelope className="text-2xl" />
              <div className="flex flex-col items-start">
                <p className="text-lg">Email us for query</p>
                <a
                  href="mailto:drillcon20@gmail.com"
                  className="hover:text-primary transition duration-300"
                >
                  drillcon20@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <FaPhoneAlt className="text-2xl" />
              <div className="flex flex-col items-start">
                <p className="text-lg">Call Us</p>
                <a
                  href="tel:+923331777213"
                  className="hover:text-primary transition duration-300"
                >
                  +92 333-1777-213
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* COPY RIGHT CONTAINER */}
      <div className="border-t border-white/10">
        <div className="relative container mx-auto flex flex-col items-center justify-between gap-5 py-10 md:flex-row md:gap-0 md:py-5">
          <div>
            &copy; 2024 <span className="font-bold">Drillcon</span> - All Rights
            Reserved
          </div>
          <div>
            Design and Developed by{" "}
            <Link
              href="https://github.com/ZaidAhmed2003"
              target="_blank"
              className="hover:text-primary font-bold transition duration-300"
            >
              Zaid Ahmed
            </Link>
          </div>
        </div>
        <ScrollTotop />
      </div>
    </footer>
  );
};

export default Footer;
