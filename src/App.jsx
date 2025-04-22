import React, { useState } from 'react';
import UnityEmbed from './components/Unity';
import PasscodeForm from './components/PasscodeForm';
import './App.css';

function App() {
  const [isPasscodeVerified, setIsPasscodeVerified] = useState(false);

  const handleCorrectPasscode = () => {
    setIsPasscodeVerified(true);
  };

  return (
    <div className="app-container">
      {isPasscodeVerified ? (
        <UnityEmbed />
      ) : (
        <PasscodeForm onCorrectPasscode={handleCorrectPasscode} />
      )}
    </div>
  );
}

export default App;