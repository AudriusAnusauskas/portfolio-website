import React from "react";
import "./about.css";
import Mac from "../../img/mac1.png";
import Resume from "../resume/Resume";

export const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Mac} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h2 className="a-title">About Me</h2>
        <p className="a-sub">
          I am a 44 years young guy who decided to make his dream come true and
          become a web developer.
        </p>
        <p className="a-desc">
          I have completed 7 months of Front-End studies at{" "}
          <a href="https://bit.lt/">Baltic Institute Of Technology</a> where I
          learned solid basics of HTML, CSS, JavaScript and Angular JS as well
          as good foundations of Back-End with Node.Js and databases (mySql,
          Mongo DB, Postrgres). I did the 5 months of mentoring program at{" "}
          <a href="https://devmentor.online/">devMentor</a> where I developed a
          movies app both the Fron-End and the Back-End. The Front-End part was
          developed with React.js using Typescript and Back-End was done with
          Node.js also using Typescript. As a mentee developer I took part in
          development and maintenance of sports membership site for sports
          community <a href="https://uz7mariu.lt/"> Už Septynių Marių</a> where
          I took part in creating the structure of the website and Front-end
          development with React, helped building member authentication, helped
          developing payment module flow, reviewed code and collaborated with
          teammates on pull requests in Github. I also had numerous cources on
          Udemy, Youtube, BitDegree about web develpment and UI design. I am
          looking forward to new exciting projects and challenges.
        </p>
        <Resume />
      </div>
    </div>
  );
};
