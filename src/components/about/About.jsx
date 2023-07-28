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
          At the ripe age of 44, I finally decided to chase my dream and become
          a web developer, and it's been an amazing journey so far!
        </p>
        <p className="a-desc">
          I completed a 7-month Front-End program at the{" "}
          <a href="https://bit.lt/">Baltic Institute Of Technology</a>, where I
          got a solid foundation in crucial web technologies like HTML, CSS,
          JavaScript, and Angular. I also dived into Back-End development using
          Node.Js and got hands-on experience with databases like MySQL,
          MongoDB, and PostgreSQL. <br />I then took part in a tough 5-month
          mentoring program at{" "}
          <a href="https://devmentor.online/"> devMentor</a>, where I built a
          full-stack movies application to sharpen my skills. I got really good
          at using React.js with TypeScript for the Front-End and Node.js with
          TypeScript for the Back-End, creating strong and scalable web
          solutions. <br />I joined the{" "}
          <a href="https://www.swedbank.lt/about/careers/work?language=ENG">
            Swedbank IT&Data academy's
          </a>{" "}
          intensive full-stack web development course to broaden my knowledge
          even further. This was an immersive experience where I delved into
          Angular and Java with Spring Boot. With theoretical lectures and
          collaborative team projects, including an agile-based{" "}
          <a href="https://loan-calculator.site/">loan calculator app</a>, I
          honed my expertise and learned to be a great team player. <br />
          As a mentee developer, helped developing and maintaining a sports
          membership site for the{" "}
          <a href="https://uz7mariu.lt/">Už Septynių Marių</a> sports community.
          It was super exciting! I used React for Front-End development and
          actively collaborated on cool stuff like member authentication and a
          payment module flow. Plus, I was all about code reviews and smooth
          teamwork via Github's pull request system. <br />
          To top it all off, I've been a diligent learner, always seeking extra
          knowledge in web development and UI design. I've taken courses on
          Udemy, YouTube, and BitDegree to keep my skills sharp and stay
          up-to-date with the latest trends. Now, I'm on the lookout for awesome
          new projects and challenges that'll let me apply my diverse skill set
          and keep growing as a professional web developer. So, if you've got
          something exciting to work on, count me in! Let's do this!
        </p>
        <Resume />
      </div>
    </div>
  );
};
