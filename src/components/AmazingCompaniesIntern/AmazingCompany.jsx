import React from "react";
import "./AmazingCompany.module.css";
import gear from "../../assets/Images/gear.png";
import digiplus from "../../assets/Images/digiplus.png";
import eco from "../../assets/Images/eco.png";
import haven from "../../assets/Images/haven.png";
import Legal from "../../assets/Images/Legal.png";
import union from "../../assets/Images/Trulance.png";
import Trulance from "../../assets/Images/union.png";

function AmazingCompany() {
  return (
    <>
      <div AmazingCompany>
        <div className="container">
          <div className="write-up">
            <h5>Amazing companies our interns work with</h5>
            <p>
              These companies have worked with our interns and have given us
              amazing feedback.
            </p>
          </div>
          <div className="image-container">
            <img src={gear} />
            <img src={digiplus} />
            <img src={eco} />
            <img src={haven} />
            <img src={Legal} />
            <img src={union} />
            <img src={Trulance} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AmazingCompany;
