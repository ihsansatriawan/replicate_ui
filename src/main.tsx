import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Initialize theme before React renders to prevent flash
(() => {
  try {
    const savedTheme = localStorage.getItem('replicate-ui-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    // Use toggle with force parameter for reliable class management
    document.documentElement.classList.toggle('dark', shouldBeDark);
  } catch (e) {
    // Ignore localStorage errors
  }
})();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
