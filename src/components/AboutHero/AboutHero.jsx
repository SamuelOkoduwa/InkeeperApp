import React from 'react'
import "../AboutHero/AboutHero.css"
import { Container, Row, Col } from 'react-bootstrap';
import Office from "../../assets/Images/about-office.png"
import Space from "../../assets/Images/about-space.png"
import Pattern from "../../assets/Images/about-pattern.png"

function AboutHero() {
  return (
    <div className='aboutMain'>
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <div className="aboutHero-section">
              <h2 className="aboutHead">We are Innkeeper</h2>

              <p className="aboutText">
                We are a digital in on a mission to provide upskilling
                opportunities for in-demand tech roles for Africa talent.
              </p>
              <button className="aboutHero-btn">Contact Us</button>
            </div>
          </Col>

          <Col xs={12} md={6}>
              <div className="about-img-section">
                <img className='about-space' src={Space} alt="" />
                <img className='about-pattern' src={Pattern} alt="" />
                <img className='about-office' src={Office} alt="" />
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutHero