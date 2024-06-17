import React from "react";
import "./AmazingCompany.module.css";
import gear from "../../assets/Images/gear.png";
import digiplus from "../../assets/Images/digiplus.png";
import eco from "../../assets/Images/eco.png";
import haven from "../../assets/Images/haven.png";
import Trulance from "../../assets/Images/Trulance.png";
import union from "../../assets/Images/union.png";

function AmazingCompany() {
  return (
    <>
      <div AmazingCompany>
        <div class="container">
          <div class="write-up">
            <h5>Amazing companies our interns work with</h5>
            <p>
              These companies have worked with our interns and have given us
              amazing feedback.
            </p>
          </div>
          <div class="image-container">
            <img src={gear.png} />
            <img src={digiplus.png} />
            <img src={eco.png} />
            <img src={haven.png} />
            <img src={Trulance.png} />
            <img src={union.png} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AmazingCompany;
