"use client";

import Link from "next/link";
import Image from "next/image";
import { contactContent } from "@/constants/content";
import { IoIosArrowDown } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { navLinks } from "@/constants/navlinks";

export default function Header() {
  const { contact, social } = contactContent;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* INFORMATION HEADER */}
      <div className="hidden bg-primary md:block">
        <div className="container mx-auto py-2 px-4">
          <div className="flex items-center justify-between px-2">
            {/* LEFT SIDE - CONTACT INFO */}
            <div className="flex items-center gap-4">
              {contact.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-secondary transition-all hover:text-white"
                >
                  {item.icon}
                  <a href={item.link}>{item.display}</a>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE - SOCIAL MEDIA */}
            <div className="flex items-center gap-4 text-xl">
              {social.map((socialItem, index) => (
                <Link
                  key={index}
                  href={socialItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:text-white"
                >
                  {socialItem.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* MAIN NAVBAR */}
      <div className="sticky top-0 z-50 bg-white shadow-lg">
        <nav className="container mx-auto flex items-center justify-between px-4 py-2 md:p-4">
          {/* LOGO */}
          <Link href={"/"}>
            <Image src="/images/logo.png" alt="logo" width={48} height={48} />
          </Link>

          {/* HAMBURGER ICON */}
          <LuMenu
            className="cursor-pointer text-3xl md:hidden"
            onClick={toggleMobileMenu}
          />

          {/* NAVLINKS FOR DESKTOP */}
          <ul className="hidden items-center gap-4 font-secondary transition-all md:flex">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="group relative px-2 py-3 font-semibold transition-all"
              >
                {link.dropdown ? (
                  <div>
                    <Link
                      href={link.path}
                      className="flex cursor-pointer items-center gap-2 group-hover:text-primary"
                    >
                      <span>{link.name}</span>
                      <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                    </Link>

                    {/* DROPDOWN */}
                    <div className="absolute right-0 top-12 z-50 hidden w-60 flex-col rounded-md bg-white shadow-2xl transition-all group-hover:visible group-hover:flex">
                      {link.dropdown.map((subLink, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subLink.path}
                          className="flex items-center px-4 py-4 text-secondary transition-all hover:bg-primary hover:text-secondary"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.path}
                    className="text-secondary transition-all hover:text-primary"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* MOBILE NAVBAR */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full transform bg-white shadow-lg ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between border-b px-4 py-2">
          {/* LOGO */}
          <Link href={"/"}>
            <Image src="/images/logo.png" alt="logo" width={48} height={48} />
          </Link>
          {/* CLOSE ICON */}
          <AiOutlineClose
            className="cursor-pointer text-3xl"
            onClick={toggleMobileMenu}
          />
        </div>

        {/* MOBILE NAVLINKS */}
        <ul className="flex flex-col items-start gap-8 p-4">
          {navLinks.map((link, index) => (
            <li key={index} className="w-full text-4xl">
              {link.dropdown ? (
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between font-semibold text-primary">
                    {link.name}
                  </summary>
                  <div className="mt-2 space-y-2 pl-4">
                    {link.dropdown.map((subLink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subLink.path}
                        className="block text-secondary hover:text-primary"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  href={link.path}
                  className="block text-secondary hover:text-primary"
                  onClick={toggleMobileMenu}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* BACKDROP FOR MOBILE NAVBAR */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
}
