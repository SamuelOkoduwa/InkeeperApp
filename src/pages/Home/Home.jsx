import React from 'react'
import LandingPageHero from '../../components/LandingPageHero/LandingPageHero';
import GroupExample from '../../components/Faq/Faq';
import OurCourses from '../../components/OurCourses/OurCourses';
import Partner from '../../components/Partners/Partners'
import WhyChooseUsGrid from '../../components/WhyChooseUs/WhyChooseUsGrid'
import AmazingCompany from '../../components/AmazingCompaniesIntern/AmazingCompany';

function Home() {
  return (
	<div>
    <LandingPageHero />
    <Partner />
    <OurCourses />
    <WhyChooseUsGrid />
    <GroupExample />
    <AmazingCompany />
      
  </div>
  )
}
export default Home;
