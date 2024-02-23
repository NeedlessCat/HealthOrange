import React, { useState } from "react";
import "./courses.css";
import { online } from "../../dummydata";

const OnlineCourses = () => {
  return (
    <>
      <section className="online">
        <div className="container">
          <div id="heading">
            <h3
              style={{
                display: "inline-block",
                borderBottom: "2px solid green",
              }}
            >
              Our CheckUp Services
            </h3>
            <h1>
              Test your
              <span style={{ fontSize: "45px", color: "orange" }}>ORGANS</span>
              By our Model
            </h1>
          </div>
          <div className="content grid3">
            {online.map((val) => (
              <div className="box">
                <div className="img">
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt="" className="show" />
                </div>
                <h1>{val.courseName}</h1>
              </div>
            ))}
          </div>
          <div className="button-set">
            <button className=" btn-set1">
              <input type="file" />
              UPLOAD IMAGES<i className="fa fa-long-arrow-alt-right"></i>
            </button>
            <button className="btn-set2">
              GENERATE REPORT<i className="fa fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
