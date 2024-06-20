import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { useMediaQuery } from "react-responsive";
import styles from "./Testimonials.module.css";
import Zoe from "../../assets/Images/Zoe.png";
import Mantis from "../../assets/Images/Mantis.png";
import man from "../../assets/Images/man.png";

const testimonialsData = [
  {
    name: "Zoe Mantis",
    role: "Founder, Alpha Group",
    image: Zoe,
    testimonial:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
  {
    name: "John Doe",
    role: "CEO, Beta Ltd",
    image: Mantis,
    testimonial:
      "Dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores",
  },
  {
    name: "Jane Smith",
    role: "Manager, Gamma Inc",
    image: man,
    testimonial:
      "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
  },
];

const Testimonials = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 576px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 577px) and (max-width: 768px)",
  });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 769px)" });

  const itemsPerSlide = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

  const chunkedTestimonialsData = (data, size) => {
    const results = [];
    for (let i = 0; i < data.length; i += size) {
      results.push(data.slice(i, i + size));
    }
    return results;
  };

  
  const extendedTestimonialsData = [...testimonialsData, ...testimonialsData];

  const testimonialChunks = chunkedTestimonialsData(
    extendedTestimonialsData,
    itemsPerSlide
  );

  return (
    <div className={styles.testimonialsection}>
      <div className={styles.titlecontainer}>
        <h4>What our students are saying?</h4>
        <p>
          Read what our students are saying about us and be informed on your
          decision
        </p>
      </div>

      <Carousel interval={3000}>
        {testimonialChunks.map((chunk, chunkIndex) => (
          <Carousel.Item key={chunkIndex}>
            <div
              className={`d-flex justify-content-around ${styles.testimonialContainer}`}
            >
              {chunk.map((testimonial, testimonialIndex) => (
                <div key={testimonialIndex} className={styles.testimonial}>
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
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
