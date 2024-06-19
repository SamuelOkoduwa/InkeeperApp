import React from 'react'

import myimage from "../../assets/Images/hero.png";




function ApplicationForm() {

  const containerstylr = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5F8F8',
    padding: '0px'
  }

  const styles = {


    formContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '50px auto',
      maxWidth: '1200px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
    },
    formImage: {
      flex: '1 1 50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f8f8',
    },
    formImageImg: {
      maxWidth: '100%',
      height: 'auto',
    },
    formContent: {
      flex: '1 1 50%',
      padding: '40px',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    paragraph: {
      marginBottom: '30px',
      fontSize: '16px',
      color: '#666',
    },
    formGroup: {
      marginBottom: '30px',
    },
    input: {
      width: '100%',
      padding: '10px 15px',
      fontSize: '14px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      marginTop: '5px',
    },
    label: {
      display: 'block',
      marginBottom: '5px', 
      fontSize: '14px',
      color: '#333',
    },
    inputHalf: {
      width: 'calc(100% - 10px)',
      
      padding: '10px 15px',
      fontSize: '14px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      marginTop: '5px',
    },
    
    formRow: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '4%',
    },
    select: {
      width: '100%',
      padding: '10px 15px',
      fontSize: '14px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      marginTop: '5px',
    },
    checkboxGroup: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '10px',
    },
    checkboxGroupDiv: {
      display: 'flex',
      alignItems: 'center',
    },
    btnSubmit: {
      display: 'inline-block',
      padding: '12px 20px',
      backgroundColor: '#0068D8',
      color: '#ffffff',
      border: 'none',
      width: '100%',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s',
    },
    btnSubmitHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <>
    
      <div style={containerstylr}>
        
          <img src={myimage} alt="Application Form" />
       
          <div style={styles.formContent}>
        <h2 style={styles.heading}>Application Form</h2>
        <p style={styles.paragraph}>We'd love you to show your interest by applying here for free. Please fill out this form.</p>
        <form>
        <div style={styles.formRow}>
            <div style={styles.formGroup}>
            <label>First Name</label>
            <br/>
              <input type="text" placeholder="First name" style={styles.inputHalf} />
            </div>
            <div style={styles.formGroup}>
            <label>Last Name</label>
              <input type="text" placeholder="Last name" style={styles.inputHalf} />
            </div>
          </div>
          <div style={styles.formGroup}>
          <label>Email</label>
            <input type="email" placeholder="you@gmail.com" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
          <label>Phone Number</label>
            <input type="tel" placeholder="+2340000000030" style={styles.input} />
          </div>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
            <label>Age</label>
              <select style={styles.inputHalf}>
                <option value="" disabled selected>Select</option>
                {/* Add options here */}
              </select>
            </div>
            <div style={styles.formGroup}>
            <label>Gender</label>
              <select style={styles.inputHalf}>
                <option value="" disabled selected>Select</option>
                {/* Add options here */}
              </select>
            </div>
          </div>
          <div style={styles.formGroup}>
          <label>Location</label>
            <select style={styles.select}>
              <option value="" disabled selected>Select</option>
              {/* Add options here */}
            </select>
          </div>
          <div style={styles.formGroup}>
            <label>Select Course</label>
            <br/>
            <div style={styles.checkboxGroup}>
              <div style={styles.checkboxGroupDiv}>
                <input type="checkbox" id="uiux1" />
                <label htmlFor="uiux1">UI/UX Design</label>
              </div>
              <div style={styles.checkboxGroupDiv}>
                <input type="checkbox" id="uiux2" />
                <label htmlFor="uiux2">UI/UX Design</label>
              </div>
              <div style={styles.checkboxGroupDiv}>
                <input type="checkbox" id="uiux3" />
                <label htmlFor="uiux3">UI/UX Design</label>
              </div>
              <div style={styles.checkboxGroupDiv}>
                <input type="checkbox" id="uiux4" />
                <label htmlFor="uiux4">UI/UX Design</label>
              </div>
              <div style={styles.checkboxGroupDiv}>
                <input type="checkbox" id="uiux5" />
                <label htmlFor="uiux5">UI/UX Design</label>
              </div>
              <div style={styles.checkboxGroupDiv}>
                <input type="checkbox" id="uiux6" />
                <label htmlFor="uiux6">UI/UX Design</label>
              </div>
            </div>
          </div>
          <div style={styles.formGroup}>
          <label>Payment Option</label>
            <select style={styles.select}>
              <option value="" disabled selected>Select</option>
              {/* Add options here */}
            </select>
          </div>
          <div style={styles.formGroup}>
          <label>Learning Mode</label>
            <select style={styles.select}>
              <option value="" disabled selected>Select</option>
              {/* Add options here */}
            </select>
          </div>
          <button
            type="submit"
            style={styles.btnSubmit}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.btnSubmitHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.btnSubmit.backgroundColor)}
          >
            Send Message
          </button>
        </form>
      </div>
      </div>
    
    </>
  );
}

export default ApplicationForm;

