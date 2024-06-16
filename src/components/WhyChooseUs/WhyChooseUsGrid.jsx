import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";
import "./WhyChooseUsGrid.css";

const learningOptions = [
  {
    title: "Blended Learning",
    description:
      "Learn at your own speed and convenience with our comprehensive online learning modules.",
    icon: "#",
    link: "#",
  },
  {
    title: "Instructor-Led Sessions",
    description:
      "Gain in-depth knowledge and clarify concepts through interactive live sessions with experienced instructors.",
    icon: "#",
    link: "#",
  },
  {
    title: "Peer-to-Peer Collaboration",
    description:
      "Network and learn from fellow trainees in a supportive online community.",
    icon: "#",
    link: "#",
  },
  {
    title: "Globally Curated Content",
    description:
      "Access latest industry-relevant curriculum from leading tech organisations.",
    icon: "#",
    link: "#",
  },
  {
    title: "Expert Mentorship & Collaboration",
    description:
      "Receive guidance and support from experienced professionals in your chosen tech field.",
    icon: "#",
    link: "#",
  },
  {
    title: "Locally Tailored Focus",
    description:
      "Benefit from content that addresses the specific needs and context of the African tech market.",
    icon: "#",
    link: "#",
  },
  {
    title: "Flexible Payment Plans",
    description:
      "Choose a payment plan that fits your budget, making quality tech education accessible to everyone.",
    icon: "#",
    link: "#",
  },
  {
    title: "Entrepreneurship Support",
    description:
      "Explore opportunities to launch your own tech-driven venture.",
    icon: "#",
    link: "#",
  },
];

const WhyChooseUsGrid = () => {
  return (
    <div className="feature-grid">
      {learningOptions.map((Option, index) => (
        <WhyChooseUsCard
          key={index}
          title={Option.title}
          description={Option.description}
          icon={Option.icon}
          link={Option.link}
        />
      ))}
    </div>
  );
};

export default WhyChooseUsGrid;
