import React from 'react';
import './SecretCodeModal.css';

const SecretCodeModal = ({ secretCode }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>🎉 Congratulations! 🎉</h2>
        <p>You've completed the challenge!</p>
        <div className="secret-code-container">
          <p className="secret-code-label">Your secret code for the next challenge:</p>
          <div className="secret-code">{secretCode}</div>
        </div>
      </div>
    </div>
  );
};

export default SecretCodeModal; 