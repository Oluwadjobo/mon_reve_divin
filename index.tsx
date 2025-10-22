/** @jsx React.createElement */
/** @jsxFrag React.Fragment */

import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Could not find root element to mount to');

// ReactDOM vient du build UMD chargé dans index.html
const root = (ReactDOM as any).createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
