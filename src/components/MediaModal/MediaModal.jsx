import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./MediaModal.css";

const MediaModal = ({ images, videos, details, onClose }) => {
  const handleModalClose = () => {
    onClose();
  };
  return (
    <div className="media-modal-overlay">
      <div className="media-modal-content">
        <button className="close-button" onClick={handleModalClose}>
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={false}
          infiniteLoop={true}
        >
          <div>
            <ul className="workcard-details-list">
              {details?.map((detail, index) => (
                <li
                  key={index}
                  dangerouslySetInnerHTML={{ __html: detail }}
                ></li>
              ))}
            </ul>
          </div>
          {images?.names?.map((item, index) => (
            <div className="image-container" key={index}>
              <img
                src={`assets/works/` + item + `.png`}
                alt={`Media ${index}`}
              />
            </div>
          ))}
          {images?.src?.map((item, index) => (
            <div className="image-container" key={index}>
              <img src={item} alt={`Media ${index}`} />
            </div>
          ))}
          {videos?.youtubes?.map((item, index) => (
            <div key={index}>
              <div className="video-container">
                <iframe
                  title={`YouTube Video ${index}`}
                  width="100%"
                  height="auto"
                  src={`https://www.youtube.com/embed/${getYoutubeVideoId(
                    item
                  )}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
          {videos?.src?.map((item, index) => (
            <div key={index}>
              <div className="video-container">
                <iframe
                  title={`YouTube Video ${index}`}
                  width="100%"
                  height="auto"
                  src={item}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
          {videos?.names?.map((item, index) => (
            <div key={index}>
              <div className="video-container">
                <iframe
                  title={`YouTube Video ${index}`}
                  width="100%"
                  height="auto"
                  src={`assets/works/` + item + `.mp4`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
function getYoutubeVideoId(url) {
  const regex =
    /(?:https?:\/\/(?:www\.)?youtube\.com\/watch\?v=|https?:\/\/youtu.be\/)([^&\s]+)/;
  const match = url.match(regex);
  return match && match[1];
}

export default MediaModal;
