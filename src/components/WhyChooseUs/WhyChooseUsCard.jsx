import React from "react";
import style from "./WhyChooseUsCard.module.css";

const WhyChooseUsCard = ({ title, description, icon, link }) => {
  return (
    <div className={style.featureCard}>
      <img src={icon} alt={`${title} icon`} className={style.icon} />
      <h3 className="{` ${style.title} ${style[styleName]}`}">{title}</h3>
      <p className={style.description}>{description}</p>
      <a href={link} className={style.learnMore}>
        Learn more
      </a>
    </div>
  );
};

export default WhyChooseUsCard;
