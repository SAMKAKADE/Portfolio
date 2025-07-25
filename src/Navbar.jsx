import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      const navbarToggler = document.querySelector(".navbar-toggler");
      const navbarCollapse = document.getElementById("navbarNav");
      if (navbarToggler && navbarCollapse.classList.contains("show")) {
        setTimeout(() => {
          navbarToggler.click();
        }, 400); 
      }

      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${styles.navbarContainer}`}
      data-aos="slide-right"
    >
      <div className="container">
        <a className={`navbar-brand ${styles.brandName}`} href="#main">
          Samarth
        </a>
        <button
          
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styles.navList}`}>
            {["main", "about", "skills", "resume", "contact"].map((item) => (
              <li className={`nav-item ${styles.navItem}`} key={item}>
                <a
                  className={`nav-link ${styles.navLink}`}
                  onClick={() => handleNavClick(item)}
                  role="button"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
