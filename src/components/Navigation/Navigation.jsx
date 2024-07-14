/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./navigation.css";

const Navigation = () => {
  return (
    <div className="main-header">
      <div className="nav-sec__main">
        <div className="nav-sec">
          <a href="" className="nav-icon__link">
            <div className="nav-icon">
              <img src="icon/jquery-svgrepo-com.svg" alt="" />
            </div>
            <span>Ruben Kuipers</span>
          </a>

          <nav className="navigation">
            <ul className="nav-items">
              <li className="nav-item">
                <a href="">Projects</a>
              </li>
              <li className="nav-item">
                <a href="">Capabilities</a>
              </li>
              <li className="nav-item">
                <a href="">Contact</a>
              </li>
              <li className="nav-item spacial">
                <a href="">Log</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
