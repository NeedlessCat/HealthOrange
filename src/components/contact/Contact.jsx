import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3507.9983708681066!2d77.5820351!3d28.4494655!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbf956114e33b%3A0x4327773ce9007c72!2sBennett%20University%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20203202!5e0!3m2!1sen!2sin!4v1708680609226!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>Benette University, Greater Noida, Uttar Pradesh, India</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> torange996@gamil.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p> +91 7856412358</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
