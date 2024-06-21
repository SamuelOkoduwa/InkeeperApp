"/src/assets/Images/OurCoursesImg/Rating.png"// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OurCoursesCss from  "../OurCourses/OurCourses.module.css";
import ratingImg from "/src/assets/Images/OurCoursesImg/Rating.png";
import frontEndImg from "/src/assets/Images/OurCoursesImg/IMG.png";
import dataImg from "/src/assets/Images/OurCoursesImg/data-Analysis.png";
import UX from "/src/assets/Images/OurCoursesImg/UX.png";
import security from "/src/assets/Images/OurCoursesImg/cyber-Security.png";
import marketing from "/src/assets/Images/OurCoursesImg/Digital marketing.png";
import AI from "/src/assets/Images/OurCoursesImg/Data science.png"

function CardContainer(props) {
  // eslint-disable-next-line react/prop-types
  const { cardPrice, cardTitle, cardText, cardImage, cardRating, cardRatingText} = props;

  return (
    <Card className={OurCoursesCss.card} style={{ width: "19rem" }}>
      <Card.Img className="p-1" variant="top" src={cardImage} />
      <Card.Body>
        <Card.Title className="title fs-4 ">{cardTitle}</Card.Title>

        <div className={OurCoursesCss.rating}>
          <div>
            <img className="" style={{ width: "4rem" }} src={cardRating}></img>
          </div>

          <div>
            <p>{cardRatingText}</p>
          </div>
        </div>

        <div className={OurCoursesCss.cardPrice}>
          <p> {cardPrice}</p>
        </div>

        <Card.Text className={OurCoursesCss.cardText}>{cardText}</Card.Text>
        <div className={OurCoursesCss.cardLearningMode}>
          <h6>Learning Mode</h6>
          <div className={OurCoursesCss.cardBtn}>
            <Button className={OurCoursesCss.btnNAme} variant="primary">
              Physical
            </Button>
            <Button className={OurCoursesCss.btnNAme} variant="primary">
              Hybrid
            </Button>
            <Button className={OurCoursesCss.btnNAme} variant="primary">
              Virtual
            </Button>
            <Button className={OurCoursesCss.btnNAme} variant="primary">
              Weekends
            </Button>
          </div>
        </div>
      </Card.Body>

      <div></div>
    </Card>
  );
}


const OurCourses = () => {
  return (
    <>
      <div className="container">
        <h1>Our Courses</h1>
        <p>
          Have you been thinking of courses to enrol in this year, we have your
          in mind
        </p>

        <div className="row">
          <div className="col mt-2">
            <CardContainer
              cardImage={frontEndImg}
              cardTitle={"FrontEnd Development"}
              cardRating={ratingImg}
              cardRatingText={"4.5 (210)"}
              cardText={"lorem ipsum dolor sit amet, consectetur"}
              cardPrice={"N450,000 • 12 weeks"}
            />
          </div>

          <div className="col  mt-2">
            <CardContainer
              cardImage={dataImg}
              cardTitle={"Data Analysis"}
              cardRating={ratingImg}
              cardRatingText={"4.5 (210)"}
              cardText={"lorem ipsum dolor sit amet, consectetur"}
              cardPrice={"N450,000 • 12 weeks"}
            />
          </div>

          <div className="col  mt-2">
            <CardContainer
              cardImage={UX}
              cardTitle={"UI/UX Design"}
              cardRating={ratingImg}
              cardRatingText={"4.5 (210)"}
              cardText={"lorem ipsum dolor sit amet, consectetur"}
              cardPrice={"N450,000 • 12 weeks"}
            />
          </div>

          <div className="col  mt-2 ">
            <CardContainer
              cardImage={security}
              cardTitle={"Cyber Security"}
              cardRating={ratingImg}
              cardRatingText={"4.5 (210)"}
              cardText={"lorem ipsum dolor sit amet, consectetur"}
              cardPrice={"N450,000 • 12 weeks"}
            />
          </div>

          <div className="col  mt-2 ">
            <CardContainer
              cardImage={marketing}
              cardTitle={"Digital Marketing"}
              cardRating={ratingImg}
              cardRatingText={"4.5 (210)"}
              cardText={"lorem ipsum dolor sit amet, consectetur"}
              cardPrice={"N450,000 • 12 weeks"}
            />
          </div>
          <div className="col  mt-2">
            <CardContainer
              cardImage={AI}
              cardTitle={"Data Science/AI"}
              cardRating={ratingImg}
              cardRatingText={"4.5 (210)"}
              cardText={"lorem ipsum dolor sit amet, consectetur"}
              cardPrice={"N450,000 • 12 weeks"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCourses;
