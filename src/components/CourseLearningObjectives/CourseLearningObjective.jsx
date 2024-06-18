import React from "react";
import Styles from "./CourseLearningObjective.module.css";
import CourseImage from "../../assets/Images/Course image.png";
import CheckIcon from "../../assets/Icons/tick-circle.svg";

function CourseLearningObjective() {
  return (
    <div className={Styles.CourseLearningObjective}>
      {/*ImageContainer*/}
      {/* <ImageContainer /> */}

      <div className={Styles.Image - Cont}>
        <img src={CourseImage} />
      </div>

      {/*Learning Objectives*/}
      {/* <LearningObjective /> */}

      <div className={Styles.learning - objectives}>
        <h1 class={Style.heading}>Learning Objectives</h1>
        <div class={Styles.textbox}>
          <img src={CheckIcon} />
          <p class={Styles.text}>
            Understand the core principle of UI and UX design
          </p>
        </div>

        <div className={Styles.textbox}>
          <img src={CheckIcon} />
          <p className={Styles.text}>
            Conduct user research to identify user needs and pain points.
          </p>
        </div>

        <div class={Styles.textbox}>
          <img src={CheckIcon} />
          <p className={Styles.text}>
            Create user personas and user flows to map out the user journey.
          </p>
        </div>

        <div className={Styles.textbox}>
          <img src={CheckIcon} />
          <p className={Styles.text}>
            Design wireframes, prototypes, and mockups for user interfaces.
          </p>
        </div>

        <div className={Styles.textbox}>
          <img src={CheckIcon} />
          <p className={Styles.text}>
            Apply visual design principles such as typography, colour theory,
            and layout to create user-friendly interfaces.
          </p>
        </div>

        <div className={Styles.textbox}>
          <img src={CheckIcon} />
          <p className={Styles.text}>
            Utilize design tools like Figma or Adobe XD to create high-fidelity
            prototypes.
          </p>
        </div>

        <div className={Styles.textbox}>
          <img src={CheckIcon} />
          <p className={Styles.text}>
            Test and iterate your designs based on user feedback.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseLearningObjective;
