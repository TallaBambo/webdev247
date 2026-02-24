"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const navLinks = [
  {
    name: "About us",
    link: "/about-us",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
    document.querySelector("html").classList.toggle("overFlowHiden");
  };

  useEffect(() => {
    setMenuOpen(false);
    document.querySelector("html").classList.remove("overFlowHiden");
  }, [pathname]);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header display-flex ${isSticky ? "stick" : ""}`}>
        <Link href="/" className="logo">
          <Image
            src="/images/logo.png"
            alt="WebDev 247 Logo"
            width={120}
            height={120}
          />
        </Link>
        <nav className={`nav display-flex ${menuOpen ? "menuOpen" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.link}>
              <Link
                href={link.link}
                className={`hover-item ${pathname === link.link ? "active" : ""}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </nav>
        <div className="display-flex header-btn">
          <Link href="/contact" className="btn btn-fill--light">
            Get in touch
            <i className="fa-solid fa-circle-chevron-right"></i>
          </Link>
          <div
            className={`hamburger display-flex ${menuOpen ? "active-menu" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar display-flex"></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
