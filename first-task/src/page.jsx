import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  
  const [showEmailConfirmation, setShowEmailConfirmation] = useState(false); // New state variable


  const handleContinue = () => {
     if (firstName.trim() === '' || email.trim() === '') {
      alert('Both fields are required');
    } else if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
    } else {
      setShowEmailConfirmation(true);
    }
  };

  const isValidEmail = (email) => {
    // A simple email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    
    <div className='form-main'>
    <div className="links">
        <a href="#">Email Setup</a>
        <a href="#">Skip</a>
      </div>
     <h1 className='head'>Add sender's information</h1>
     <p>Choose the senders name and email address that will appear in your subscribers inbox</p>
      <form >
        <div className='navy' >

          <label for="fname">Senders Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        
        <div className='navy'>
          <label for="email">Senders email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
      </form>
      <button onClick={handleContinue}>Continue</button>
      {showEmailConfirmation && (
        <div className="email-confirmation">
          <img src="images/emailicon.jpg" alt="Email Icon" />
          <p className='foots'>Check your email</p>
          <p className='foot'>To start using klaviyo , activate your account with the link sent to </p>
          <p className='foot'><FontAwesomeIcon icon={faAngleDown} className="angle-icon" />Didn't recieve an email?</p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
