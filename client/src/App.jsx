import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import H1Component from "./components/ui/text/H1component";
import ParagraphComponent from "./components/ui/text/ParagraphComponent";
import HomeNote from "./assets/images/home-note.jpg";

import "./App.css";
import "./components/ui/button/Button.css";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="home-main">
      <section className="home-section">
        <article className="home-article">
          <H1Component title1="Bienvenue sur Mon Carnet" />
          <ParagraphComponent text="Organisez vos contacts et notes facilement." />
          <Link to="/carnet" className="btn link-button">
            Commencer
          </Link>
        </article>
      </section>
      {!isMobile && (
        <section className="home-section">
          <img
            className="home-postit-img"
            src={HomeNote}
            alt="Post-it d'acceuil"
          />
        </section>
      )}
    </main>
  );
}

export default App;
