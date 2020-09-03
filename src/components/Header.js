import React from "react";

function Header() {
  return (
      <div className="container-fluid">
        <div className="row carouselrow">
          <div className="col">
            {/* carousel */}
            <div
              id="carouselExampleFade"
              class="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={require("../images/code1.jpg")}
                    className="d-block w-100 carouselimg1"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../images/code2.jpg")}
                    className="d-block w-100 carouselimg1"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../images/code3.jpg")}
                    className="d-block w-100 "
                    alt="..."
                  />
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

  );
}

export default Header;
