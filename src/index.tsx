import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoadWasm } from './LoadWasm/LoadWasm.tsx';
import { App } from './App.tsx';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <LoadWasm>
      <App />
    </LoadWasm>
  </React.StrictMode>
);
