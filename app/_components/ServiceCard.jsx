"use client";
import { Fragment } from "react";
import Link from "next/link";
import services from "../_data/services.json";

function ServiceCard() {
  return (
    <>
      {services.map((service, i) => (
        <Fragment key={i}>
          <div className="service display-flex">
            <div className="service-left display-flex">
              <span className="display-flex icon" data-aos="fade-up">
                <i className={service.icon}></i>
              </span>
              <div data-aos="fade-up" data-aos-delay="200">
                <h2 className="heading secondary-heading">{service.title}</h2>
                <p>{service.intro}</p>
              </div>
            </div>
            <div className="service-right display-flex">
              <Link
                href={`/services/${service.slug}`}
                className="btn btn-clear--light"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Service Detail<i className="fa-regular fa-eye"></i>
              </Link>
            </div>
          </div>
          <hr />
        </Fragment>
      ))}
    </>
  );
}

export default ServiceCard;
