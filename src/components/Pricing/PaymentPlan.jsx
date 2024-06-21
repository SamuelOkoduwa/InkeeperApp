import React from "react";
import styles from "./Pricing.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import check from "../../assets/Images/Icon.jpg";

const paymentPlan = (props) => {
  const {
    bgColor,
    fntColor,
    setBorder,
    checkIcon1,
    checkIcon2,
    checkIcon3,
    checkIcon4,
    checkIcon5,
    checkIcon6,
    title,
    subTitle,
    price,
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
    feature6,
  } = props;

  const style = {
    // border: "none",
    outline: "none",
    width: "100%",
    backgroundColor: bgColor,
    color: fntColor,
    border: setBorder,
  };

  return (
    <>
      {/* <div>
            <div className={styles.learn}>
                <h3>{title}</h3>
                <p>{subTitle}</p>
                <h1>{price}</h1>
            </div>

            <div className={styles.check}>
                <div className={""} style={{display: "flex", alignItems: "center", }}>
                    <img src={checkIcon1} className={styles.checkImg} />
                    <p>{feature1}</p>
                </div>
                <div className={""}>
                    <img src={checkIcon2} className={styles.checkImg} />
                    <p>{feature2}</p>
                </div>
                <div className={""}>
                    <img src={checkIcon3} className={styles.checkImg} />
                    <p>{feature3}</p>
                </div>
                <div className={""}>
                    <img src={checkIcon4} className={styles.checkImg} />
                    <p>{feature4}</p>
                </div>
                <div className={""}>
                    <img src={checkIcon5} className={styles.checkImg} />
                    <p>{feature5}</p>
                </div>
                <div className={""}>
                    <img src={checkIcon6} className={styles.checkImg} />
                    <p>{feature6}</p>
                </div>
            </div>

            <div>
                <button style={style}>Apply Now</button>
            </div>
        </div> */}
      <div className="">

      <div className={styles.learn}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subTitle}</p>
        <h1 className={styles.price}>{price}</h1>
      </div>

      <div className={styles.items}>
        <div style={{ marginTop: "5px" }}>
          <div className={styles.contents}>
            <div className={styles.check}>
              <img src={checkIcon1} className={styles.checkImg} />
            </div>
          </div>
          <div>{feature1}</div>
        </div>

        <div style={{ marginTop: "5px" }}>
          <div className={styles.contents}>
            <div className={styles.check}>
              <img src={checkIcon2} className={styles.checkImg} />
            </div>
          </div>
          <div>{feature2}</div>
        </div>

        <div style={{ marginTop: "5px" }}>
          <div className={styles.contents}>
            <div className={styles.check}>
              <img src={checkIcon3} className={styles.checkImg} />
            </div>
          </div>
          <div>{feature3}</div>
        </div>

        <div style={{ marginTop: "5px" }}>
          <div className={styles.contents}>
            <div className={styles.check}>
              <img src={checkIcon1} className={styles.checkImg} />
            </div>
          </div>
          <div>{feature4}</div>
        </div>

        <div style={{ marginTop: "5px" }}>
          <div className={styles.contents}>
            <div className={styles.check}>
              <img src={checkIcon5} className={styles.checkImg} />
            </div>
          </div>
          <div>{feature5}</div>
        </div>

        <div style={{ marginTop: "5px" }}>
          <div className={styles.contents}>
            <div className={styles.check}>
              <img src={checkIcon6} className={styles.checkImg} />
            </div>
          </div>
          <div>{feature6}</div>
        </div> 
      </div>
      <div className="" style={{margin: "0 32px"}}>
        <button className="btn mb-4" style={style}>Apply Now</button>
      </div>
      </div>
    </>
  );
};

export default paymentPlan;
