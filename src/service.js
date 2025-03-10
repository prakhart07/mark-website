import "./css/style.css";

function Service(){

    return(
        <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 pr-lg-5">
              <h6 className="text-primary font-weight-normal text-uppercase mb-3">Our Awesome Services</h6>
              <h1 className="mb-4 section-title">Awesome Designing Services For Your Home</h1>
              <p>M.ark Design Studio creates innovative, functional, and visually striking architectural solutions for townships, commercial spaces, and residential developments. designing firm that offers design and decorating solutions to residential and small scale commercial projects.</p>
              <a href className="btn btn-primary mt-3 py-2 px-4">View More</a>
            </div>
            <div className="col-lg-6 p-0 pt-5 pt-lg-0">
              <div className="owl-carousel service-carousel position-relative">
                <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                  <h3 className="flaticon-bedroom display-3 font-weight-normal text-primary mb-3" />
                  <h5 className="mb-3">Architecture</h5>
                  <p className="m-0">M.ark Design Studio, we provide comprehensive architectural design services with a focus
on modern and functional aesthetics. With extensive expertise in spatial planning, we
understand how people, organisations, and communities interact with their environments.
Our collaborative approach ensures innovative and tailored solutions for both
residential and commercial spaces.</p>
                </div>
                <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                  <h3 className="flaticon-kitchen display-3 font-weight-normal text-primary mb-3" />
                  <h5 className="mb-3">Interior Designs</h5>
                  <p className="m-0">We specialise in designing sophisticated and functional interior spaces that enhance both
living and working environments. Our team is committed to delivering the highest standards
in interior design for a diverse range of projects, including corporate offices, academic.</p>
                </div>
                <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                  <h3 className="flaticon-bathroom display-3 font-weight-normal text-primary mb-3" />
                  <h5 className="mb-3">Construction</h5>
                  <p className="m-0">Our construction services are built on a foundation of quality, efficiency, and meticulous
attention to detail. We prioritize smart building practices and sustainable solutions to ensure
long-term success. With a commitment to excellence, we deliver projects that seamlessly
blend aesthetics with structural integrity.</p>
                </div>
                <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                  <h3 className="flaticon-bathroom display-3 font-weight-normal text-primary mb-3" />
                  <h5 className="mb-3">Landscape Services</h5>
                  <p className="m-0">Landscape design is the art of arranging or modifying the features of a yard, an urban area,
etc., for aesthetic or practical reasons. For organizational purposes, it is often divided into two
major parts: hardscape and softscape.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Service;