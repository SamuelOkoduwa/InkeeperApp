import React from 'react'
import GroupExample from '../../components/Faq/Faq'
import ContactUs from '../../components/ContactUs/ContactUs';
import Partners from '../../components/Partners/Partners';
import AmazingCompany from '../../components/AmazingCompaniesIntern/AmazingCompany';

function About() {
  return (
	<div>
		<Partners />
		<AmazingCompany />
	  <GroupExample />
	  <ContactUs />
	</div>
  )
}

export default About;
