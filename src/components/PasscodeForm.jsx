import React, { useState } from 'react';
import './PasscodeForm.css';

const PasscodeForm = ({ onCorrectPasscode }) => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  const correctPasscode = '1234'; // You can change this to any passcode you want

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passcode === correctPasscode) {
      onCorrectPasscode();
    } else {
      setError('Incorrect passcode. Please try again.');
      setPasscode('');
    }
  };

  return (
    <div className="passcode-container">
      <form onSubmit={handleSubmit} className="passcode-form">
        <h2>Enter Passcode to Play</h2>
        <input
          type="password"
          value={passcode}
          onChange={(e) => setPasscode(e.target.value)}
          placeholder="Enter passcode"
          className="passcode-input"
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasscodeForm; 