import React from "react";
import { Link } from "react-router-dom";

const Head = (props) => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>
              ORANGE <span className="health">HEALTH</span>
            </h1>
            <span>HEALTHY ORGANS GURANTEES A CHEERFUL LIFE</span>
          </div>

          <div className="social">
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
            {props.name ? (
              <>
                <button className="btn1" disabled>
                  {props.name}
                </button>
                <button onClick={props.logout} className="btn2">
                  LogOut
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn1">Log In</button>
                </Link>
                <Link to="/signup">
                  <button className="btn2">Sign Up</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
