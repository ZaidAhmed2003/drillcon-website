import { navLinks } from "@/constants/navlinks";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import { contactContent } from "@/constants/content";

const Footer = () => {
  const { social } = contactContent;

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto grid grid-cols-1 items-start gap-10 px-5 py-24 text-center md:grid-cols-2 md:gap-10 md:text-start xl:grid-cols-4">
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
            <h4 className="text-xl font-semibold md:mb-4 md:text-lg uppercase mb-6">
              Follow Us
            </h4>
            <div className="flex items-center gap-4 text-xl">
              {social.map((socialItem, index) => (
                <Link
                  href={socialItem.link}
                  key={index}
                  target="_blank"
                  className="transition duration-300 hover:text-primary hover:bg-secondary bg-primary p-2 "
                >
                  {socialItem.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <h4 className="mb-6 text-xl font-semibold md:mb-4 md:text-lg uppercase">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="transition duration-300 hover:text-primary"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-1">
          <h4 className="mb-6 text-xl font-semibold md:mb-4 md:text-lg uppercase">
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
                      className="transition duration-300 hover:text-primary"
                    >
                      {subLink.name}
                    </Link>
                  </li>
                ))
              )}
          </ul>
        </div>
        <div className="lg:col-span-1">
          <h4 className="mb-6 text-xl font-semibold md:mb-4 md:text-lg uppercase">
            Contact
          </h4>
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 flex items-center justify-center gap-4">
              <FaEnvelope className="text-2xl" />
              <div className="flex flex-col items-start">
                <p className="text-lg">Email us for query</p>
                <a
                  href="mailto:drillcon20@gmail.com"
                  className="transition duration-300 hover:text-primary"
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
                  className="transition duration-300 hover:text-primary"
                >
                  +92 333-1777-213
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* COPY RIGHT CONTAINER */}
      <div className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-5 py-10 md:flex-row md:gap-0 md:py-5">
          <div>
            &copy; 2024 <span className="font-bold">Drillcon</span> - All Rights
            Reserved
          </div>
          <div>
            Design and Developed by{" "}
            <Link
              href="https://github.com/ZaidAhmed2003"
              target="_blank"
              className="font-bold transition duration-300 hover:text-primary"
            >
              Zaid Ahmed
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
