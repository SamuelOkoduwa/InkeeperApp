import React from "react";
import styles from "./AmazingCompanies.module.css";
import thgear from "../../assets/Images/thgear.png";
import digi from "../../assets/Images/digi.png";
import barter from "../../assets/Images/barter.png";
import edu from "../../assets/Images/edu.png";
import LM from "../../assets/Images/LM.png";
import Bank from "../../assets/Images/Bank.png";
import lance from "../../assets/Images/lance.png";

function AmazingCompany() {
  return (
    <div className={styles.container}>
      <div className={styles.writeup}>
        <h5 className={styles.heading}>
          Amazing companies our interns work with
        </h5>
        <p className={styles.bodytext}>
          These companies have worked with our interns and have given us amazing
          feedback.
        </p>
      </div>
      <div className={styles.imagecontainer}>
        <img src={thgear} />
        <img src={digi} />
        <img src={barter} />
        <img src={edu} />
        <img src={LM} />
        <img src={Bank} />
        <img src={lance} />
      </div>
    </div>
  );
}

export default AmazingCompany;
