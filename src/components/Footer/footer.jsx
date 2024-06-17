import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import { Button } from "react-bootstrap";

function footer() {
  return (
    <div className="main-footer bg-primary-subtle justify-content-end ">
      <div className="container">
        <div className="row">
          {/* column 1 */}
          <div className="col-md-3 col-sm-6">
            <h4>Basic</h4>
            <ul className="list-unstyled">
              <li>About us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Support Center</li>
            </ul>
          </div>
          {/* column 2 */}
          <div className="col-md-3 col-sm-6">
            <h4>Courses</h4>
            <ul className="list-unstyled">
              <li>Frontend Development</li>
              <li>Digital Marketing</li>
              <li>UI/UX Design</li>
              <li>Data Analysis</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
          {/* column 3 */}
          <div className="col-md-3 col-sm-6">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
          </div>
          {/* column 4 */}
          <div className="col-md-3 col-sm-6">
            <h4>Social Media</h4>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>instagram</li>
              <li>linkedin</li>
              <li>Lorem, ipsum.</li>
            </ul>
          </div>
        </div>
        {/* footer bottom */}
        <div className="footer-bottom text-center">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Innkeeper.work - All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default footer;
