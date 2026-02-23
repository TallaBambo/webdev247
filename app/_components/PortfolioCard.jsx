import Image from "next/image";
import Link from "next/link";

function PortfolioCard({ portfolio }) {
  return (
    <>
      {portfolio.map((project, index) => (
        <div
          key={index}
          className="portfolio-card display-flex"
          data-aos="fade-up"
          data-aos-delay={index * 200}
        >
          <div className="portfolio-img">
            <Image src={project.image} alt={project.title} fill />
            <div className="portfolio-overlay display-flex"></div>
          </div>
          <div className="portfolio-content display-flex">
            <h3>{project.title}</h3>
            <div className="portfolio-tech display-flex">
              {project.tech.map((tech, j) => (
                <span key={j}>{tech}</span>
              ))}
            </div>
          </div>
          <div className="portfolio-link">
            <Link
              href={`/portfolio/${project.slug}`}
              className="portfolio-link"
            >
              <span className="point-dot"></span>{" "}
              <span>View project detail</span>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default PortfolioCard;
