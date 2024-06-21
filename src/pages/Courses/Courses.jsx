import React from 'react'
import Pricing from '../../components/Pricing/Pricing'
import LandingPageHero from '../../components/LandingPageHero/LandingPageHero'
import OurCourses from '../../components/OurCourses/OurCourses'

function Courses() {
  return (
	<div className='container'> 
	  <OurCourses />
	  <LandingPageHero />
	  <Pricing />
	</div>
  )
}

export default Courses
