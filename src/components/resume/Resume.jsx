import React from "react";
import AudriusAnusauskasCV from "../../img/projects/AudriusAnusauskasCV.pdf";

const Resume = () => {
  return (
    <>
      <center>
        <h3>Click to download my resume</h3>
        <a href={AudriusAnusauskasCV} download="AudriusAnusauskasCV.pdf">
          <button>Download Resume</button>
        </a>
      </center>
    </>
  );
};

export default Resume;
