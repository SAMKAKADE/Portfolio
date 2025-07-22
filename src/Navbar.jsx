import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from  "./Navbar.module.css";
import AOS from "aos";

function Navbar() {
  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      // Reset AOS animations
      setTimeout(() => {
        AOS.refresh();
      }, 100); 
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold " href="#">SAMARTH</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3 fw-bold">
            {["home", "about", "skills", "resume", "contact"].map((id) => (
              <li className="nav-item" key={id}>
                <button
                  className="nav-link btn btn-link"
                  onClick={() => handleNavClick(id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
