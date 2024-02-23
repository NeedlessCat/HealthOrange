import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div id="heading">
              <h3>
                WELCOME TO ORANGE <span className="health">HEALTH</span>{" "}
              </h3>
              <h1>
                MAY BE YOU ARE <span className="health">NOT FIT</span> INSIDE...
              </h1>
            </div>
            <p>Check yourself with us RIGHT NOW</p>
            <button className="primary-btn start-btn">
              GET STARTED NOW<i className="fa fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
