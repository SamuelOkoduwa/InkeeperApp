import React from 'react'
import LandingPageHero from '../../components/LandingPageHero/LandingPageHero';
import GroupExample from '../../components/Faq/Faq';
import OurCourses from '../../components/OurCourses/OurCourses';

function Home() {
  return (
	<div>
    <LandingPageHero />
    <OurCourses />
    <GroupExample />
  </div>
  )
}
export default Home;
