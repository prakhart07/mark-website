import "./css/style.css";
import img1 from './img/feature.jpg';
function Feature(){

    return(
        <div className="container-fluid bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mt-5 py-5 pr-lg-5">
              <h6 className="text-primary font-weight-normal text-uppercase mb-3">Why Choose Us?</h6>
              <h1 className="mb-4 section-title">20+ Years Of Expertise In The Interior Design Industry</h1>
              <p className="mb-4">We believe that each clients has distinct needs and preferences. To help you do this, we've gathered and most innovative designs to make your dream become reality. Having a plethora of ideas that can dazzle you at every turn. You are always welcomed to discuss the ideas. </p>
              <ul className="list-inline">
                <li><h5><i className="far fa-check-square text-primary mr-3" />20+ Years Experience</h5></li>
                <li><h5><i className="far fa-check-square text-primary mr-3" />Best Interior Design</h5></li>
                <li><h5><i className="far fa-check-square text-primary mr-3" />Customer Satisfaction</h5></li>
                <li><h5><i className="far fa-check-square text-primary mr-3" />Meticulous Details</h5></li>
              </ul>
              <a href className="btn btn-primary mt-3 py-2 px-4">View More</a>
            </div>
            <div className="col-lg-5">
              <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                <img className="h-100" src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Feature;