import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import Applogo from "../../assets/Images/Applogo.png";
import arrow_down from "../../assets/Icons/arrow_down.png";
import mennu from "../../assets/Icons/mennu.jpg";
import close from "../../assets/Icons/close.png";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const drps = () => {
    setOpen(!open);
  };

  console.log({ menuOpen });

  return (
    <nav className={styles.nav}>
      <img src={Applogo} alt="My Logo Image" />
      <ul className={`${styles.ul} ${menuOpen ? styles.showMenu : ""}`}>
        <li className="navbarss_menu">
          <Link to="/">Home</Link>
        </li>

        <li className="navbarss_menu" onClick={drps}>
          <div className={`${styles.drpdwn}`}>
            <Link to="/courses">Courses</Link>
            <span>
              <img
                src={arrow_down}
                alt="Arrow Icon"
                className={`${styles.arrow}`}
              />
            </span>
            {open && (
              <div className={`${styles.drpdwn_menu}`}>
                <p>Front-end Development</p>
                <p>UI/UX</p>
                <p>Digital Marketing</p>
                <p>CyberSecurity</p>
                <p>Data Science/AI</p>
                <p>Data Analysis</p>
              </div>
            )}
          </div>
        </li>

        <li className="navbarss_menu">
          <Link to="/about">About</Link>
        </li>
        
        <li className={`${styles.menu_contacts} navbarss_menu `}>
          <Link to="/contact">Apply Now</Link>
        </li>
      </ul>
      {menuOpen ? (
        <div className={styles.close_icon} onClick={toggleMenu}>
          <span>
            <img src={close} alt="Menu Icon" className={styles.close} />
          </span>
        </div>
      ) : (
        <div className={styles.menu_icon} onClick={toggleMenu}>
          <span>
            <img src={mennu} alt="Menu Icon" className={styles.menu} />
          </span>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
