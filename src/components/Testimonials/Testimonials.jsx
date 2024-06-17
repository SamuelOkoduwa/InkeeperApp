import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Testimonials.module.css";
import Zoe from "../../assets/images/UI/Zoe.png";
import Mantis from "../../assets/images/UI/Mantis.png";
import man from "../../assets/images/UI/man.png";

const testimonialsData = [
  {
    name: "Zoe Mantis",
    role: "Founder, Alpha Group",
    image: Zoe,
    testimonial:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
  {
    name: "Zoe Mantis",
    role: "Founder, Alpha Group",
    image: Mantis,
    testimonial:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
  {
    name: "Zoe Mantis",
    role: "Founder, Alpha Group",
    image: man,
    testimonial:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of testimonials to show in a row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="styles.container" style={{ backgroundColor: "#F5F8F8" }}>
      <div className="styles.titlecontainer">
        <h4>What our students are saying?</h4>
        <p>
          Read what our students are saying about us and be informed on your
          decision
        </p>
      </div>

      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className={styles.testimonialContainer}>
            <div className={styles.testimonial}>
              <div className={styles.testimonialInfo}>
                <img
                  className={styles.testimonialImg}
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className={styles.nameRole}>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <div className={styles.testimonialText}>
                <p>{testimonial.testimonial}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
