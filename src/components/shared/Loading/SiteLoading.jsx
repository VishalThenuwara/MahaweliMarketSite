import React, { Component } from "react";
import "./SiteLoading.css";

class SiteLoading extends Component {
  render() {
    return (
      <div className="overlay" align="center">
        <img
          className="logo"
          id="loading"
          src={require("./Loading.gif")}
          alt="inner"
          width={100}
          height={100}
        />
      </div>
    );
  }
}

export default SiteLoading;
