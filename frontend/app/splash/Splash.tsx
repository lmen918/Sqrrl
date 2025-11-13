import React from "react";
import { Carousel } from "./components/Carousel";
import "./styles/splash.css";

export const Splash = () => {
  return (
    <div className="splash-container">
      <div className="logo-container">
        <h2 className="logo-text">Sqrrl</h2>
        <p className="tagline">Your personal media reminder assistant</p>
      </div>
      <Carousel />
    </div>
  );
};
