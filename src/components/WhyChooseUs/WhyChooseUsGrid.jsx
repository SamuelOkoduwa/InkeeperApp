import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";
import style from "./WhyChooseUsGrid.module.css";

const learningOptions = [
  {
    title: "Blended Learning",
    description:
      "Learn at your own speed and convenience with our comprehensive online learning modules.",
    icon: "src/components/WhyChooseUs/whyimages/Frame 82.png",
    link: "#",
    styleName: "blendedLearning",
  },
  {
    title: "Instructor-Led Sessions",
    description:
      "Gain in-depth knowledge and clarify concepts through interactive live sessions with experienced instructors.",
    icon: "src/components/WhyChooseUs/whyimages/secondf.png.png",
    link: "#",
    styleName: "instructorLedSessions",
  },
  {
    title: "Peer-to-Peer Collaboration",
    description:
      "Network and learn from fellow trainees in a supportive online community.",
    icon: "src/components/WhyChooseUs/whyimages/Frame 82 (1).png",
    link: "#",
    styleName: "peerCollaboration",
  },
  {
    title: "Globally Curated Content",
    description:
      "Access latest industry-relevant curriculum from leading tech organisations.",
    icon: "src/components/WhyChooseUs/whyimages/Frame 82 (2).png",
    link: "#",
    styleName: "globallyCurated",
  },
  {
    title: "Expert Mentorship & Collaboration",
    description:
      "Receive guidance and support from experienced professionals in your chosen tech field.",
    icon: "src/components/WhyChooseUs/whyimages/Frame 82 (3).png",
    link: "#",
    styleName: "expertMentorship",
  },
  {
    title: "Locally Tailored Focus",
    description:
      "Benefit from content that addresses the specific needs and context of the African tech market.",
    icon: "src/components/WhyChooseUs/whyimages/Frame 82 (4).png",
    link: "#",
    styleName: "locallyTailored",
  },
  {
    title: "Flexible Payment Plans",
    description:
      "Choose a payment plan that fits your budget, making quality tech education accessible to everyone.",
    icon: "src/components/WhyChooseUs/whyimages/Frame 82 (5).png",
    link: "#",
    styleName: "flexiblePayment",
  },
  {
    title: "Entrepreneurship Support",
    description:
      "Explore opportunities to launch your own tech-driven venture.",
    icon: "src/components/WhyChooseUs/whyimages/Frame 82 (6).png",
    link: "#",
    styleName: "entrepreneurshipSupport",
  },
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
              styleName={Option.styleName}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsGrid;
