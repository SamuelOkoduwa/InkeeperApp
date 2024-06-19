import React from 'react'
import GroupExample from '../../components/Faq/Faq'
import ContactUs from '../../components/ContactUs/ContactUs';
import Partners from '../../components/Partners/Partners';
import AmazingCompany from '../../components/AmazingCompaniesIntern/AmazingCompany';
import MeetTeam from '../../components/MeetTeam/MeetTeam'

function About() {
  return (
	<div>
		<Partners />
		<AmazingCompany />
		<MeetTeam />
	  <GroupExample />
	  <ContactUs />
	</div>
  )
}

export default About;
