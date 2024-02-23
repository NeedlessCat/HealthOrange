import React from "react";
import { testimonal } from "../../../dummydata";
import "./style.css";

const Testimonal = () => {
  return (
    <>
      <section className="testimonal padding">
        <div className="container">
          <div id="heading">
            <h3
              style={{
                display: "inline-block",
                borderBottom: "2px solid green",
              }}
            >
              TESTIMONIAL{" "}
            </h3>
            <h1>Our Client Reviews </h1>
          </div>

          <div className="content grid2">
            {testimonal.map((val) => (
              <div className="items shadow">
                <div className="box flex">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <i className="fa fa-quote-left icon"></i>
                  </div>
                  <div className="name">
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonal;
