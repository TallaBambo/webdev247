import Image from "next/image";
import Link from "next/link";
import CircularProgressBar from "./progressBar";
import Contact from "./Contact";

const navLinks = [
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

function Footer() {
  return (
    <footer className="footer display-flex">
      <div className="footer-container container display-flex">
        <div className="footer-item display-flex">
          <h1>Handcrafted with precision. Engineered for the future.</h1>
          <hr />
          <div className="footer-logo">
            <Image
              src="/images/Logo-black.png"
              alt="Web Dev 247 Services Image"
              fill
            />
          </div>
        </div>
        <div className="footer-item display-flex">
          <div className="quick-links display-flex">
            <h1>Quick Links</h1>
            <ul className="display-flex">
              {navLinks.map((link) => (
                <li className="display-flex" key={link.link}>
                  <span className="point-dot"></span>{" "}
                  <Link className="hover-item" href={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-item display-flex">
          <div className="quick-links display-flex">
            <h1>Connect with us</h1>
            <ul className="display-flex">
              <li className="display-flex">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:websitedev247@gmail.com">
                  websitedev247@gmail.com
                </a>
              </li>
              <li className="display-flex">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:tallabambo@gmail.com">tallabambo@gmail.com</a>
              </li>
              <li className="display-flex">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:tarlagerald@gmail.com">tarlagerald@gmail.com</a>
              </li>
              <li className="display-flex">
                <i className="fa-sharp fa-solid fa-phone"></i>
                <a href="tel:670704984">+237 670704984</a>
              </li>
              <li className="display-flex">
                <i className="fa-sharp fa-solid fa-phone"></i>
                <a href="tel:+447365873385">+44 7365873385</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom display-flex">
        <div className="social-icons display-flex">
          <a
            className="display-flex"
            href="https://github.com/TallaBambo"
            target="_blank"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className="display-flex"
            href="https://wa.me/237670704984?text=Hello!%20We%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20web%20project."
            aria-label="Whatsapp"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a
            className="display-flex"
            href="https://www.linkedin.com/in/talla-bambo-9a2b093a3/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        <div className="copyright">
          <p>&copy; WebDev 247 | {new Date().getFullYear()}</p>
        </div>
      </div>
      <hr />
      <CircularProgressBar />
      <Contact />
    </footer>
  );
}

export default Footer;
