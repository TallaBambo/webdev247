import Link from "next/link";
import HeroDetail from "../_components/HeroDetail";
import PortfolioCard from "../_components/PortfolioCard";
import porfolio from "../_data/portfolio.json";
import Headings from "../_components/Headings";

function Portfolio() {
  return (
    <>
      <HeroDetail
        title="Our Portfolio"
        description="We specialize in turning complex technical challenges into clean, functional, and scalable solutions. Explore how we’ve engineered success through years of hands-on expertise and modern web development technology in Cameroon and globally."
        imageUrl="portfolio.jpg"
      />
      <section className="portfolio display-flex">
        <div className="container">
          <Headings
            title="Our projecs overview"
            description="Your project could be our next masterpiece. We have the tools, the expertise, and the vision to turn your business goals into a technical reality. Are you ready to scale? Contact us today to discuss your project and let's build something extraordinary together."
          />
        </div>
        <div className="container display-flex">
          <div className="portfolio-container display-flex">
            <PortfolioCard portfolio={porfolio} />
          </div>
        </div>
        <p className="contact-link" data-aos="fade-up">
          Have a project in mind? <Link href="/contact">Let's realize it.</Link>
        </p>
      </section>
    </>
  );
}

export default Portfolio;
