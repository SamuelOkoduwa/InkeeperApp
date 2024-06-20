import React from "react";
import Style from "./Course.module.css";
import CourseImage from "../../assets/Images/FrontEnd Image.jpg";
import CheckIcon from "../../assets/Icons/tick-circle.svg";

function CourseLearningObjective() {
  return (
    <div className={Style.CourseLearningObjective}>
      {/*ImageContainer*/}
      {/* <ImageContainer /> */}

      <div className={Style.ImageCont}>
        <img src={CourseImage} />
      </div>

      {/*Learning Objectives*/}
      {/* <LearningObjective /> */}

      <div className={Style.learningobjectives}>
        <h1 class={Style.heading}>Learning Objectives</h1>
        <div class={Style.textbox}>
          <img src={CheckIcon} />
          <p class={Style.text}>
            Understand the concept of Frontend Development
          </p>
        </div>

        <div className={Style.textbox}>
          <img src={CheckIcon} />
          <p className={Style.text}>
            Understand the basic tools and languages HTML, CSS, Javascript etc. in Frontend Development.
          </p>
        </div>

        <div class={Style.textbox}>
          <img src={CheckIcon} />
          <p className={Style.text}>
            Create user personas and user flows to map out the user journey.
          </p>
        </div>

        <div className={Style.textbox}>
          <img src={CheckIcon} />
          <p className={Style.text}>
            Design wireframes, prototypes, and mockups for user interfaces.
          </p>
        </div>

        <div className={Style.textbox}>
          <img src={CheckIcon} />
          <p className={Style.text}>
            Apply visual design principles such as typography, colour theory,
            and layout to create user-friendly interfaces.
          </p>
        </div>

        <div className={Style.textbox}>
          <img src={CheckIcon} />
          <p className={Style.text}>
            Utilize design tools like Figma or Adobe XD to create high-fidelity
            prototypes.
          </p>
        </div>

        <div className={Style.textbox}>
          <img src={CheckIcon} />
          <p className={Style.text}>
            Test and iterate your designs based on user feedback.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseLearningObjective;
