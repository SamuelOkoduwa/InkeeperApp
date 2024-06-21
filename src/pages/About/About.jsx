import React from 'react'
import '../../components/ContactUs/ContactUs'
import GroupExample from "../../components/Faq/Faq";
import ContactUs from "../../components/ContactUs/ContactUs";
import Partners from "../../components/Partners/Partners";
import AmazingCompany from "../../components/AmazingCompaniesIntern/AmazingCompany";
import MeetTeam from "../../components/MeetTeam/MeetTeam";
import Testimonials from "../../components/Testimonials/Testimonials";
import AboutHero from '../../components/AboutHero/AboutHero'


function About() {
  return (
    <div>
      <AboutHero />
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
