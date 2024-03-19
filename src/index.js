/*
    Programmeurs : L'equipe disign HIA
    Date         : @2024
    But          : Projet final

  Information suppelementaire : Un syste de gestion de presence pour les institutions scolaires

  Page : index.js. le coeur de l'applicataion
  Version : 1.0

*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Styles/index.css'
import App from './Composants/App';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

