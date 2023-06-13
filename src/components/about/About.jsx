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
          I am a seasoned individual who, at the age of 44, decided to fulfill a
          long-standing aspiration and embark on a career as a web developer.
        </p>
        <p className="a-desc">
          I have successfully completed a comprehensive 7-month Front-End
          program at the{" "}
          <a href="https://bit.lt/">Baltic Institute Of Technology</a>, where I
          acquired a strong foundation in essential web technologies such as
          HTML, CSS, JavaScript, and Angular. In addition, I gained proficiency
          in Back-End development using Node.Js and working with databases
          including MySQL, MongoDB, and PostgreSQL. <br />
          During my journey, I engaged in a rigorous 5-month mentoring program
          at
          <a href="https://devmentor.online/"> devMentor</a>, where I sharpened
          my skills by developing a full-stack movies application. Leveraging
          React.js with TypeScript for the Front-End and Node.js with TypeScript
          for the Back-End, I honed my abilities in building robust and scalable
          web solutions. <br />
          Further expanding my knowledge, I actively participated in the{" "}
          <a href="https://www.swedbank.lt/about/careers/work?language=ENG">
            Swedbank IT&Data academy
          </a>{" "}
          intensive full-stack web development course. This immersive experience
          allowed me to deepen my understanding of Angular and Java with Spring
          Boot. Through theoretical lectures and collaborative team projects,
          including the development of an agile-based{" "}
          <a href="https://loan-calculator.site/">loan calculator app</a> , I
          refined my expertise and practiced effective teamwork. <br />
          As a mentee developer, I contributed to the development and
          maintenance of a sports membership site for the{" "}
          <a href="https://uz7mariu.lt/">Už Septynių Marių</a> sports community.
          Within this role, I played a pivotal part in shaping the website's
          architecture, employing React for Front-End development. I also
          actively collaborated on key functionalities such as member
          authentication and the development of a payment module flow.
          Additionally, I contributed to code reviews and engaged in seamless
          collaboration with my teammates via Github's pull request system.{" "}
          <br />
          To complement my formal training, I have diligently pursued additional
          web development and UI design courses on platforms such as Udemy,
          YouTube, and BitDegree. <br />
          Currently, I am eagerly seeking new and stimulating projects and
          challenges that will enable me to apply my diverse skill set and
          continue to grow as a professional web developer.
        </p>
        <Resume />
      </div>
    </div>
  );
};
