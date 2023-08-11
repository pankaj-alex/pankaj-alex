import React from "react";
import "./Work.css";
import { WorksItems } from "./WorksItems";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
const Work = ({ toggleMediaModal }) => {
  return (
    <section className="work_section" id="work">
      <h1 className="work_title section_title" data-aos="fade-up">
        Things I've Made
      </h1>
      <div className="work_cards_container" data-aos="fade-up">
        {WorksItems.map((work, index) => (
          <WorkCard
            name={work.name}
            utilized={work.utilized}
            desc={work.description}
            links={work.links}
            key={index}
            details={work.details}
            hyperlink={work.hyperlink}
            mediaData={{
              images: work.images,
              videos: work.videos,
              details: work.details,
            }} // Pass the media data
            toggleMediaModal={toggleMediaModal} // Pass the toggle function
            cardIndex={index}
          />
        ))}
      </div>
    </section>
  );
};

const WorkCard = ({
  name,
  utilized,
  desc,
  links,
  details,
  mediaData,
  toggleMediaModal,
  hyperlink,
  cardIndex,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [hideTimeout, setHideTimeout] = useState(null);

  const [showDetailsIndex, setShowDetailsIndex] = useState();

  const toggleDetails = (idx) => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    if (!showDetails) {
      setShowDetailsIndex(idx);
    }
    setShowDetails(!showDetails);
  };

  const handleMouseEnter = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
  };

  const handleMouseLeave = () => {
    if (showDetails) {
      const timeout = setTimeout(() => {
        setShowDetails(false);
      }, 1000); // 2 seconds

      setHideTimeout(timeout);
    }
  };

  return (
    <div className="workcard-container">
      <div className="project_header">
        <h1>{name}</h1>
        <div className="project_links">
          {links.map((link, index) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <i className={link.icon}></i>
            </a>
          ))}
          <a>
            <i
              className="fa-solid fa-eye"
              onClick={() => toggleMediaModal(mediaData)}
            ></i>
          </a>
        </div>
      </div>
      <div className="workcard_details">
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: desc }}
        ></p>
        {/* <button
          className="details-toggle-button"
          onClick={() => toggleDetails(cardIndex)}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
        <div
          className={`details-content ${
            showDetails && cardIndex === showDetailsIndex ? "show" : ""
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="workcard-details-list">
            {details.map((detail, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: detail }}></li>
            ))}
          </ul>
        </div> */}
        <div className="utilized-container">
          {utilized.map((name, idx) => (
            <h3 key={idx}>{name}</h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
