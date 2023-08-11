import React, { useEffect } from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import { HashLink } from "react-router-hash-link";
import "aos/dist/aos.css";
import Aos from "aos";
function Home() {
  useEffect(() => {
    Aos.init({ duration: 100 });
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home_content grid">
        <div className="home_data">
          <h1 data-aos="fade-up" data-aos-delay="700">
            👋 Hi there! I'm
          </h1>
          <h2 data-aos="fade-up" data-aos-delay="750">
            Pankaj Verma
          </h2>
          <p data-aos="fade-up" data-aos-delay="800">
            a Software Engineer passionate about crafting digital experiences.
            Welcome to my virtual space where I showcase creativity through{" "}
            <br className="about_break"></br>
            <Typewriter
              words={[
                "coding",
                "innovation",
                "problem-solving",
                "technology",
                "development",
                "design",
                "engineering",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={60}
              delaySpeed={600}
            />
          </p>
          <HashLink
            smooth
            to="/#contact"
            className="home_button"
            data-aos="fade-up"
            data-aos-delay="850"
          >
            Contact Me
          </HashLink>
        </div>
        <div className="home_img" data-aos="fade-left" data-aos-delay="1500">
          <img src="assets/guy-graphic.png" alt="" />
        </div>
      </div>
      <div className="home_scroll">
        <HashLink
          className="scroll_button"
          smooth
          to="/#about"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <img className="mouse_img" src="assets/mouse.svg" alt="mouse" />
          <span>Scroll down</span>
          <i className="fa-solid fa-arrow-down"></i>
        </HashLink>
      </div>
    </section>
  );
}

export default Home;
