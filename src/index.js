import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DarkProvider } from "./context/darkMode";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DarkProvider>
    <App />
  </DarkProvider>
);


