import React from "react";
import styles from "./Resume.module.css";

function Resume() {
  return (
    <section
      id="resume"
      className={styles.resumeSection}
      data-aos="fade-up"
      data-aos-once="false"
      data-aos-delay="700"
    >
    <div id="resume" className={`container ${styles.resumeContainer}`} data-aos="fade-up" data-aos-once="false" data-aos-delay="700">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2 className={styles.title}>Resume</h2>
          <p className={styles.subtitle}>
            Hi, I'm Samarth Kakade, a BE Engineering graduate and passionate Full Stack Developer.
          </p>
        </div>

        {/* Left Column */}
        <div className="col-lg-6">
          <h4 className={`${styles.sectionHeading} mb-4`}>Summary</h4>
          <div className={styles.timelineItem}>
            <span></span>
            <h6 className={styles.name}>Samarth Kakade</h6>
            <p><em className={styles.emphasis}>Hi, I'm Samarth Kakade, a BE Engineering graduate and passionate Full Stack Developer...</em></p>
            <ul className={styles.list}>
              <li>Shrirampur, Maharashtra</li>
              <li>+91-8767715551</li>
              <li>samarthkakade11@gmail.com</li>
            </ul>
          </div>

          <h4 className={`${styles.sectionHeading} mt-5 mb-4`}>Education</h4>
          <div className={styles.timelineItem}>
            <span></span>
            <h6 className={styles.degree}>DIPLOMA</h6>
            <p className={styles.duration}>2020 - 2023</p>
            <p><em>Goverment Polytechnic, Ahilyanagar</em></p>
            <p>Computer Technology - 85.43%</p>
          </div>

          <div className={styles.timelineItem}>
            <span></span>
            <h6 className={styles.degree}>BACHELOR OF ENGINEERING</h6>
            <p className={styles.duration}>2023 - 2026 - Pursuing</p>
            <p><em>Pravara College of Engineering, Loni</em></p>
            <p>Information Technology - Third Year - 8.8</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-6 mt-5">
          <h4 className={`${styles.sectionHeading} mb-4`}>INTERNSHIP AND PROJECT</h4>

          <div className={styles.timelineItem}>
            <span></span>
            <h6 className={styles.company}>Paarsh Infotech, Nashik</h6>
            <p className={styles.duration}>Jan 2025 - May 2025</p>
            <p><em>Web Development Intern</em></p>
            <ul className={styles.list}>
              <li>Designed and developed responsive web pages using HTML, CSS, Bootstrap 5...</li>
              <li>Implemented interactive features using JavaScript...</li>
              <li>Integrated MySQL for backend data handling...</li>
              <li>Collaborated on backend business logic using Java...</li>
            </ul>
          </div>

          <div className={styles.timelineItem}>
            <span></span>
            <h6 className={styles.company}>PROJECT</h6>
            <p><em>Generating Student Result</em></p>
            <ul className={styles.list}>
              <li>Technologies: HTML, CSS, JS, Bootstrap 5, PHP, MySQL</li>
              <li>Implemented secure login authentication...</li>
              <li>Automated result calculation and PDF generation...</li>
              <li>Responsive design using Bootstrap 5...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Resume;
