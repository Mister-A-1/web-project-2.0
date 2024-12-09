import React from 'react';
import ReactDOM from 'react-dom/client';
  // Import global CSS for styles
import App from './App';  // Import the App component that contains all page logic

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root element for React

root.render(
  <React.StrictMode>
    <App />  {/* Render the main App component inside the root element */}
  </React.StrictMode>
);
