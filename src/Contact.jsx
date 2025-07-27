import React from "react";
import styles from "./Contact.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div
        id="contact"
        className={styles.aboutSection}
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="700"
      >
        <div className="container">
          {/* Heading Section */}
          <div className={`row text-center mb-5`}>
            <div className="col">
              <p className={`mt-4 ${styles.introText}`}>CONTACT US</p>
              <h2 className={`fw-bold ${styles.heading}`}>Have a Project?</h2>
              <p className={`fw-5 ${styles.subText}`}>
                I specialize in building responsive, scalable web applications
                using modern technologies
              </p>
            </div>
          </div>

          {/* Form + Contact Info */}
          <div className="row">
            {/* Form Section */}
            <div className="col-lg-7 mb-4">
              <form className={`${styles.formBox} p-4 shadow-sm`}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button className={`btn ${styles.sendBtn}`} type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="col-lg-4 offset-lg-1 ">
              <div className="d-flex mb-4">
                <div className={styles.iconCircle}>
                  <FaMapMarkerAlt />
                </div>
                <div className="ms-3">
                  <p className={`fw-bold m-0 ${styles.contactHeading}`}>Address:</p>
                  <p className={`${styles.contactText} m-0`}>
                    Pune, Maharashtra
                  </p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className={styles.iconCircle}>
                  <FaPhoneAlt />
                </div>
                <div className="ms-3">
                  <p className={`fw-bold m-0 ${styles.contactHeading}`}>Phone:</p>
                  <p className={`${styles.contactText} m-0`}>+91 - 8767715551</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className={styles.iconCircle}>
                  <FaEnvelope />
                </div>
                <div className="ms-3">
                  <p className={`fw-bold m-0 ${styles.contactHeading}`}>Email:</p>
                  <p className={`${styles.contactText} m-0`}>samarthkakade11@gmail.com</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className={styles.iconCircle}>
                  <FaGlobe />
                </div>
                <div className="ms-3">
                  <p className={`fw-bold m-0 ${styles.contactHeading}`}>Website:</p>
                  <p className={`${styles.contactText} m-0`}>yoursite.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
