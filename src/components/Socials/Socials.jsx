import React from "react";
import "./Socials.css";

function Socials() {
  return (
    <section className="socials">
      <div
        className="socials_container side_float"
        data-aos="fade"
        data-aos-delay="2000"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/pankajvermacr7/"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://leetcode.com/alex8430/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-code"></i>
        </a>

        <a
          href="https://www.hackerrank.com/pv24aug2001?hr_r=1"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-hackerrank"></i>
        </a>

        <a href="https://github.com/alex8430" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://stackoverflow.com/users/13319302/pankaj-verma"
        >
          <i className="fa-brands fa-stack-overflow"></i>
        </a>
      </div>
      <div
        className="side_email_container side_float"
        data-aos="fade"
        data-aos-delay="2000"
      >
        <a href="mailto:pankajvermacr7@gmail.com">pankajvermacr7@gmail.com</a>
      </div>
    </section>
  );
}

export default Socials;
