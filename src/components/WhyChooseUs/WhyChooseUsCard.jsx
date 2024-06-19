import React from "react";
import style from "./WhyChooseUsCard.module.css";
import { Link } from "react-router-dom";

const WhyChooseUsCard = ({ title, description, icon, link, arrow }) => {
  return (
    <>
      <div className={style.featureCard}>
        <img src={icon} alt={`${title} icon`} className={style.icon} />
        <h3 className="{` ${style.title} ${style[styleName]}`}">{title}</h3>
        <p className={style.description}>{description}</p>
        <div className={style.arrowlearnmore}>
          {/* <a href={link} className={style.learnMore}>
            Learn more */}
          <Link to={link} className={style.learnMore}>
            Learn more
            <img src={arrow} alt="arrow icon" className={style.arrow} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsCard;
