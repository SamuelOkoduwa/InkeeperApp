// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OurCoursesCss from  "./OurCourses.module.css";

function CardContainer(props) {
  // eslint-disable-next-line react/prop-types
  const {
    cardPrice,
    cardTitle,
    cardText,
    cardImage,
    cardRating,
    cardRatingText,
  } = props;

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
              cardImage="/src/assets/Images/OurCoursesImg/IMG.png"
              cardTitle={"FrontEnd Development"}
              cardRating={"/src/assets/Images/OurCoursesImg/Rating.png"}
              cardRatingText={"4.5 (210)"}
              cardText={"lorem ipsum dolor sit amet, consectetur"}
              cardPrice={"N450,000 • 12 weeks"}
            />
          </div>

          <div className="col  mt-2">
            <CardContainer
              cardImage="/src/assets/Images/OurCoursesImg/data-Analysis.png"
              cardTitle={"Data Analysis"}
              cardRating={"/src/assets/Images/OurCoursesImg/Rating.png"}
              cardRatingText={"4.5 (210)"}
              cardText={"lorem ipsum dolor sit amet, consectetur"}
              cardPrice={"N450,000 • 12 weeks"}
            />
          </div>

          <div className="col  mt-2">
            <CardContainer
              cardImage="/src/assets/Images/OurCoursesImg/UX.png"
              cardTitle={"UI/UX Design"}
              cardRating={"/src/assets/Images/OurCoursesImg/Rating.png"}
              cardRatingText={"4.5 (210)"}
              cardText={"lorem ipsum dolor sit amet, consectetur"}
              cardPrice={"N450,000 • 12 weeks"}
            />
          </div>

          <div className="col  mt-2 ">
            <CardContainer
              cardImage="/src/assets/Images/OurCoursesImg/cyber-Security.png"
              cardTitle={"Cyber Security"}
              cardRating={"/src/assets/Images/OurCoursesImg/Rating.png"}
              cardRatingText={"4.5 (210)"}
              cardText={"lorem ipsum dolor sit amet, consectetur"}
              cardPrice={"N450,000 • 12 weeks"}
            />
          </div>

          <div className="col  mt-2 ">
            <CardContainer
              cardImage="/src/assets/Images/OurCoursesImg/Digital marketing.png"
              cardTitle={"Digital Marketing"}
              cardRating={"/src/assets/Images/OurCoursesImg/Rating.png"}
              cardRatingText={"4.5 (210)"}
              cardText={"lorem ipsum dolor sit amet, consectetur"}
              cardPrice={"N450,000 • 12 weeks"}
            />
          </div>
          <div className="col  mt-2">
            <CardContainer
              cardImage="/src/assets/Images/OurCoursesImg/Data science.png"
              cardTitle={"Data Science/AI"}
              cardRating={"/src/assets/Images/OurCoursesImg/Rating.png"}
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
