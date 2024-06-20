import React from "react";
import GroupExample from "../../components/Faq/Faq";
import ContactUs from "../../components/ContactUs/ContactUs";
import Partners from "../../components/Partners/Partners";
import AmazingCompany from "../../components/AmazingCompaniesIntern/AmazingCompany";
import MeetTeam from "../../components/MeetTeam/MeetTeam";
import Testimonials from "../../components/Testimonials/Testimonials";

function About() {
  return (
    <div>
      <Partners />
      <AmazingCompany />
      <MeetTeam />
      <GroupExample />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

export default About;
