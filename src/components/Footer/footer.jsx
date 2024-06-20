import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import { Button } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function footer() {
  return (
    <div className="main-footer width-100">
      <div className="bg-primary-subtle pt-5 pb-4">
        <div className="row text-md-left">
          {/* column 1 */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
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
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
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
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>
                <FaLocationDot className="me-3" />
                Innkeeper Hackerspace, 11 Colin Onabule Crescent, Diamond
                Estate, Magodo Phase 2
              </li>
              <li>
                <FaEnvelope className="me-2" />
                Academy@innkeeper.work
              </li>
              <li>
                <FaPhone className="me-3" />
                +234 813 701 1735
              </li>
            </ul>
          </div>
          {/* column 4 */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h4>Social Media</h4>
            <ul className="list-unstyled">
              <li>
                <FaFacebookF className="me-2" />
                Facebook
              </li>
              <li>
                <FaTwitter className="me-2" />
                Twitter
              </li>
              <li>
                <FaInstagramSquare className="me-2" />
                instagram
              </li>
              <li>
                <FaLinkedin className="me-2" />
                linkedin
              </li>
            </ul>
          </div>
        </div>
        {/* footer bottom */}
        <div className="row footer-bottom text-center py-md-5">
          <div className="col-md-12 col-lg-12">
            <p className="text-center">
              &copy;{new Date().getFullYear()} Innkeeper.work - All Right
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
