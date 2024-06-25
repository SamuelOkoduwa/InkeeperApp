import React from 'react';
import Style from "./Hero.module.css";
import CourseImage from "../../assets/Images/Course Image.png";



function ProductDesignHero() {
  return (
    <div className={Style.ProductDesignHero}>
      {/*ProductDesignHero*/}
      {/* <ProductDesignHero /> */}
      <div className={Style.HeroImage }>
        <img src={CourseImage} />
      </div>

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

    </div>
  );
}

export default ProductDesignHero