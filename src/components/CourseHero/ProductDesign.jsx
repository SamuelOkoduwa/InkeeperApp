import React from 'react';
import Style from "./Course.module.css";
import CourseImage from "../../assets/Images/PD Image.png";


function ProductDesign() {
  return (
    <div className={Style.ProductDesign}>
      {/*ProductDesign*/}
      {/* <ProductDesign /> */}

      <div class={Style.HeroText}>
        <h1 class={Style.Heroheading}>Be a Product Designer in 3 Months</h1>
        <p class={Style.text}>
          This course equips you with the skills and knowledge to design
          user-centred interfaces (UI) and user experiences (UX) for web and
          mobile applications.
        </p>
        <button></button>
      </div>

      {/*ImageContainer*/}
      {/* <ImageContainer /> */}

      <div className={Style.HeroImage}>
        <img src={CourseImage} />
      </div>
    </div>
  );
}

export default ProductDesign