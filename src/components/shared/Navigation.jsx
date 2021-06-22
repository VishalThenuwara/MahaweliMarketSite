import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../images/logo.png";

const Navigaion = () => {
  return (
    <div className="row">
      <div className="col-md-12 m-0 p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav ml-auto">
            <img
              src={LogoImg}
              className="mx-auto d-block logo"
              alt="Avatar"
              width="50px"
            />
            <span className="navbar-brand mb-0 h1 ml-3">
              <Link to="/" className="nav-link p-0 text-light">
                Mahaweli Intelligent App
              </Link>
            </span>
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mr-5" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <span className="font-weight-bold text-light">20_21-J11</span>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigaion;
