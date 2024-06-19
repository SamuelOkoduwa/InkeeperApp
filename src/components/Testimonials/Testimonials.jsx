import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { useMediaQuery } from "react-responsive";
import styles from "./Testimonials.module.css";
import Zoe from "../../assets/images/Zoe.png";
import Mantis from "../../assets/images/Mantis.png";
import man from "../../assets/images/man.png";

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
  // Define breakpoints for different screen sizes
  const isSmallScreen = useMediaQuery({ query: "(max-width: 576px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 577px) and (max-width: 768px)",
  });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 769px)" });

  // Determine the number of items per slide based on screen size
  const itemsPerSlide = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

  // Function to chunk the testimonials data into groups of itemsPerSlide
  const chunkedTestimonialsData = (data, size) => {
    let results = [];
    while (data.length) {
      results.push(data.splice(0, size));
    }
    return results;
  };

  // Chunk the testimonials data into groups for the carousel
  const testimonialChunks = chunkedTestimonialsData(
    [...testimonialsData],
    itemsPerSlide
  );

  return (
    <div className={styles.wholecontainer}>
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
                <div key={testimonialIndex} className={`${styles.testimonial}`}>
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
