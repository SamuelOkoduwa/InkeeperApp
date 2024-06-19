import React, { useState } from "react";
import "./faq.css";
import Button from "./Button";

function GroupExample() {
  // Initialize state for toggling
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function to show/hide content
  const toggleContent = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same index is clicked
    } else {
      setActiveIndex(index); // Open the clicked index
    }
  };

  const faqItems = [
    {
      question: "Are Innkeeper's courses online or in-class?",
      answer:
        "Innkeeper offers both online and in-class courses. Online courses can be accessed from anywhere with an internet connection, while in-class courses are conducted at our Hackerspace in Magodo, Lagos.",
    },
    {
      question: "How are the courses taught?",
      answer:
        "Our courses are taught using a combination of content delivery, reading materials, and interactive elements such as quizzes and hands-on projects. These classes are instructor-led for a comprehensive learning experience.",
    },
    {
      question:
        "Are there any additional materials I need to be successful in the course?",
      answer:
        "In most cases, students will need access to a laptop and a stable internet connection. Some specific courses may also require additional materials or software.",
    },
    {
      question: "What is your teaching methodology?",
      answer:
        "Innkeeper employs a blended learning approach combining self-paced learning with instructor-led practical hands-on projects, ensuring a well-rounded educational experience.",
    },
    {
      question: "What qualifications do your instructors have?",
      answer:
        "All of our instructors are highly qualified professionals with extensive experience in the tech industry. They have a proven track record of success in their respective fields.",
    },
    {
      question: "How long is each course?",
      answer:
        "The duration of our courses varies depending on the specific program. Typically, our courses range from one month to several months, depending on the depth and scope of the curriculum.",
    },
    {
      question: "Do you offer any certification after the program?",
      answer:
        "Yes, upon successful completion of our courses, students will receive a certificate of completion, recognizing their achievement in the program.",
    },
    {
      question: "What is the format of the certificates offered by Innkeeper?",
      answer:
        "Our certificates are digital, which means they can easily be viewed online. However, upon request, they can also be printed for students who prefer a physical copy.",
    },
    {
      question: "What is the mode of learning?",
      answer:
        "We adopt both blends of virtual and in-class training that is instructor-led and encourages self-paced learning.",
    },
    {
      question: "Can I get a professional certification for these courses?",
      answer:
        "Yes, you can get a professional for our courses but the payment is done independently of the training fee.",
    },
    {
      question: "How do I be a part of Innkeeper Alumni?",
      answer:
        "The Innkeeper Alumni is a thriving community of individuals who have gone through the innkeeper training academy. To be a part of our Innkeeper fellows, you must have completed any of our training programs.",
    },
    {
      question: "What is the average duration of training at Innkeeper?",
      answer:
        "The average training ranges from between 4 weeks to 10 weeks depending on the course being enrolled for. Kindly view the Training Calendar for more details.",
    },
    {
      question: "What are the available payment options?",
      answer:
        "We understand that everyone has different financial preferences. To make our program accessible to a wider range of aspiring tech professionals, we offer several payment options. Check our Pricing Plans again.",
    },
  ];

  return (
    <>
      <div className="Faq">
        <div className="faq-header">
          <h1>FAQs</h1>
          <p>
            Everything you need to know about the Innkeeper. Can't find the
            answer you're looking for? Please contact us.
          </p>
        </div>
        <div className="text-group">
          {faqItems.map((item, index) => (
            <div className="text-column" key={index}>
              <h2 onClick={() => toggleContent(index)}>{item.question}</h2>
              {activeIndex === index && <p>{item.answer}</p>}
            </div>
          ))}
        </div>
        <div className="faq-footer">
          <div>
            <h2>Still have questions?</h2>
            <p>
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <div>
            <Button>Primary</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GroupExample;
