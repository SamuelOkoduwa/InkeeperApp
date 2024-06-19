import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import Applogo from "../../assets/Images/Applogo.png";
import arrow_down from "../../assets/Icons/arrow_down.png";
import Button from "react-bootstrap/Button";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <span>
        <img src={Applogo} alt="App Logo" />
      </span>
      <ul className={styles.ul}>
        <li className="navbarss_menu">
          <Link to="/">Home</Link>
        </li>

        <li className="navbarss_menu">
          <Link to="/courses">Courses</Link>
          <img className="caret" src={arrow_down} alt="Dropdown Arrow" />
        </li>

        <li className="navbarss_menu">
          <Link to="/About">About</Link>
        </li>

        <li className={`navbarss_menu ${styles.menu_applyNow}`}>
          <Link to="/applyNow">Apply Now</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
