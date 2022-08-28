import React from "react";
import { useNavigate } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Chan_profile from "./chan.jpg";
import "./About.css";

const About = () => {
  const navigate = useNavigate();
  library.add(faFacebookF);

  return (
    <div>
      <div className="profile_container">
        <div className="cover-photo">
          <img src={Chan_profile} className="profile" />
        </div>

        <div className="profile-name">Park Chan</div>

        <p className="about">
          User Interface Design
          <br />
          Front-end develop
        </p>

        <button className="msg-btn">Message</button>
        <button className="follow-btn">Following</button>

        <div>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default About;
