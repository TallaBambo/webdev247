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
        description="Redefining Web Development in Cameroon since 2022: Turning complex technical challenges into high-performance digital realities for a global economy."
        imageUrl="portfolio.jpg"
      />
      <section className="portfolio display-flex">
        <div className="container">
          <Headings
            title="Our projecs overview"
            description="We specialize in turning complex technical challenges into clean, functional, and scalable solutions. Explore how we’ve engineered success through years of hands-on expertise and modern web development technology in Cameroon and globally."
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
