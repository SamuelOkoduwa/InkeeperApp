import React from 'react'
import styles from './Form.module.css';


function Form() {
  return (
<div>

  <div className={styles.container}>

    <div className={styles.contact}>Contact Us</div>
    <p className={styles.text}>Are you concerned and our FAQ has not given answers to all your questions?     
       <br/> Contact our amazing team today
    </p>



    <form>

    <div className={styles.form_container}>

      <div className={styles.input_section}>
        
        <div className={styles.f_name}>
        <label htmlFor="f-name">First Name</label>
        <input type="text" className={styles.form_input} placeholder='First name'/>
        </div>

        <div>  
        <label htmlFor="l-name">Last Name</label>
        <input type="text" className={styles.form_input} placeholder='Last name'/>
        </div>  

      </div>

      <div className={styles.email}>
        <label htmlFor="email">Email</label>
        <input type="email" className={styles.email_input}  placeholder='you@gmail.com' />
      </div>

      <div className={styles.phone}>
        <label htmlFor="text">Phone</label>
        <input type="text" className={styles.phone_input}   placeholder='+2340000000030' />
      </div>

      <div className={styles.description}>
        <label htmlFor="text">Description</label>
        <textarea placeholder="Enter a description..." className={styles.textarea}></textarea>
   
      </div>

      <div className={styles.sendbutton}>
      <button type='btn'>Send Message</button>
      </div>


    </div>

    </form>


    

  </div>

</div>
  )
}

export default Form