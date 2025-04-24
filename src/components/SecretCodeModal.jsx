import React from 'react';
import './SecretCodeModal.css';

const SecretCodeModal = ({ secretCode }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="secret-code-container">
          <p className="secret-code-label">Your clue for the next challenge:</p>
          <div className="secret-code">{secretCode}</div>
        </div>
      </div>
    </div>
  );
};

export default SecretCodeModal; 