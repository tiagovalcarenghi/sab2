import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Login from './pages/login/Login';
import MainMenu from './pages/main-menu/MainMenu';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const ambiente = process.env.NODE_ENV;
if (ambiente !== "production") {
  //criarServidor({ environment: ambiente });
}


root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main-menu/*" element={<MainMenu />} />
      </Routes>
    </BrowserRouter>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
