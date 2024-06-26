import React from "react";
import styles from "./PricingRenamed.module.css";
import vectorArrow from "../../assets/Images/Vectors-arrow.png";
import PaymentPlan from "./PaymentPlan";
import check from "../../assets/Images/Icon.jpg";

function Pricing() {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.amazing}>Amazing Payment plans for you</h3>
        <p className={styles.option}>
          Our payment options have amazing impact on how you learn
        </p>
      </div>

      {/* <div>
      <img src={vectorArrow} />
      <p>Most popular</p>
    </div> */}

      {/* <div >
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <PaymentPlan title="Learn Now Pay Later" subTitle="Pay back after training" price="Free" feature1="N10,000 Admission Fee" feature2= "6 months repayment + 25% Interest" feature3="12 months repayment + 35% Interest" feature4="Get mentorship for three months" feature5="Get Internship placements" feature6="Access to facilitators live classes" checkIcon1={check} checkIcon2={check} checkIcon3={check} checkIcon4={check} checkIcon5={check} checkIcon6={check} bgColor="#002CB0" fntColor="white" />


        <PaymentPlan title="Best Value" subTitle="One time payment" price="N250,000" feature1="Access to all classes" feature2="Access to all facilitators live classes" feature3="Learn and get internship slots immediately" feature4="Get mentorship for three months" feature5="Learn in a conducive environment" checkIcon1={check} checkIcon2={check} checkIcon3={check} checkIcon4={check} checkIcon5={check} setBorder="2px solid #002CB0"  />

        <PaymentPlan title="Flexible Plan" subTitle="Pay In Batches" price="N130, 000 x 2" feature1="Payment in 1st and 7th week" feature2="Access to all facilitators live classes" feature3="Learn and get internship slots immediately" feature4="Get mentorship for three months" feature5="Learn in a conducive environment" checkIcon1={check} checkIcon2={check} checkIcon3={check} checkIcon4={check} checkIcon5={check} setBorder="2px solid #002CB0" />
      </div>

     <PaymentPlan title="Flexible Plan" subTitle="Pay In Batches" price="N100, 000 x 3" feature1="Payment in 1st and 7th week" feature2="Access to all facilitators live classes" feature3="Learn and get internship slots immediately" feature4="Get mentorship for three months" feature5="Learn in a conducive environment" checkIcon1={check} checkIcon2={check} checkIcon3={check} checkIcon4={check} checkIcon5={check} setBorder="2px solid #002CB0" />
    
    </div> */}
      <div style={{ marginTop: "96px" }}>
        <div className="row justify-content-center ">
          <div className="col-md-6 col-lg-4 mb-4 d-flex align-self-stretch">
            <div className="card w-120 border border-0 shadow">
              <div className={styles.popularIcon}>
                <div className={styles.vectorArrow}>
                  <img className={styles.vectorArrowImg} src={vectorArrow} />
                  <p style={{ fontSize: "14px", color: "#0049FF" }}>
                    Most popular
                  </p>
                </div>
              </div>
              <PaymentPlan
                title="Learn Now Pay Later"
                subTitle="Pay back after training"
                price="Free"
                feature1="N10,000 Admission Fee"
                feature2="6 months repayment + 25% Interest"
                feature3="12 months repayment + 35% Interest"
                feature4="Get mentorship for three months"
                feature5="Get Internship placements"
                feature6="Access to facilitators live classes"
                checkIcon1={check}
                checkIcon2={check}
                checkIcon3={check}
                checkIcon4={check}
                checkIcon5={check}
                checkIcon6={check}
                bgColor="#002CB0"
                fntColor="white"
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4 d-flex align-self-stretch">
            <div className="card w-120 border border-0 shadow">
              <PaymentPlan
                title="Best Value"
                subTitle="One time payment"
                price="N250,000"
                feature1="Access to all classes"
                feature2="Access to all facilitators live classes"
                feature3="Learn and get internship slots immediately"
                feature4="Get mentorship for three months"
                feature5="Learn in a conducive environment"
                checkIcon1={check}
                checkIcon2={check}
                checkIcon3={check}
                checkIcon4={check}
                checkIcon5={check}
                bgColor="transparent"
                fntColor="#002CB0"
                setBorder="2px solid #002CB0"
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4 d-flex align-self-stretch">
            <div className="card w-120 border border-0 shadow">
              <PaymentPlan
                title="Flexible Plan"
                subTitle="Pay In Batches"
                price="N130,000 x 2"
                feature1="Payment in 1st and 7th week"
                feature2="Access to all facilitators live classes"
                feature3="Learn and get internship slots immediately"
                feature4="Get mentorship for three months"
                feature5="Learn in a conducive environment"
                checkIcon1={check}
                checkIcon2={check}
                checkIcon3={check}
                checkIcon4={check}
                checkIcon5={check}
                bgColor="transparent"
                fntColor="#002CB0"
                setBorder="2px solid #002CB0"
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4 d-flex align-self-stretch">
            <div className="card w-120 border border-0 shadow">
              <PaymentPlan
                title="Flexible Plan"
                subTitle="Pay In Batches"
                price="N100,000 x 3"
                feature1="Payment in 1st and 7th week"
                feature2="Access to all facilitators live classes"
                feature3="Learn and get internship slots immediately"
                feature4="Get mentorship for three months"
                feature5="Learn in a conducive environment"
                checkIcon1={check}
                checkIcon2={check}
                checkIcon3={check}
                checkIcon4={check}
                checkIcon5={check}
                fntColor="#002CB0"
                bgColor="transparent"
                setBorder="2px solid #002CB0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
