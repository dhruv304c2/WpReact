import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if (typeof window !== 'undefined' && !window.handleGameEnd) {
  window.handleGameEnd = (secretCode) => {
    console.log('[index.js] handleGameEnd:', secretCode);

    const event = new CustomEvent('gameEnded', {
      detail: { secretCode }
    });

    window.dispatchEvent(event);
  };
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
