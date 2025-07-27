import React, { useEffect } from "react";
import styles from "./MainSection.module.css";
import profileImg1 from "./images/MainSection1.png";
import profileImg2 from "./images/MainSection2.png";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Carousel } from "bootstrap"; 

function MainSection() {
  useEffect(() => {
    const carouselEl = document.querySelector("#profileCarousel");
    if (carouselEl) {
      new Carousel(carouselEl, {
        interval: 2000,
        ride: "carousel",
        pause: false,
        wrap: true,
      });
    }
  }, []);

  return (
    <section className={styles.mainSection}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6 text-white text-md-start text-center mb-5 mb-md-0">
            <div className={styles.badge}>Hello I'm</div>
            <h1 className={styles.name}>Samarth Kakade</h1>
            <h4 className={styles.role}>Website Developer & Designer</h4>

            <div className={styles.contactInfo}>
              <p><FaEnvelope /> samarthkakade11@email.com</p>
              <p><FaPhone /> +91 - 8767715551</p>
              <p><FaMapMarkerAlt /> Pune, Maharashtra</p>
            </div>

            <div className="mt-4 d-flex flex-wrap gap-3 justify-content-md-start justify-content-center">
              <a className="btn btn-outline-light" href="https://drive.google.com/file/d/1wNM9O_WzP3ksdH-DRTRJcHIaDYfT8Giq/view?usp=sharing" download target="_blank" >Resume</a>
              <a className="btn btn-outline-light" href="https://github.com/SAMKAKADE" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>

          {/* Right Section - Carousel */}
          <div className="col-md-6 text-center">
            <div className={`${styles.imageWrapper}`}>
              <div id="profileCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={profileImg1} className={`img-fluid ${styles.profileImage}`} alt="Profile 1" />
                  </div>
                  <div className="carousel-item">
                    <img src={profileImg2} className={`img-fluid ${styles.profileImage}`} alt="Profile 2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default MainSection;
