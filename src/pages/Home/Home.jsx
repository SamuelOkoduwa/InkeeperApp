import React from "react";
import LandingPageHero from "../../components/LandingPageHero/LandingPageHero";
import GroupExample from "../../components/Faq/Faq";
import OurCourses from "../../components/OurCourses/OurCourses";
import Testimonials from "../../components/Testimonials/Testimonials";

function Home() {
  return (
    <div>
      <LandingPageHero />
      <OurCourses />
      <GroupExample />
      <Testimonials />
    </div>
  );
}
export default Home;
