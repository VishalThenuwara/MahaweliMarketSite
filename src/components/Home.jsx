import React from "react";
import { useHistory } from "react-router-dom";

import LandImg from "../images/farm_logo.svg";

const Home = () => {
  const history = useHistory();

  const getStartedClick = () => {
    history.push("/dashboard");
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={LandImg} className="landImg" alt="Landing"></img>
      </div>
      <div className="col-md-6 landCaption p-5">
        <h1 className="display-5 font-weight-bold text-dark">
          A Research on Intelligent App for Mahaweli Project
        </h1>
        <span className="lead text-dark">
          This research is done towards implementing an intelligent application
          to be used
        </span>
        <br />
        <span className="lead text-dark">
          by the farmers and seller of the Mahaweli Project in Sri Lanka
        </span>
        <br />
        <button
          type="button"
          className="btn btn-outline-primary btn-lg mt-3"
          onClick={getStartedClick}
        >
          Step Forward
        </button>
      </div>
    </div>
  );
};

export default Home;
