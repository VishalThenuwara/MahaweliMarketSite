import React from "react";
import SodImg from "../images/sod.png";
import ThamalImg from "../images/thamal.png";
import AnuththaraImg from "../images/anuththara.jpg";
import GopikaImg from "../images/gopika.jpg";
import VishalImg from "../images/vishal.jpg";
import FinalThesisGroup from "../documents/Thesis-Group.pdf";
import Poster from "../documents/Poster.pdf";
import VishalThesis from "../documents/vishal_thesis.pdf";
import ThamalThesis from "../documents/thamal_thesis.pdf";
import AnuththaraThesis from "../documents/anuththara_thesis.pdf";
import GopikaThesis from "../documents/gopika_thesis.pdf";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-md-10">
          <div className="row">
            <div class="card">
              {/* <div class="card-header">
                <h4>Introduction</h4>
              </div> */}
              <div class="card-body" style={{ backgroundColor: "#F6F7D4" }}>
                <h3>
                  <b>Introduction</b>
                </h3>
                <p align="justify">
                  During the ancient kingdoms Sri Lanka was leading agrarian
                  societies in the world. Sri Lanka has a great standing history
                  for the agriculture and became paddy cultivation destination
                  at that time. In that time agricultural purposes were narrowed
                  and mainly forcing for the domestic consumptions. Sri Lanka
                  faced significant changes during the colony era in every
                  industry. Therefore, agriculture industry also changed.it
                  changed to the trade and international market over consumption
                  basis agriculture. Considering agriculture there are mainly 4
                  categories we can categorized, Planting, Fishing, livestock
                  and forestry and further we can divide into 16 subcategories
                  for accomplishing better understand. In this research we
                  considered only plantation agriculture. As mention before
                  agriculture is the one of most important economical industry
                  of the country. In Mahaweli area consider as a dry zone of the
                  country and mainly cultivated rice. Approximately 95 percent
                  of domestic needs cultivated from here. Considering Mahaweli
                  area it devoted form ‘Mahaweli Ganga’. In 1977 government
                  decided to further develop the project in order to make
                  country in self-sufficient in rice. They originally decided to
                  cultivate 450,000 acres from 900,000 acres. But due to the
                  irrigation issues Mahaweli project estimate to cultivate about
                  500,000 acres in dry zone of the land and more than 140,000
                  families were settled there. In addition, 71,000 acres
                  developed in Mahaweli H existing cultivated 80,000 acres land.
                  The elaboration of the technology for this industry is lack
                  comparing to other industries. Therefore, the one of main
                  economical important industry may perform under the expected
                  level. If the technology involved more productivity will be
                  increased. As a final year undergraduate student, we decided
                  to introduce new system for Mahaweli project under four
                  aspects. Harvest prediction for next cultivated season, Plant
                  healthiness, Market analysis predicts next cultivated crops
                  market price and Trade platform used for meets sellers and
                  buyers will be developed as our main four components in the
                  system. We believe using our system farmers can cultivate and
                  get an expected income.{" "}
                </p>
              </div>
            </div>

            <div class="card mt-1">
              <div class="card-body" style={{ backgroundColor: "#D2F6C5" }}>
                <h3>
                  <b>Research Problem</b>
                </h3>
                <p align="justify">
                  The purpose of the research is to analyze and predict harvest
                  requirements, healthiness of a crop and the marketplace of the
                  specific crop for Mahaweli project farmers in Sri Lanka. And
                  to develop a trade platform for buyers and sellers.​
                </p>
              </div>
            </div>

            <div class="card mt-1">
              <div class="card-body" style={{ backgroundColor: "#99F3BD" }}>
                <h3>
                  <b>Completed Objectives</b>
                </h3>
                <p align="justify">
                  <b>
                    The main objective of this research is to develop the Sri
                    Lanka's agriculture with collaborating Mahaweli farmers. and
                    also to provide a quality predictions based on specific
                    factors and provide correct predictions to the farmers to
                    manage their works.​
                  </b>
                  <br />
                  To provide reliable predictions based on harvest requirements
                  for next year based on past results set.​
                  <br /> To measure the healthiness of some selected crops.{" "}
                  <br /> To provide reliable predictions of available
                  marketplace for given crop.
                  <br /> To develop trade platform for crop buying and selling.
                </p>
              </div>
            </div>

            <div class="card mt-1">
              <div class="card-body" style={{ backgroundColor: "#28DF99" }}>
                <h3>
                  <b>Summery</b>
                </h3>
                <p align="justify">
                  Mahaweli market is next generation mobile application to solve
                  basic but important requirements of Mahaweli farmers in Sri
                  Lanka. The proposed solution as separate harvest predicting
                  module which consists of sub functionalities for climate
                  prediction real time selling price demonstration component and
                  harvest forecasting feel requirements of farmers. Technically
                  the weather forecast is done for next coming seven days, and
                  it is done using open weather API. Real time data collection
                  is done using firebase real-time database. Harvest forecasting
                  for next season is a critical requirement. Future of the
                  application is more about finding out further environmental
                  features to increase the accuracy of models. Currently the
                  harvesting module specifically solves all the requirements of
                  Mahaweli farmers is fulfilled and the objective of creating
                  such module is successfully achieved with expectations of
                  further development. Farmers and seller have measured the
                  healthiness of their cultivation by just human eye level. But
                  that method brings lots of problem towards selling their crops
                  to a correct pricing. They cannot even categorize their
                  cultivated crops according to different healthiness levels.
                  That may become a huge disadvantage towards farmers and
                  sellers when selling they’re crops with low prices to
                  customers. That is the problem and reason to develop a
                  platform to address the healthiness levels for specific crops
                  with a very easy manner. Further, this component of the
                  application is developed to use with ease to the users.
                  Farmers or sellers who uses this application simply need to
                  hold their camera phone by their desired crop and the
                  application will generate a prediction of healthiness with the
                  name of the crop in real-time. In this system introduced new
                  algorithm can be used for the stock prediction. The proposed
                  solution provides predicts stock prices thought the use of
                  Linear Regression algorithm. Most of numeric value's
                  prediction done by through the Linear regression. With the
                  prevailing challenges in the country like pandemics, economy,
                  digitalization Mahaweli Market App suggests extraordinary
                  solution to the government. It has become the most prominent
                  platform to connect buyers, sellers and government officials
                  together under one roof. All the most important features
                  integrated to the application which were tabled on feasibly
                  study discussions and meetings. Specifically in harvest
                  prediction 67 analysis, it shows the relationship between
                  weather and harvest is linear. Also, Market prices increases
                  linearly. These conclusions help the solution to predict
                  values with least error. Also considering the theory of
                  matching applied in trade platform using KNearest Neighbors.
                  The crops images are processed to identify the healthiness of
                  the crop. Nature of such dataset reveals the use of Keras
                  Sequential Model for predictions. Basically, the app provides
                  different aspects of cultivation process ease with decision
                  making. Hence larger portion of the future of cultivation in
                  Sri Lanka will be handled by Mahaweli Market App.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="row">
            <div class="card profileCard">
              <div class="card-header">
                <h5>
                  Documents with <br />
                  Team Members
                </h5>
              </div>
              <div class="card-body">
                <a
                  href={FinalThesisGroup}
                  className="card-link m-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="far fa-file-pdf"></i>
                  <span className="ml-3">
                    <b>Final Thesis - Group</b>
                  </span>
                </a>
                <a
                  href={Poster}
                  className="card-link m-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="far fa-file-pdf"></i>
                  <span className="ml-3">
                    <b>Research Poster</b>
                  </span>
                </a>
                <img
                  src={VishalImg}
                  className="profileImage mt-4 mx-auto d-block"
                  alt="Avatar"
                  align="center"
                />
                <p className="mt-2" align="center">
                  <b>
                    Thenuwara V. S. <br />
                    IT16073760
                    <a
                      href={VishalThesis}
                      className="card-link m-3 indThesis"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="far fa-file-pdf"></i>
                      <span className="ml-1">Thesis</span>
                    </a>
                  </b>
                </p>

                <img
                  src={ThamalImg}
                  className="profileImage mt-4 mx-auto d-block"
                  alt="Avatar"
                />
                <p className="mt-2" align="center">
                  <b>
                    Wijetunge W. P. T. T. <br />
                    IT17167024
                    <a
                      href={ThamalThesis}
                      className="card-link m-3 indThesis"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="far fa-file-pdf"></i>
                      <span className="ml-1">Thesis</span>
                    </a>
                  </b>
                </p>

                <img
                  src={AnuththaraImg}
                  className="profileImage mt-4 mx-auto d-block"
                  alt="Avatar"
                />
                <p className="mt-2" align="center">
                  <b>
                    Kavindi H. G. A. <br />
                    IT17178150
                    <a
                      href={AnuththaraThesis}
                      className="card-link m-3 indThesis"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="far fa-file-pdf"></i>
                      <span className="ml-1">Thesis</span>
                    </a>
                  </b>
                </p>

                <img
                  src={GopikaImg}
                  className="profileImage mt-4 mx-auto d-block"
                  alt="Avatar"
                />
                <p className="mt-2" align="center">
                  <b>
                    De Silva D. K. G. <br />
                    IT17172806
                    <a
                      href={GopikaThesis}
                      className="card-link m-3 indThesis"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="far fa-file-pdf"></i>
                      <span className="ml-1">Thesis</span>
                    </a>
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-2">
        <div className="col-md-12">
          <div class="card">
            <div class="card-body">
              <h3>
                <b>System Overview Diagram</b>
              </h3>
              <img
                src={SodImg}
                className="mx-auto d-block"
                alt=""
                align="center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
