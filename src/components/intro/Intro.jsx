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
            Hey, hey! Welcome to my website! I'm a pumped-up Full Stack
            Developer who's been recently trained and ready to take on the web
            development world! I'm all about expanding my skills and diving deep
            into this exciting field. Right now, I'm all about gaining hands-on
            experience and leveling up my talents to tackle those thrilling
            projects! So, I'm on the hunt for amazing opportunities that'll let
            me put my knowledge and skills to work while embracing new and cool
            challenges! Let's make some web magic together!
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
