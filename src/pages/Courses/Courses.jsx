import React from 'react'
import GroupExample from '../../components/Faq/Faq'
import CourseLearningObjective from "../../components/CourseLearningObjectives/CourseLearningObjective";
import ProductDesign from "../../components/CourseHero/ProductDesign";

function Courses() {
  return (
	<div>
		<ProductDesign />
		<CourseLearningObjective/>
	  <GroupExample />
	</div>
  )
}

export default Courses
