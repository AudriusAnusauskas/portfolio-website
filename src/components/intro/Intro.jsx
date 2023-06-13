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
              <div className="i-title-item">Full Stack Developer</div>
              <div className="i-title-item">Web Designer</div>
              <div className="i-title-item">Software Engineer</div>
            </div>
          </div>
          <p className="i-desc">
            I am a highly motivated and recently trained Full Stack Developer,
            actively engaged in expanding my expertise and deepening my
            understanding of web development. Currently, I am focused on gaining
            practical experience and further honing my skills in order to
            contribute effectively to challenging projects. <br /> I am actively
            seeking compelling opportunities that will allow me to apply my
            knowledge and skills while embracing new professional challenges.
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
