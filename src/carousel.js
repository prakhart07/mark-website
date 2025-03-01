import './css/style.css';
import img1 from './img/carousel-1.jpg';
import img2 from './img/carousel-2.jpg';
import img3 from './img/front.jpeg';

function Carousel(){

    return(
        <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={img3} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: '800px'}}>
                  <h4 className="text-primary text-uppercase font-weight-normal mb-md-3">Creative Interior Design</h4>
                  <h3 className="display-3 text-white mb-md-4">Improve your living space</h3>
                  <a href className="btn btn-primary py-md-3 px-md-5 mt-2 mt-md-4">Learn More</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={img2} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: '800px'}}>
                  <h4 className="text-primary text-uppercase font-weight-normal mb-md-3">Creative Interior Design</h4>
                  <h3 className="display-3 text-white mb-md-4">Modular kitchens with a creative flair</h3>
                  <a href className="btn btn-primary py-md-3 px-md-5 mt-2 mt-md-4">Learn More</a>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
            <div className="btn btn-primary" style={{width: '45px', height: '45px'}}>
              <span className="carousel-control-prev-icon mb-n2" />
            </div>
          </a>
          <a className="carousel-control-next" href="#header-carousel" data-slide="next">
            <div className="btn btn-primary" style={{width: '45px', height: '45px'}}>
              <span className="carousel-control-next-icon mb-n2" />
            </div>
          </a>
        </div>
      </div>
    )
}

export default Carousel;