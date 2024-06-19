import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";
import style from "./WhyChooseUsGrid.module.css";

const learningOptions = [
  {
    title: "Blended Learning",
    description:
      "Learn at your own speed and convenience with our comprehensive online learning modules.",
    icon: "src/assets/images/Frame 82.png",
    link: "src/components/WhyChooseUs/Blendedlearning.jsx",
    arrow: "src/assets/images/arrow-right (1).png",
    styleName: "blendedLearning",
  },
  {
    title: "Instructor-Led Sessions",
    description:
      "Gain in-depth knowledge and clarify concepts through interactive live sessions with experienced instructors.",
    icon: "src/assets/images/secondf.png.png",
    link: "src/components/WhyChooseUs/Instructorled.jsx",
    arrow: "src/assets/images/arrow-right (1).png",
    styleName: "instructorLedSessions",
  },
  {
    title: "Peer-to-Peer Collaboration",
    description:
      "Network and learn from fellow trainees in a supportive online community.",
    icon: "src/assets/images/Frame 82 (1).png",
    link: "src/components/WhyChooseUs/Peercollaboration.jsx",
    arrow: "src/assets/images/arrow-right (1).png",
    styleName: "peerCollaboration",
  },
  {
    title: "Globally Curated Content",
    description:
      "Access latest industry-relevant curriculum from leading tech organisations.",
    icon: "src/assets/images/Frame 82 (2).png",
    link: "src/components/WhyChooseUs/Globallycurated.jsx",
    arrow: "src/assets/images/arrow-right (1).png",
    styleName: "globallyCurated",
  },
  // {
  //   title: "Expert Mentorship & Collaboration",
  //   description:
  //     "Receive guidance and support from experienced professionals in your chosen tech field.",
  //   icon: "src/assets/images/Frame 82 (3).png",
  //   link: "src/components/WhyChooseUs/Expertmentorship.jsx",
  //   arrow: "src/assets/images/arrow-right (1).png",
  //   styleName: "expertMentorship",
  // },
  // {
  //   title: "Locally Tailored Focus",
  //   description:
  //     "Benefit from content that addresses the specific needs and context of the African tech market.",
  //   icon: "src/assets/images/Frame 82 (4).png",
  //   link: "src/components/WhyChooseUs/Locallytailored.jsx",
  //   arrow: "src/assets/images/arrow-right (1).png",
  //   styleName: "locallyTailored",
  // },
  // {
  //   title: "Flexible Payment Plans",
  //   description:
  //     "Choose a payment plan that fits your budget, making quality tech education accessible to everyone.",
  //   icon: "src/assets/images/Frame 82 (5).png",
  //   link: "src/components/WhyChooseUs/Flexiblepayment.jsx",
  //   arrow: "src/assets/images/arrow-right (1).png",
  //   styleName: "flexiblePayment",
  // },
  // {
  //   title: "Entrepreneurship Support",
  //   description:
  //     "Explore opportunities to launch your own tech-driven venture.",
  //   icon: "src/assets/images/Frame 82 (6).png",
  //   link: "src/components/WhyChooseUs/Entrepreneurshipsupport.jsx",
  //   arrow: "src/assets/images/arrow-right (1).png",
  //   styleName: "entrepreneurshipSupport",
  // },
];

const WhyChooseUsGrid = () => {
  return (
    <>
      <div className={style.App}>
        <header className={style.AppHeader}>
          <h1>Why Choose Us</h1>
          <p>
            At Innkeeper, we offer a unique learning experience that combines
            flexibility, expertise, and support to set you up for success
          </p>
        </header>

        <div className={style.featureGrid}>
          {learningOptions.map((Option, index) => (
            <WhyChooseUsCard
              key={index}
              title={Option.title}
              description={Option.description}
              icon={Option.icon}
              link={Option.link}
              arrow={Option.arrow}
              styleName={Option.styleName}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsGrid;
