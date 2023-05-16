import React, { useState } from "react";

import "./project.css";
const Project = () => {
  const [toggle, setToggle] = useState(0);
  const toggleTab = (indx) => {
    setToggle(indx);
  };
  return (
    <section className="projects section " id="projects">
      <h2 className="section__title">Project</h2>
      <span className="section__subtitle">check out my work</span>
      <div className="projects__container container grid">
        <div className="projects__content project-card">
          <div>
            <a href="https://ik-ea-clone.vercel.app/" className="project-deployed-link">
              <h3 className="projects__title project-title">IKEA</h3>
            </a>
          </div>
          <span className="projects__button project-github-link" onClick={() => toggleTab(1)}>
            View More{" "}
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div
            className={
              toggle === 1 ? "projects__modal active-modal" : "projects__modal"
            }
          >
            <div className="projects__modal-content project-description">
              <i
                className="uil uil-times projects__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="projects__modal-title">IKEA CLONE</h3>
              <p className="projects__descriptions project-tech-stack">TechStack:</p>
              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon">
                    <p className="projects__modal-info">REACT</p>
                  </i>
                </li>
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon">
                    <p className="projects__modal-info">CHAKRA UI</p>
                  </i>
                </li>
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon">
                    <p className="projects__modal-info">REDUX</p>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="projects__content project-card">
          <div>
            {/* <img src={faballey} alt="faballey"  className="projects__icon"/> */}
            <a href="https://faballey-web.netlify.app/" className="project-deployed-link">
              <h3 className="projects__title project-title">FABALLEY</h3>
            </a>
          </div>
          <span className="projects__button project-github-link" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div
            className={
              toggle === 1 ? "projects__modal active-modal" : "projects__modal"
            }
          >
            <div className="projects__modal-content project-description">
              <i
                className="uil uil-times projects__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="projects__modal-title">FABALLEY CLONE</h3>
              <p className="projects__descriptions project-tech-stack">TechStack:</p>
              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon">
                    <p className="projects__modal-info">HTML</p>
                  </i>
                </li>
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon">
                    <p className="projects__modal-info">CSS</p>
                  </i>
                </li>
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon">
                    <p className="projects__modal-info">JAVASCRIPT</p>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="projects__content project-card">
          <div>
            <a href="https://pharmeasy-web-site-clone.netlify.app/" className="project-deployed-link">
              <h3 className="projects__title project-title">PHARMEASY</h3>
            </a>
          </div>
          <span className="projects__button project-github-link" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div
            className={
              toggle === 1 ? "projects__modal active-modal" : "projects__modal"
            }
          >
            <div className="projects__modal-content project-description">
              <i
                className="uil uil-times projects__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="projects__modal-title">PHARMEASY CLONE</h3>
              <p className="projects__descriptions project-tech-stack">TechStack:</p>
              <ul className="projects__modal-projects grid">
                <li className="projects__modal-projects">
                  <i className="uil uil-check-circle projects__modal-icon">
                    <p className="projects__modal-info">HTML</p>
                  </i>
                </li>
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon">
                    <p className="projects__modal-info">CSS</p>
                  </i>
                </li>
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon">
                    <p className="projects__modal-info">JAVASCRIPT</p>
                  </i>
                </li>
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon">
                    <p className="projects__modal-info">BOOTSTRAP</p>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
