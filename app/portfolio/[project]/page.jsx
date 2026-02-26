import Headings from "@/app/_components/Headings";
import portfolio from "../../_data/portfolio.json";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { project } = await params;

  const singleProject = portfolio.find((p) => p.slug === project);

  if (!singleProject) {
    return notFound();
  }

  return {
    title: `WebDev247 | ${singleProject.title}`,
    description: singleProject.description,
  };
}

async function Porfolio({ params }) {
  const { project } = await params;
  const singleProject = await portfolio.find((p) => p.slug === project);

  if (!singleProject) {
    return notFound();
  }

  const {
    title,
    description,
    techStack,
    problemsSolutions,
    conclusion,
    image,
    tech,
  } = singleProject;

  return (
    <div className="details display-flex">
      <div className="container display-flex">
        <Headings title={title} description={description} />
      </div>
      <div className="container display-flex detail-container">
        <div className="detail-left">
          <h2 className="heading secondary-heading">
            Web development tech stack
          </h2>
          {techStack.map((tech, i) => (
            <div
              className="detail display-flex"
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <span className="point-dot"></span>
              <p>
                <span>{tech.techName}</span> {tech.purpose}
              </p>
            </div>
          ))}
          {problemsSolutions.length > 0 && (
            <>
              <h2 className="heading secondary-heading" data-aos="fade-up">
                Challenges/Solutions
              </h2>
              {problemsSolutions.map((problem, i) => (
                <div className="detail display-flex" key={i}>
                  <span className="point-dot" data-aos="fade-up"></span>
                  <div className="problems-solutions">
                    <strong
                      className="heading secondary-heading"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      {problem.problem}
                    </strong>
                    <br />
                    {problem.solutions.map((solution, index) => (
                      <p
                        dangerouslySetInnerHTML={{ __html: solution }}
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={i * 100}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
          <div className="detail-conclusion">
            <p data-aos="fade-up">{conclusion}</p>
            <Link
              href="/contact"
              className="btn btn-clear--light"
              data-aos="fade-up"
            >
              Start Your Project
            </Link>
          </div>
        </div>
        <div className="detail-right">
          <div className="detail-img" data-aos="fade-up" data-aos-delay="200">
            <Image src={image} alt={title} fill />
          </div>
          <div className="back-links display-flex">
            <div className="portfolio-tech display-flex">
              {tech.map((tech, j) => (
                <span key={j} data-aos="fade-up" data-aos-delay={j * 100}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="other-details display-flex">
            <h2
              className="heading secondary-heading"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              More Projects
            </h2>
            {portfolio.map((project, i) => (
              <Link
                href={`/portfolio/${project.slug}`}
                key={i}
                className={`detail-link display-flex ${project.title === title ? "active-detail" : ""}`}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <span className="display-flex icon">
                  <small>{i < 10 ? `0${i + 1}` : i + 1}</small>
                </span>
                <h2>{project.title}</h2>
              </Link>
            ))}

            <div className="back-links display-flex">
              <Link
                className="btn btn-fill--light"
                href="/portfolio"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                portfolio <i className="fa-solid fa-briefcase"></i>
              </Link>
              <Link
                className="btn btn-clear--light"
                href="/"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Home page <i className="fa-solid fa-house"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Porfolio;
