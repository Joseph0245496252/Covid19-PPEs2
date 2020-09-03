import React from "react";

function Header() {
  return (
    <div className="container-fluid">
      <div className="row headerContainer">
        <div className="col-4">
          <img
            src={require("../images/img1.jpg")}
            alt="img1"
            className="imageSize"
          />
        </div>
        <div className="col-4">
          <img
            src={require("../images/img3.png")}
            alt="img1"
            className="imageSize"
          />
        </div>
        <div className="col-4">
          <img
            src={require("../images/ima2.png")}
            alt="img1"
            className="imageSize"
          />
        </div>
      </div>
      {/* carousel-container */}
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            {/* carousel */}
            <div
              id="carouselExampleFade"
              class="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={require("../images/img1.jpg")} className="d-block w-100 carouselimg1" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={require("../images/img3.png")} className="d-block w-100 carouselimg1" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={require("../images/ima2.png")} className="d-block w-100 carouselimg1" alt="..." />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleFade"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleFade"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
