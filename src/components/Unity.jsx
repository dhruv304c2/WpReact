import React, { useEffect, useState } from 'react';
import '../App.css';
import SecretCodeModal from './SecretCodeModal';

const UnityEmbed = () => {
  const [showModal, setShowModal] = useState(false);
  const [secretCode, setSecretCode] = useState('');
  const [gifDone, setGifDone] = useState(false);
  const gifDuration = 1500; // Duration in milliseconds (adjust to your GIF's length)

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'UNITY_GAME_ENDED') {
        const { secretCode } = event.data;
        console.log('[React] Received secretCode from Unity iframe:', secretCode);
        const poemClue = `A haven high, where peace is near,
        Inmobi’sfloor, the Shire is clear.
        Soft and calm, a quiet space,
        With homely charm and gentle grace.
        Seek the clue where calm hearts soar
        It’s waiting on the seventh floor`;
        setSecretCode(poemClue);
        setShowModal(true);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGifDone(true);
    }, gifDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="unity-container" style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {!gifDone && (
        <img
          src="/Nostra.gif"
          alt="Intro Animation"
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 9999,
          }}
        />
      )}

      {gifDone && (
        <iframe
          src="/TH/index.html"
          className="unity-iframe"
          title="Unity WebGL Game"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      )}

      {showModal && (
        <SecretCodeModal secretCode={secretCode} />
      )}
    </div>
  );
};

export default UnityEmbed;
