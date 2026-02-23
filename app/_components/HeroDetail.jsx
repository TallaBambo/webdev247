import Link from "next/link";

function HeroDetail({ title, description, imageUrl, action, target, icon }) {
  return (
    <section
      className="hero-detail display-flex bg-images"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/bgImages/${imageUrl})`,
      }}
    >
      <div className="hero-detail-content display-flex">
        <h1
          className="heading primary-heading"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {title}
        </h1>
        <p data-aos="fade-up" data-aos-delay="300">
          {description}
        </p>
        {action && (
          <Link
            href={target}
            className="btn btn-clear--light"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {action} <i className={icon}></i>
          </Link>
        )}
      </div>
    </section>
  );
}

export default HeroDetail;
