import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

// const el = document.getElementById('root');
// const root = ReactDOM.createRoot(el);

// root.render(<App />);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);