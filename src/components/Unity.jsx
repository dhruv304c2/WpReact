import React, { useEffect, useState } from 'react';
import '../App.css';
import SecretCodeModal from './SecretCodeModal';

const UnityEmbed = () => {
  const [showModal, setShowModal] = useState(false);
  const [secretCode, setSecretCode] = useState('');

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'UNITY_GAME_ENDED') {
        const { secretCode } = event.data;
        console.log('[React] Received secretCode from Unity iframe:', secretCode);
        setSecretCode(secretCode);
        setShowModal(true);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className="unity-container">
      <iframe
        src="/TH/index.html"
        className="unity-iframe"
        title="Unity WebGL Game"
        allowFullScreen
      />
      {showModal && (
        <SecretCodeModal
          secretCode={secretCode}
        />
      )}
    </div>
  );
};

export default UnityEmbed;
