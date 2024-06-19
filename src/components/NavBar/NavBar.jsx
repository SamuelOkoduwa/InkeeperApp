import React from "react";
import { Link } from "react-router-dom";
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <span>Logo</span>
      <ul className={styles.ul}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/applyNow">Apply Now</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
