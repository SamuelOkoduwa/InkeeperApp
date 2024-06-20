import React, { useEffect, useState } from "react";
import "../../components/LandingPageHero/LandingPageHero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Software from "../../assets/Images/soft-dev.png";
import Designer from "../../assets/Images/prod-des.png";
import Analyst from "../../assets/Images/data-analyst.png";
import Cyber from "../../assets/Images/cyber-sec.png";
import Eighty from "../../assets/Images/80.png"
import Ninety from "../../assets/Images/90.png"
import Thousand from "../../assets/Images/1000.png"

function LandingPageHero() {
  // Text Slide
  const names = [
    "Software Developer",
    "Product Designer",
    "Data Analyst",
    "Cyber Security",
  ];
  const [currentName, setCurrentName] = useState(names[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [names.length]);

  useEffect(() => {
    setCurrentName(names[index]);
  }, [index, names]);


  //  Image Slide
  const images = [Software, Designer, Analyst, Cyber];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);
  

  // Output
  return (
    <div className="heroMain">
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <div className="text-section">
              <h2 className="hero-head">
                Be a <span key={currentName}>{currentName}</span>
              </h2>
              <h2 className="hero-head">in 3 months.</h2>

              <p className="hero-text">
                Kickstart your Tech career with us at Innkeeper and stand a
                chance to become globally valuable. Your journey starts
                seamlessly with
                <span> us</span>
              </p>
              <button className="hero-btn">Start Learning</button>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="section-two">
              <div className="img-section">
                <img className="img-fluid"
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt="Slideshow"
                />
              </div>

              <div className="rate-section">
                <div className="eighty">
                  <img src={Eighty} alt="" />
                  <p className="comment">
                    Our courses are taught easily
                    <br />
                    <span>8 out of 10 students complete our courses</span>
                  </p>
                </div>

                <div className="ninety">
                  <img src={Ninety} alt="" />
                  <p className="comment">
                    Internship Placement <br />
                    <span>9 out of 10 students get internship immediately</span>
                  </p>
                </div>

                <div className="thousand">
                  <img src={Thousand} alt="" />
                  <p className="fun-comment">
                    Fun <br />
                    <span>Classes are fun</span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPageHero;
