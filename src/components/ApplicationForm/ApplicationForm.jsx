import myImage from "../../assets/Images/hero.png";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    age: '',
    gender: '',
    location: '',
    course: '',
    paymentOption: '',
    learningMode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-lg-6">
          <img 
            src={myImage} 
            alt="Architectural structure" 
            className="img-fluid h-100 object-fit-cover"
            style={{maxHeight: '100vh'}}
          />
        </div>
        <div className="col-lg-6 bg-white p-4">
          <h2 className="mb-2">Application Form</h2>
          <p className="text-muted mb-4">We'd love you to show your interest by applying here for free. Please fill out this form.</p>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="you@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="+234000000000"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <select
                  className="form-select"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                >
                  <option value="">Age</option>
                  {[...Array(83)].map((_, i) => (
                    <option key={i} value={i + 18}>{i + 18}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <select
                  className="form-select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                name="location"
                value={formData.location}
                onChange={handleChange}
              >
                <option value="">Location</option>
                <option value="local">Local</option>
                <option value="international">International</option>
              </select>
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                name="course"
                value={formData.course}
                onChange={handleChange}
              >
                <option value="">Select Course</option>
                <option value="ui_ux">UI/UX Design</option>
                <option value="ui_ux">UI/UX Design</option>
                <option value="ui_ux">UI/UX Design</option>
                <option value="ui_ux">UI/UX Design</option>
                <option value="ui_ux">UI/UX Design</option>
              </select>
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                name="paymentOption"
                value={formData.paymentOption}
                onChange={handleChange}
              >
                <option value="">Payment Option</option>
                <option value="full">Full Payment</option>
                <option value="installment">Installment</option>
              </select>
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                name="learningMode"
                value={formData.learningMode}
                onChange={handleChange}
              >
                <option value="">Learning Mode</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;

