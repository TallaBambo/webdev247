import HeroDetail from "../_components/HeroDetail";

function Contact() {
  const emails = [
    {
      email: "websitedev247@gmail.com",
    },
    {
      email: "tallabambo@gmail.com",
    },
    {
      email: "websitedev247@gmail.com",
    },
  ];

  return (
    <>
      <HeroDetail
        title="connect with us"
        description="Ready to Engineer Your Digital Breakthrough? At WebDev247, we don't just answer emails; we start conversations about growth, scalability, and technical innovation. Whether you have a fully-formed brief or just a vision, our team is ready to listen and build."
        imageUrl="contact.jpg"
      />
      <section className="contact display-flex">
        <div className="container contact-container display-flex">
          <div className="contact-info-container display-flex">
            {emails.map((email, i) => (
              <div
                className="contact-info display-flex"
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <i className="fa-solid fa-envelope"></i>
                <span>
                  <a href={`mailto${email.email}`}>{email.email}</a>
                </span>
                <a
                  href={`mailto${email.email}`}
                  className="btn btn-clear--light"
                >
                  Send mail
                </a>
              </div>
            ))}
          </div>
          <div className="contact-info-container display-flex">
            <div
              className="contact-info display-flex"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <i className="fa-sharp fa-solid fa-phone"></i>
              <span>
                <a href="tel:670704984">+237 670704984</a>
              </span>
              <div className="contact-buttons display-flex">
                <a
                  href="https://wa.me/237670704984?text=Hello!%20We%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20web%20project."
                  className="btn btn-fill--light"
                  target="_blank"
                >
                  Message
                </a>
                <a href="tel:670704984" className="btn btn-clear--light">
                  Call
                </a>
              </div>
            </div>
            <div
              className="contact-info display-flex"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <i className="fa-sharp fa-solid fa-phone"></i>
              <span>
                <a href="tel:+447365873385">+44 7365873385</a>
              </span>
              <div className="contact-buttons display-flex">
                <a
                  href="https://wa.me/447365873385?text=Hello!%20We%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20web%20project."
                  className="btn btn-fill--light"
                  target="_blank"
                >
                  Message
                </a>
                <a href="tel:+447365873385" className="btn btn-clear--light">
                  Call
                </a>
              </div>
            </div>
          </div>
          <div className="contact-info-container display-flex">
            <div className="availability display-flex" data-aos="fade-up">
              <i className="fa-solid fa-location-dot"></i>
              <div className="availability-info display-flex">
                <small>On-Site: </small>
                <span>Yaounde, Cameroon</span>
              </div>
              <div className="availability-info display-flex">
                <small>Remote: </small>
                <span> Global</span>
              </div>
            </div>
            <div
              className="availability display-flex"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <i className="fa-solid fa-location-dot"></i>
              <div className="availability-info display-flex">
                <small>On-Site: </small>
                <span>Aylsbury, UK</span>
              </div>
              <div className="availability-info display-flex">
                <small> Remote: </small> <span>Global</span>
              </div>
            </div>
            <div
              className="availability display-flex"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <i className="fa-solid fa-clock"></i>
              <div className="availability-info display-flex">
                <small>On-site: </small>
                <span>Mon - Sat (08:00 - 17:00) </span>
              </div>
              <div className="availability-info display-flex">
                <small>Remote: </small>
                <span>24/7</span>
              </div>
            </div>
          </div>
          <div className="contact-info-container display-flex">
            <div className="social-icons display-flex">
              <a
                className="display-flex"
                href="https://github.com/TallaBambo"
                target="_blank"
                aria-label="GitHub"
                data-aos="fade-up"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                className="display-flex"
                href="https://wa.me/237670704984?text=Hello!%20We%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20web%20project."
                aria-label="Whatsapp"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                className="display-flex"
                href="https://www.linkedin.com/in/talla-bambo-9a2b093a3/"
                target="_blank"
                aria-label="LinkedIn"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
