import React from "react";
import Style from "./Hero.module.css";
import CourseImage from "../../assets/Images/DgtMkt Image2.jpg";

function DigMktHero() {
  return (
    <div className={Style.ProductDesignHero}>
      {/*ProductDesignHero*/}
      {/* <ProductDesignHero /> */}

      <div class={Style.HeroText}>
        <h1 class={Style.Heroheading}>Be a Product Designer in 3 Months.</h1>
        <p class={Style.Herobody}>
          This course equips you with the skills and knowledge to design
          user-centred interfaces (UI) and user experiences (UX) for web and
          mobile applications.
        </p>
        <button class={Style.Herobutton}>Apply Here</button>
      </div>

      {/*HeroImageContainer*/}
      {/* <HeroImageContainer /> */}

      <div className={Style.HeroImage}>
        <img src={CourseImage} />
      </div>
    </div>
  );
}

export default DigMktHero;
