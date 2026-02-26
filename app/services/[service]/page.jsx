import { notFound } from "next/navigation";
import services from "../../_data/services.json";
import Headings from "@/app/_components/Headings";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { service } = await params;

  const singleService = services.find((s) => s.slug === service);

  if (!singleService) {
    return notFound();
  }

  return {
    title: `WebDev247 | ${singleService.title}`,
    description: singleService.intro,
  };
}

async function ServiceDetail({ params }) {
  const { service } = await params;
  const singleService = services.find((s) => s.slug === service);

  if (!singleService) {
    return notFound();
  }

  const {
    title,
    intro,
    description,
    image,
    conclusion,
    conclusion_heading,
    slug,
    icon,
    contactStatement,
  } = singleService;

  return (
    <div className="details display-flex">
      <div className="container display-flex">
        <Headings title={title} description={intro} />
      </div>
      <div className="container display-flex detail-container">
        <div className="detail-left">
          {description.map((desc, i) => (
            <div
              className="detail display-flex"
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <span className="point-dot"></span>
              <p>{desc}</p>
            </div>
          ))}
          <div className="detail-conclusion">
            <h2 className="heading secondary-heading" data-aos="fade-up">
              {conclusion_heading}
            </h2>
            {conclusion.map((clouse, i) => (
              <p key={i} data-aos="fade-up">
                {clouse}
              </p>
            ))}
            <Link
              href="/contact"
              className="btn btn-clear--light"
              data-aos="fade-up"
            >
              {contactStatement}
            </Link>
          </div>
        </div>
        <div className="detail-right">
          <div className="detail-img" data-aos="fade-up" data-aos-delay="200">
            <Image src={`/images/services/${image}`} alt={title} fill />
          </div>
          <div className="other-details display-flex">
            <h2
              className="heading secondary-heading"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              More services
            </h2>
            {services.map((service, i) => (
              <Link
                href={`/services/${service.slug}`}
                key={i}
                className={`detail-link display-flex ${service.title === title ? "active-detail" : ""}`}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <span className="display-flex icon">
                  <i className={service.icon}></i>
                </span>
                <h2>{service.title}</h2>
              </Link>
            ))}
            <div className="back-links display-flex">
              <Link
                className="btn btn-fill--light"
                href="/services"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Services <i className="fa-solid fa-gears"></i>
              </Link>
              <Link
                className="btn btn-clear--light"
                href="/"
                data-aos="fade-up"
                data-aos-delay="400"
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

export default ServiceDetail;
