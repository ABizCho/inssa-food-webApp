import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Chan_profile from "./chan.jpg";
import Hong_profile from "./Hong.jpg";
import "./About.css";

import { Link } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const ButtonMailto = ({ mailto, label }) => {
    return (
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    );
  };

  return (
    <div>
      <div className="profile_container">
        <div className="cover-photo">
          <img src={Hong_profile} className="profile" />
        </div>
        <div className="profile-name">Hongrai Kim</div>
        <p className="about">
          Team Leader / Front-end
          <br />
          Back-end / Deep Learning
        </p>
        <ButtonMailto className="msg-btn" label="E-Mail" mailto="mailto:hongregii2@gmail.com" />

        <button
          className="follow-btn"
          onClick={() => {
            window.open("https://github.com/hongregii");
          }}
          alt=""
          src="https://github.com/hongregii"
        >
          Github
        </button>
      </div>

      <div className="profile_container">
        <div className="cover-photo">
          <img src={Chan_profile} className="profile" />
        </div>

        <div className="profile-name">Seongwoo Cho</div>

        <p className="about">
          Full-Stack Dev
          <br />
          Front-end develop
        </p>

        <button className="msg-btn">Message</button>
        <button
          className="follow-btn"
          onClick={() => {
            window.open("https://github.com/Ckck12");
          }}
          alt=""
          src="https://github.com/Ckck12"
        >
          Github
        </button>
      </div>

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
        <button
          className="follow-btn"
          onClick={() => {
            window.open("https://github.com/Ckck12");
          }}
          alt=""
          src="https://github.com/Ckck12"
        >
          Github
        </button>
      </div>
    </div>
  );
};

export default About;
