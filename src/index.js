import React from 'react';
import ReactDOM from 'react-dom/client';

//Importamos bootstrap al proyecto. Importante que los estilos propios vayan debajo del bootstrap para que no los pise!!!

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '././styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
