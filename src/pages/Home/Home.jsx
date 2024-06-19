import React from 'react'
import LandingPageHero from '../../components/LandingPageHero/LandingPageHero';
import GroupExample from '../../components/Faq/Faq';
import OurCourses from '../../components/OurCourses/OurCourses';
import Partner from '../../components/Partners/Partners'
import WhyChooseUsGrid from '../../components/WhyChooseUs/WhyChooseUsGrid'
import AmazingCompany from '../../components/AmazingCompaniesIntern/AmazingCompany';
import ContactUs from '../../components/ContactUs/ContactUs';

function Home() {
  return (
	<div>
    <LandingPageHero />
    <Partner />
    <OurCourses />
    <WhyChooseUsGrid />
    <GroupExample />
    <AmazingCompany />
    <ContactUs />
      
  </div>
  )
}
export default Home;
