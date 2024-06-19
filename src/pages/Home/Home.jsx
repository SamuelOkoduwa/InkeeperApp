import React from 'react'
import LandingPageHero from '../../components/LandingPageHero/LandingPageHero';
import GroupExample from '../../components/Faq/Faq';
import OurCourses from '../../components/OurCourses/OurCourses';
import Partner from '../../components/Partners/Partners'

function Home() {
  return (
	<div>
    <LandingPageHero />
    <Partner />
    <OurCourses />
    <GroupExample />
      
  </div>
  )
}
export default Home;
