import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar fixed-top navbar-expand-md navbar-dark scrolling-navbar">
        <Link className="navbar-brand" hred="#">
          <strong className="navbar-item">Covid 19 PPEs</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#sticky-nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="sticky-nav">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item navbarSection">
              <Link href="#" className="nav-link active">
                <strong className="navbar-item">Home</strong>
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="#" className="nav-link">
                <strong className="navbar-item">About</strong>
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="#" className="nav-link">
                <strong className="navbar-item">Service</strong>
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="#" className="nav-link">
                <strong className="navbar-item">Contact</strong>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="view">
        {/* <div className="flex-center">
        <Link href="#scroll" className="btn-primary">Scrll Down</Link>
      </div> */}
      </div>

      <div className="container-fluid">
        <div className="row bold">
          <div className="col-md-12">
            <b align="justify">
              We are delivering to your door post with limited shipping options.
              Please expect extended delivery time.
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
