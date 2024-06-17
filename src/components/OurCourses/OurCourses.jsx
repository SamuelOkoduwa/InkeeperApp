// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "/src/assets/OurCourses.css";

function CardContainer(props) {
  // eslint-disable-next-line react/prop-types
  const { cardPrice, cardTitle, cardText, cardImage, cardRating, cardRatingText} = props;

  return (
    <Card className=" card" style={{ width: "19rem" }}>
      <Card.Img className="p-1" variant="top" src={cardImage} />
      <Card.Body>
        <Card.Title className="title fs-4 ">{cardTitle}</Card.Title>

        <div className="rating">
          <div>
            <img className="" style={{ width: "4rem" }} src={cardRating}></img>
          </div>

          <div>
            <p>{cardRatingText}</p>
          </div>
        </div>

        <div className="cardPrice">
          <p> {cardPrice}</p>
        </div>

        <Card.Text className="cardText">{cardText}</Card.Text>
        <div className="cardLearningMode ">
          <h6>Learning Mode</h6>
          <div className="cardBtn">
            <Button className="btnNAme" variant="primary">
              Physical
            </Button>
            <Button className="btnNAme hybrid" variant="primary">
              Hybrid
            </Button>
            <Button className="btnNAme" variant="primary">
              Virtual
            </Button>
            <Button className="btnNAme" variant="primary">
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
              cardImage="/src/assets/Images/IMG.png"
              cardTitle={"FrontEnd Development"}
              cardRating={"/src/assets/Images/Rating.png"}
              cardRatingText={"4.5 (210)"}
              cardText={"lorem ipsum dolor sit amet, consectetur"}
              cardPrice={"N450,000 • 12 weeks"}
            />
          </div>

          <div className="col  mt-2">
            <CardContainer
              cardImage="/src/assets/Images/data-Analysis.png"
              cardTitle={"Data Analysis"}
              cardRating={"/src/assets/Images/Rating.png"}
              cardRatingText={"4.5 (210)"}
              cardText={"lorem ipsum dolor sit amet, consectetur"}
              cardPrice={"N450,000 • 12 weeks"}
            />
          </div>

          <div className="col  mt-2">
            <CardContainer
              cardImage="/src/assets/Images/UI/UX.png"
              cardTitle={"UI/UX Design"}
              cardRating={"/src/assets/Images/Rating.png"}
              cardRatingText={"4.5 (210)"}
              cardText={"lorem ipsum dolor sit amet, consectetur"}
              cardPrice={"N450,000 • 12 weeks"}
            />
          </div>

          <div className="col  mt-2 ">
            <CardContainer
              cardImage="/src/assets/Images/cyber-Security.png"
              cardTitle={"Cyber Security"}
              cardRating={"/src/assets/Images/Rating.png"}
              cardRatingText={"4.5 (210)"}
              cardText={"lorem ipsum dolor sit amet, consectetur"}
              cardPrice={"N450,000 • 12 weeks"}
            />
          </div>

          <div className="col col-lg-3 mt-2 ">
            <CardContainer
              cardImage="/src/assets/Images/Digital marketing.png"
              cardTitle={"Digital Marketing"}
              cardRating={"/src/assets/Images/Rating.png"}
              cardRatingText={"4.5 (210)"}
              cardText={"lorem ipsum dolor sit amet, consectetur"}
              cardPrice={"N450,000 • 12 weeks"}
            />
          </div>
          <div className="col  mt-2">
            <CardContainer
              cardImage="/src/assets/Images/Data science.png"
              cardTitle={"Data Science/AI"}
              cardRating={"/src/assets/Images/Rating.png"}
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
