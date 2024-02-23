import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>MailLetter - Share your query or reviews with us here</h1>
            <span>Stay healthy, Stay happy</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <div className="legal">
        <p>
          Copyright ©2024 All rights reserved | This template is made by
          Aayush/NeedlessCat
        </p>
      </div>
    </>
  );
};

export default Footer;
