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
              <div className="carousel-inner code01">
                <div className="carousel-item active">
                  <img
                    src={require("../images/code01.png")}
                    className="d-block w-100 carouselimg1"
                    alt="..."
                  />
                </div>
                <div className="carousel-item code02">
                  <img
                    src={require("../images/code02.png")}
                    className="d-block w-100 carouselimg1"
                    alt="..."
                  />
                </div>
                <div className="carousel-item code03">
                  <img
                    src={require("../images/code03.png")}
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
