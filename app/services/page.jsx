import Link from "next/link";
import Headings from "../_components/Headings";
import HeroDetail from "../_components/HeroDetail";
import ServiceCard from "../_components/ServiceCard";
import Image from "next/image";

export const metadata = {
  title: "WebDev-247 | Comprehensive Digital Engineering for a Global Economy.",
  description:
    "At WebDev247, we don't just build websites; we engineer digital ecosystems. Since 2022, we have been providing high-performance services in Cameroon and abroad, ensuring every project is backed by technical excellence and round-the-clock support.",
};

function Services() {
  return (
    <>
      <HeroDetail
        title="What we offer"
        description="Comprehensive Digital Engineering for a Local and Global Economy. we focus on bridging the gap between complex business challenges and scalable technical solutions. Every service we offer is built on our three core pillars: Clarity, Collaboration, and Long-Term Value."
        imageUrl="services-bg.jpg"
      />
      <section className="services display-flex">
        <div className="container display-flex">
          <Headings
            title="Our Services"
            description="At WebDev247, we don't just build websites; we engineer digital ecosystems. We provide high-performance services in Cameroon and abroad, ensuring every project is backed by technical excellence and round-the-clock support."
          />
          <div className="services-container display-flex">
            <div className="services-left">
              <ServiceCard />
            </div>
            <div className="services-right display-flex">
              <div
                className="service-img"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Image src="/images/services.jpg" alt="WebDev247" fill />
              </div>
              <div className="services-cta display-flex">
                <h1 data-aos="fade-up">
                  Let’s build something that grows with you.
                </h1>
                <p data-aos="fade-up">
                  Whether you are looking to launch a complex application or
                  optimize your current ecosystem, we provide the clarity and
                  engineering precision needed to succeed in a global economy.
                </p>
                <Link
                  href="/contact"
                  className="btn btn-clear--light"
                  data-aos="fade-up"
                >
                  Let's start a project{" "}
                  <i className="fa-solid fa-phone-flip"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
