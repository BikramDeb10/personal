import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import Side from "./components/Side/side";
import Project from "./components/Project/Project";
import Capabilities from "./components/Capabilities/Capabilities";

function App() {
  return (
    <div>
      <Main />
      <Footer />
    </div>
  );
}

function Main() {
  return (
    <div className="home">
      <Navigation />
      <HeroSection />
      <Side />
      <Project />
      <Capabilities />
    </div>
  );
}

function Footer() {}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
