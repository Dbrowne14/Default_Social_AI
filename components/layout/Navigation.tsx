import React from "react";

const Navigation = () => {
  return (
    <nav className="nav">
      <a
        href="index-v0-heroC.html"
        className="brand"
        aria-label="Default Social — part of Default Media Group"
      >
        <span className="mark">
          default<em>/social</em>
        </span>
        <span className="sep" aria-hidden="true"></span>
        <span className="lbl">part of</span>
        <img
          className="logo"
          src="assets/default-media-logo.png"
          alt="Default Media Group"
        />
      </a>
      <div className="links">
        <a href="index-v0.html" className="active">
          Index
        </a>
        <a href="services-v0.html">Services</a>
        <a href="about-v0.html">About</a>
        <a href="insights-v0.html">Insights</a>
      </div>
      <a href="#contact" className="cta">
        Start a project <span>→</span>
      </a>
    </nav>
  );
};

export default Navigation;
