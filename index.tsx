
//import './index.css';
//import React from 'react';
//import ReactDOM from 'react-dom/client';
import App from './App';

/*const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Avec UMD React 18, createRoot est sur ReactDOM global
const root = (ReactDOM as any).createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
