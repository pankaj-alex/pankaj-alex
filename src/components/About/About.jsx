import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about_section" id="about" data-aos="fade-up">
      <h1 className="about_title section_title">About Me</h1>
      <div className="about_content">
        <div className="about_data">
          <p>
            I'm a skilled and motivated <span>Software Engineer</span> with a
            diverse skill set and experience in building innovative
            applications. Currently, I'm working as a Software Engineer at{" "}
            <span>AvatarLife</span>, where I lead a team of developers and
            contribute to exciting projects.
          </p>
          <p>
            My expertise includes a range of programming languages such as{" "}
            <span>TypeScript, JavaScript, Java, Python, C#, HTML, CSS</span>,
            and frameworks like{" "}
            <span>
              Node.js, Nest.js, React.js, Express.js, Angular, Spring Boot
            </span>
            . I have a strong proficiency in databases like{" "}
            <span>MongoDB, MySQL, PostgreSQL, Redis</span>, and I'm familiar
            with various development tools and technologies including{" "}
            <span>Docker, Git, Jira, AWS</span>, and more.
          </p>
          <p>
            I have a proven track record of improving performance and
            efficiency, optimizing databases, implementing CI/CD pipelines, and
            delivering exceptional user experiences. My passion for learning,
            problem-solving, and collaboration drives me to explore new ideas
            and expand my skill set continuously. I am actively seeking
            opportunities to contribute my expertise and make a meaningful
            impact in a Software Engineering role.
          </p>
        </div>
        {/* <div className="about_image">
          <div className="about_img_container">
            <img src="assets/manish-profile.png" alt="Profile Pic" />
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default About;
