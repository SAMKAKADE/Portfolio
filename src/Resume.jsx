import React from "react";
import styles from "./Resume.module.css";

function Resume() {
  return (
    <div id="resume" className="container py-3" data-aos="fade-up" data-aos-once="false" data-aos-delay="700">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2 className={styles.title}>Resume</h2>
          <p className="text-muted">
           Hi, I'm Samarth Kakade, a BE Engineering graduate and passionate Full Stack Developer.
          </p>
        </div>

        {/* Left Column */}
        <div className="col-lg-6">
          <h4 className="fw-bold mb-4">Summary</h4>
          <div className={styles.timelineItem}>
            <span  ></span>
            <h6 className="fw-bold">Samarth Kakade</h6>
            <p><em>Hi, I'm Samarth Kakade, a BE Engineering graduate and passionate Full Stack Developer. I specialize in building responsive, scalable web applications using modern technologies. I enjoy turning complex problems into elegant solutions and constantly strive to improve my skills.</em></p>
            <ul>
              <li>Shrirampur, Maharashtra</li>
              <li>+91-8767715551</li>
              <li>samarthkakade11@gmail.com</li>
            </ul>
          </div>

          <h4 className="fw-bold mt-5 mb-4">Education</h4>
          <div className={styles.timelineItem}>
            <span  ></span>
            <h6 className="fw-bold">DIPLOMA</h6>
            <p className="fst-italic">2020 - 2023</p>
            <p><em>Goverment Polytechnic, Ahilyanagar</em></p>
            <p>Computer Technology - 85.43%</p>
          </div>

          <div className={styles.timelineItem}>
            <span  ></span>
            <h6 className="fw-bold">BACHELOR OF ENGINEERING</h6>
            <p className="fst-italic">2023 - 2026 - Pursing</p>
            <p><em>Pravara College of Engineering, Loni</em></p>
            <p>Information Technology - Third Year - 8.8</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-6 mt-5">
          <h4 className="fw-bold mb-4">INTERNSHIP AND PROJECT</h4>

          <div className={styles.timelineItem}>
            <span  ></span>
            <h6 className="fw-bold">Paarsh Infotech, Nashik</h6>
            <p className="fst-italic">Jan 2025 - May 2025</p>
            <p><em>Web Development Intern </em></p>
            <ul>
              <li>	Designed and developed responsive web pages using HTML, CSS, Bootstrap 5, and JavaScript to facilitate an improved user experience on various devices. </li>
              <li>	Implemented client-side functionality and interactive website features using JavaScript to improve usability and engagement. </li>
              <li>	Integrated MySQL for backend data storage, retrieval, and dynamic content generation within web applications. </li>
              <li>	Collaborated with senior developers to develop backend business logic using Java, contributing to core application workflows. </li>
            </ul>
          </div>

          <div className={styles.timelineItem}>
            <span  ></span>
            <h6 className="fw-bold">PROJECT</h6>
            <p><em>Generating Student Result </em></p>
            <ul>
              <li>	Technologies: HTML, CSS, JavaScript, Bootstrap 5, PHP, MySQL </li>
              <li>	Implemented secure login authentication to verify user credentials before accessing the system. </li>
              <li>	Integrated automated result calculation logic to determine pass/fail status based on input marks. </li>
              <li>	Enabled result generation in printable format with functionality to download the result as a PDF for offline use. </li>
              <li>	Enhanced user experience through responsive design and Bootstrap 5 styling for mobile and desktop compatibility. </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
