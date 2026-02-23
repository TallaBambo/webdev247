import Image from "next/image";
import Link from "next/link";
import porfolio from "./_data/portfolio.json";
import PortfolioCard from "./_components/PortfolioCard";
import Headings from "./_components/Headings";

export default function Home() {
  const featuredProjects = porfolio.slice(0, 4);

  const coreServices = [
    {
      heading: "Full stack Development",
      lang: "MERN",
      icon: "fa-solid fa-layer-group",
      description:
        "Architecture of robust, end-to-end applications using MongoDB, Express, React, and Node.js to create a seamless flow between data and design.",
    },
    {
      heading: "Web & web app development",
      lang: "React Js & Next Js",
      icon: "fa-brands fa-react",
      description:
        "Specialized in building high-performance, SEO-friendly interfaces using modern frameworks for a fast and fluid user experience.",
    },
    {
      heading: "Back-end development",
      lang: "Node Js, Express, Mongoose",
      icon: "fa-solid fa-database",
      description:
        "Building secure and scalable server-side logic with Node.js and Express, utilizing Mongoose for efficient database modeling and complex data management.",
    },
    {
      heading: "Front end development",
      lang: "HTML, CSS, JavaScript",
      icon: "fa-regular fa-window-maximize",
      description:
        "Crafting responsive, high-performance interfaces with HTML5, CSS3, and modern ES6 JavaScript, ensuring accessibility and pixel-perfect execution across all devices.",
    },
  ];

  return (
    <>
      <section className="hero display-flex">
        <div
          className="hero-content bg-images display-flex"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url('/images/bgImages/hero-bg.jpg')",
          }}
        >
          <div className="hero-slogan">
            <h1 data-aos="fade-up" data-aos-delay="200">
              <p>
                <span>W</span>eb
              </p>
              <p>
                <span>D</span>ev
              </p>
            </h1>
            <h1 data-aos="fade-up" data-aos-delay="400">
              24<span>/</span>7
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="600">
              Empowering your brand with high-performance web experiences.
            </h2>
            <p data-aos="fade-up" data-aos-delay="800">
              Transform your ideas into cutting-edge web solutions. We
              specialize in crafting stunning websites and web applications
              providing round-the-clock support to ensure your online presence
              thrives day and night.
            </p>
            <div className="hero-btn display-flex">
              <Link
                href="/contact"
                className="btn btn-fill--light"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                Get a free quote
              </Link>
              <Link
                href="/portfolio"
                className="btn btn-clear--light"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                Projects overview
                <i className="fa-solid fa-circle-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="expertise display-flex">
        <div className="container">
          <Headings
            title="Our core expertise"
            description="We help businesses and founders turn ideas into functional, scalable digital products. Every project is built with performance, clarity, and long-term growth in mind."
          />
          <div className="expertise-container display-flex">
            <div className="expertise-section expertise-section-1 display-flex">
              {coreServices.map((service, i) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={(i + 1) * 100}
                  className="expertise-service display-flex"
                  key={i}
                >
                  <span className="display-flex">
                    <i className={service.icon}></i>
                  </span>
                  <div>
                    <h2>
                      {service.heading} <br />
                      <small>({service.lang})</small>
                    </h2>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="expertise-images display-flex">
              <div className="expertise-section expertise-section-2 display-flex">
                <div
                  className="expertise-service-heading"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h1>Core services offered</h1>
                </div>
                <div
                  className="expertise-img"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <Image
                    src="/images/expertise-1.webp"
                    alt="Web Dev 247 Services Image"
                    fill
                  />
                </div>
              </div>
              <div className="expertise-section expertise-section-3 display-flex">
                <div
                  className="expertise-img"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <Image
                    src="/images/expertise-2.webp"
                    alt="Web Dev 247 Services Image"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="experiences display-flex">
        <div className="experience-container container display-flex">
          <div className="experience" data-aos="fade-up" data-aos-delay="200">
            <h2>Years of professional web development</h2>
            <h1>
              <span>4</span>
              <small>+</small>
            </h1>
          </div>
          <div className="experience" data-aos="fade-up" data-aos-delay="400">
            <h2>Successful websites & projects delivered</h2>
            <h1>
              <span>17</span>
              <small>+</small>
            </h1>
          </div>
        </div>
      </section>
      <section className="expertise display-flex">
        <div className="container">
          <Headings
            title="Selected projects"
            description="Explore a selection of our projects, showcasing a blend of creativity and technical expertise. Each project reflects a commitment to delivering high-quality, user-centric web solutions that drive results and elevate online presence."
          />
        </div>
      </section>
      <section className="portfolio display-flex">
        <div className="container display-flex">
          <div className="portfolio-container display-flex">
            <PortfolioCard portfolio={featuredProjects} />
          </div>
        </div>
        <p className="contact-link" data-aos="fade-up">
          Have a project in mind? <Link href="/contact">Let's realize it.</Link>
        </p>
      </section>
      <section
        className="cta display-flex bg-images"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(/images/bgImages/cta-bg.jpg)",
        }}
      >
        <div className="container display-flex">
          <div className="cta-container display-flex">
            <div className="cta-left display-flex" data-aos="fade-up">
              <h2 className="heading secondary-heading display-flex">
                <span className="point-dot"></span>let's work together
              </h2>
              <h1>Ready to improve your online presence?</h1>
              <Link href="/contact" className="btn btn-clear--light">
                Start from here!{" "}
                <i className="fa-solid fa-circle-chevron-right"></i>
              </Link>
            </div>
            <div className="cta-right" data-aos="fade-up" data-aos-delay="200">
              <p>
                We specialize in bridging the gap between a rough concept and a
                high-performance digital product. Whether you are a startup or
                an established business, we are ready to join your journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
