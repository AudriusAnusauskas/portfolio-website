import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "./intro.css";
import Me from "../../img/aa1.png";

function intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h1 className="i-name">Audrius Anusauskas</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Front End Developer</div>
              <div className="i-title-item">Web Designer</div>
              <div className="i-title-item">Software Engineer</div>
            </div>
          </div>
          <p className="i-desc">
            I am freshly baked Front End Engineer currently gaining experience
            and continuing learning by adapting acquired knowledge and digging
            deeper into web development. <br /> Looking for interesting projects
            and challenges.
          </p>
          <span className="i-greet">
            <p className="i-linkedin">Greet me on </p>
            <p className="i-linkedin">
              <a
                href="https://www.linkedin.com/in/audrius-anusauskas-4281ab227/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </p>
          </span>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
}

export default intro;
