function Headings({ title, description }) {
  return (
    <div className="headings-container display-flex">
      <div className="headings-left display-flex">
        <h2
          className="display-flex heading secondary-heading"
          data-aos="fade-up"
        >
          <span className="point-dot"></span>
          <span>{title}</span>
        </h2>
      </div>
      <div className="headings-right" data-aos="fade-up" data-aos-delay="400">
        <h2 dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}

export default Headings;
