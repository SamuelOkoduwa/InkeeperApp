import React from 'react'
import ContactUsCSS from './ContactUs.module.css'

function ContactUs() {
  return (
<div>
	<div className={ContactUsCSS.main}>
			
	  <div className={ContactUsCSS.maindiv}>
        <div className={ContactUsCSS.ball}>
	      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2423172245108!2d3.3671399999999885!3d6.61678869999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b939fa4a2bec9%3A0x340b29b74e68299b!2sInnkeeper%20Hackerspace%20(Innkeeper%20Talent%20Accelerator)!5e0!3m2!1sen!2sus!4v1718719368845!5m2!1sen!2sus"
	      width="500" height="500" 
	      allowfullscreen 
		  loading="lazy" referrerpolicy="no-referrer-when-downgrade"
		  title="Responsive Google Map"></iframe>
        </div>

	    <div className={ContactUsCSS.contact}>
		  <h2 className={ContactUsCSS.word}>Contact Us</h2>
		  {/* This is the div containing the Name input */}
		  <div className={ContactUsCSS.nameinput}>
			<div className={ContactUsCSS.lastname}>
			  <p className={ContactUsCSS.first}>
				First Name <br></br>
				<input  type="text" placeholder="label" className={ContactUsCSS.name}></input>
			  </p>
			</div>

			<div className={ContactUsCSS.first}>
			  <p>
				Last Name <br></br>
			    <input  type="text" placeholder="label" className={ContactUsCSS.name}></input>
			  </p>
			  
			</div>
		  </div>

			<p>Email</p>
			<input  type="text" placeholder="label" className={ContactUsCSS.email}></input>
			<p>Message</p>
			<textarea  type="text" placeholder="label" className={ContactUsCSS.message}></textarea><br></br>
			<button className={ContactUsCSS.btn}>Submit</button>
		</div>
	  </div>
	</div>
</div>
  )
}

export default ContactUs
