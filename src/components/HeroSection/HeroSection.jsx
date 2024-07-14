/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-sec container">
        <div className="hero-sec__dtls">
          <h2>Hi there, I'm Ruben 👋🏻</h2>
          <h1>UX/UI/Product Designer & Front-end developer</h1>
          <p>
            I help people and brands reach their goals by designing & building
            user-centric digital products and interactive experiences
          </p>
          <div className="work-btn__sec">
            <a href="" className="work-btn--1">
              View my work
            </a>
            <a href="" className="work-btn--2">
              More about me
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="images/sourav.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
