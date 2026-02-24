import Image from "next/image";
import Headings from "../_components/Headings";
import HeroDetail from "../_components/HeroDetail";
import Link from "next/link";

export const metadata = {
  title: "About WebDev247 | Full-Stack Excellence in Cameroon.",
  description:
    "WebDev247 is a web development collective in Cameroon. We engineer high-performance, scalable digital solutions for global and local businesses.",
  openGraph: {
    title: "WebDev247 - Shaping the Digital Future of Cameroon",
    description: "Specializing in Next.js, React, and Full-Stack Engineering.",
    url: "https://webdev247.netlify.app/about-us",
    siteName: "WebDev-247",
    locale: "en_CM",
    type: "website",
  },
};

function AboutUs() {
  return (
    <>
      <HeroDetail
        title="About WebDev247"
        description="WebDev247 is a web development collective in Cameroon. We engineer high-performance, scalable digital solutions for global and local businesses."
        imageUrl="about-us.jpg"
      />
      <section className="about-us display-flex">
        <div className="container display-flex about-us-container">
          <Headings
            title="About Us"
            description="We are a team of web development service providers based in Cameroon serving clients and businesses locally and globally since <span>2022</span>. We are passionate about crafting high-quality web solutions that drive growth and innovation."
          />
          <div className="about-me display-flex">
            <div className="about-me-top display-flex">
              <div className="about-me-top-left display-flex">
                <h2
                  className="heading secondary-heading display-flex"
                  data-aos="fade-up"
                >
                  <span className="point-dot"></span>
                  <span>About the founder</span>
                </h2>
                <h3 data-aos="fade-up">
                  A developer driven by purpose and ambition.
                </h3>
              </div>
              <div className="about-me-top-right" data-aos="fade-up">
                <p>
                  Based in Yaoundé, Cameroon, our founder is a web developer
                  focused on building meaningful digital experiences. With over
                  4 years of hands-on expertise, he turns complex ideas into
                  clean, functional solutions that define the technical
                  excellence of WebDev247.
                </p>
              </div>
            </div>
            <div className="about-me-bottom display-flex">
              <div className="about-me-bottom-left display-flex">
                <div className="team-intro display-flex">
                  <div className="team-intro-image">
                    <Image
                      data-aos="fade-up"
                      src="/images/team-intro.jpg"
                      alt="Talla Bambo Blaise. Founder of WebDev247"
                      fill
                    />
                  </div>
                  <Link
                    href="/contact"
                    className="btn btn-clear--light"
                    data-aos="fade-up"
                  >
                    Contact the team{" "}
                    <i className="fa-solid fa-circle-chevron-right"></i>
                  </Link>
                </div>
                <div className="founder-img" data-aos="fade-up">
                  <Image
                    src="/images/team/founder.jpeg"
                    alt="Talla Bambo Blaise. Founder of WebDev247"
                    fill
                  />
                </div>
              </div>
              <div className="about-me-bottom-right display-flex">
                <h2 data-aos="fade-up">
                  <span data-aos="fade-up" className="display-flex">
                    <i className="fa-solid fa-quote-left"></i>
                  </span>
                  At WebDev247, every project is approached with clarity,
                  collaboration, and long-term value in mind. We don't just
                  build for today; we build for the future with long-term goals
                  in mind.
                </h2>
                <div className="name-title" data-aos="fade-up">
                  <h1>Talla Bambo Blaise</h1>
                  <h3>Founder & Lead developer</h3>
                </div>
                <hr data-aos="fade-up" />
                <ul>
                  <li className="display-flex" data-aos="fade-up">
                    <span>
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    <small>Founder & lead developer at WebDev247.</small>
                  </li>
                  <li className="display-flex" data-aos="fade-up">
                    <span>
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    <small>
                      Specialized in modern full-stack performance-focused web
                      development.
                    </small>
                  </li>
                  <li className="display-flex" data-aos="fade-up">
                    <span>
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    <small>
                      Experienced working with startups, established businesses
                      and personal brands.
                    </small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="meet-the-team display-flex">
            <div className="team-member" data-aos="fade-up">
              <div className="member-image">
                <div className="member-profile">
                  <Image
                    src="/images/team/member.png"
                    alt="Tarla Gerald, Tester"
                    fill
                  />
                </div>
              </div>
              <div className="member-info display-flex">
                <h2 className="heading secondary-heading">Gerald Njingti</h2>
                <h3>Project Manager & Web Tester</h3>
              </div>
              <div className="member-responsibility">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  enim veritatis laudantium velit quis dolore voluptas
                  consequuntur, harum sed quibusdam?
                </p>
              </div>
            </div>
            <div
              className="team-member"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="member-image">
                <div className="member-profile">
                  <Image
                    src="/images/team/member.png"
                    alt="Tala Villigram, Consultant"
                    fill
                  />
                </div>
              </div>
              <div className="member-info display-flex">
                <h2 className="heading secondary-heading">Villigram Nkeh</h2>
                <h3>Consultant & technical adviser</h3>
              </div>
              <div className="member-responsibility">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias, dolores porro eaque sunt repellendus minus ad molestiae
                  quam itaque qui! Voluptates, incidunt!
                </p>
              </div>
            </div>
          </div>
          <div className="aproach display-flex">
            <div className="aproach-left display-flex">
              <h2
                className="heading secondary-heading display-flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="point-dot"></span>
                <span>Work process</span>
              </h2>
              <h1 data-aos="fade-up" data-aos-delay="400">
                Webdev247 project delivery roadmap
              </h1>
              <p data-aos="fade-up" data-aos-delay="600">
                We transform vision into reality through a structured,
                results-driven methodology that ensures precision at every stage
                of development.
              </p>
              <Link
                href="/contact"
                className="btn btn-clear--light"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                get a free quote!{" "}
                <i className="fa-solid fa-circle-chevron-right"></i>
              </Link>
            </div>
            <div className="aproach-right display-flex">
              <div className="stages display-flex">
                <div className="stage-line display-flex" data-aos="fade-up">
                  <div className="stage display-flex">
                    <span>01</span>
                    <h2 className="heading secondary-heading">
                      Discovery & Strategy
                    </h2>
                    <p>
                      We dive deep into your goals to turn complex ideas into a
                      clear technical roadmap.
                    </p>
                  </div>
                </div>
                <div className="stage-line display-flex" data-aos="fade-up">
                  <div className="stage display-flex">
                    <span>02</span>
                    <h2 className="heading secondary-heading">
                      Agile Development
                    </h2>
                    <p>
                      We build in iterative sprints, ensuring constant
                      collaboration and flexibility as the project evolves.
                    </p>
                  </div>
                </div>
                <div className="stage-line display-flex" data-aos="fade-up">
                  <div className="stage display-flex">
                    <span>03</span>
                    <h2 className="heading secondary-heading">
                      Quality Assurance
                    </h2>
                    <p>
                      Every line of code is tested for high performance,
                      responsiveness, and security.
                    </p>
                  </div>
                </div>
                <div className="stage-line display-flex" data-aos="fade-up">
                  <div className="stage display-flex">
                    <span>04</span>
                    <h2 className="heading secondary-heading">
                      Deployment & Support
                    </h2>
                    <p>
                      We launch your solution and provide ongoing value to
                      ensure long-term digital success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="cta display-flex bg-images"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(/images/bgImages/about-cta.jpg)",
          backgroundPosition: "top left",
        }}
      >
        <div className="container display-flex">
          <div className="cta-container display-flex">
            <div className="cta-left display-flex" data-aos="fade-up">
              <h2 className="heading secondary-heading display-flex">
                <span className="point-dot"></span>let's work together
              </h2>
              <h1>Ready to scale your business through web programming?</h1>
              <Link href="/contact" className="btn btn-clear--light">
                Connect with us!{" "}
                <i className="fa-solid fa-circle-chevron-right"></i>
              </Link>
            </div>
            <div className="cta-right" data-aos="fade-up" data-aos-delay="200">
              <p>
                Whether you are looking to dominate the local market in Cameroon
                or scale your brand across the globe, we are ready to engineer
                your success. Let’s collaborate to build a web ecosystem that
                works for you 24/7. Reach out today and let’s turn your vision
                into a high-performance reality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
