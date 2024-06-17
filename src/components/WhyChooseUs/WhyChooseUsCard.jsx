import React from "react";
import style from "./WhyChooseUsCard.moduule.css";

const WhyChooseUsCard = ({ title, description, icon, link }) => {
  return (
    <div className={style.featureCard}>
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="learn-more">
        Learn more
      </a>
    </div>
  );
};

export default WhyChooseUsCard;
