import React, { useEffect } from "react";
import styles from "./MainSection.module.css";
import img1 from "./images/MainSection1.png";
import img2 from "./images/MainSection2.png";
import { Carousel } from "bootstrap";

function MainSection() {
  useEffect(() => {
    const carouselEl = document.querySelector("#mainCarousel");
    if (carouselEl) {
      new Carousel(carouselEl, {
        interval: 5000,
        ride: "carousel",
        pause: false,
      });
    }
  }, []);

  return (
    <div
      id="mainCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className={`carousel-item active ${styles.MainColor}`}>
          <div className={`container ${styles.Main}`}>
            <div className="row">
              <div className={`col-12 col-lg-6 ${styles.Section1}`}>
                <h5 className="fw-bold">
                  Crafting Digital Experiences with Code & Design
                </h5>
                <div className={`fw-bold ${styles.typingWrapper}`}>
                  <h1 className={`fw-bold ${styles.typing1}`}>
                    Hi, I am Samarth.
                  </h1>
                  <h1 className={`fw-bold ${styles.typing2}`}>
                    Welcome to My Portfolio Website.
                  </h1>
                </div>

                <div className={`d-flex gap-2 flex-wrap ${styles.btngroup}`}>
                  <a
                    className="btn btn-primary"
                    href="/Samarth_Resume.pdf"
                    download="Samarth_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                  <a className="btn btn-primary" href="https://github.com/SAMKAKADE/social-links-profile-using-CSS-Animation-and-Flexbox">
                    Github
                  </a>
                  <a className="btn btn-primary" href="https://www.linkedin.com/in/samarth-kakade-38228a358/">
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className={`col-12 col-lg-6 ${styles.Section2}`}>
                <img src={img1} className="img-fluid rounded" alt="Slide 1" />
              </div>
            </div>
          </div>
        </div>

        <div className={`carousel-item ${styles.MainColor}`}>
          <div className={`container ${styles.Main}`}>
            <div className="row">
              <div className={`col-12 col-lg-6 ${styles.Section1}`}>
                <h5 className="fw-bold">
                  Crafting Digital Experiences with Code & Design
                </h5>
                <div className={`fw-bold ${styles.typingWrapper}`}>
                  <h1 className={`fw-bold ${styles.typing1}`}>
                    Hi, I am Samarth.
                  </h1>
                  <h1 className={`fw-bold ${styles.typing2}`}>
                    Welcome to My Portfolio Website.
                  </h1>
                </div>

                <div className={`d-flex gap-2 flex-wrap ${styles.btngroup}`}>
                  <a
                    className="btn btn-primary"
                    href="/Samarth_Resume.pdf"
                    download="Samarth_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                  <a className="btn btn-primary" href="https://github.com/SAMKAKADE/social-links-profile-using-CSS-Animation-and-Flexbox">
                    Github
                  </a>
                  <a className="btn btn-primary" href="https://www.linkedin.com/in/samarth-kakade-38228a358/">
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className={`col-12 col-lg-6 ${styles.Section2}`}>
                <img src={img2} className="img-fluid rounded" alt="Slide 2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default MainSection;
