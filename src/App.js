import "./App.css";
import { useEffect, useState } from "react";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Socials from "./components/Socials/Socials";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
// import OtherWork from './components/OtherWork/OtherWork';
import ContactMe from "./components/Contact Me/ContactMe";
import { BrowserRouter as Router } from "react-router-dom";
import Aos from "aos";
import Stars from "./components/Stars/Stars";
import MediaModal from "./components/MediaModal/MediaModal";

function App() {
  useEffect(() => {
    Aos.init({ disable: "mobile", duration: 1500, once: true });
  }, []);

  function getTheme() {
    let currTheme = localStorage.getItem("theme");

    if (currTheme) {
      return currTheme;
    } else return "dark";
  }

  const [theme, setTheme] = useState(getTheme());

  const [showMediaModal, setShowMediaModal] = useState(false);
  const [mediaData, setMediaData] = useState({ images: [], videos: [] });

  const toggleMediaModal = (data) => {
    setShowMediaModal(!showMediaModal);
    setMediaData(data);
  };

  const toggleTheme = () => {
    let newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <Router>
      <div className="app" id="App" data-theme={theme}>
        <Stars />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className="content">
          <Home />
          <About />
          <Skills />
          <Experience />
          <Work toggleMediaModal={toggleMediaModal} />
          {/* <OtherWork /> */}
          <ContactMe />
        </div>
        <Socials />
        <Footer />
        {showMediaModal && (
          <MediaModal
            images={mediaData.images}
            videos={mediaData.videos}
            details={mediaData.details}
            onClose={toggleMediaModal}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
