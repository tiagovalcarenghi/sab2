import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Rotas from './routes/rotas';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const ambiente = process.env.NODE_ENV;
if (ambiente !== "production") {
  //criarServidor({ environment: ambiente });
}

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Rotas />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
