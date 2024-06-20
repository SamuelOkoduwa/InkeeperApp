import React from 'react'
import GroupExample from '../../components/Faq/Faq'
import CourseLearningObjective from "../../components/CourseLearningObjectives/CourseLearningObjective";
import ProductDesignHero from "../../components/CourseHero/ProductDesignHero";

function Courses() {
  return (
	<div>
		<ProductDesignHero />
		<CourseLearningObjective/>
	  <GroupExample />
	</div>
  )
}

export default Courses
