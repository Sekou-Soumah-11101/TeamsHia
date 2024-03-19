/*
    Programmeurs : L'equipe disign HIA
    Date         : @2024
    But          : Projet final

  Information suppelementaire : Un syste de gestion de presence pour les institutions scolaires

  Page : La page qui informe l'utilisateur que son mot de passe a bien été
        réinitialiser.

  Version : 1.0

*/

//  Validatition :
import React from 'react';
import { Link } from 'react-router-dom';
import logoHereIam from "../../Data/img/HereIam.svg";
import forgot from "../../Data/img/done.svg";
import arrierePlan from '../../DatasTemp/Img/fond.png';
import logo from '../../DatasTemp/Img/logo.jpg';
import '../../Styles/Login.css';

function Done() {
  return (
    <>
     <div className='logoCCNB'>
        <img src={logo} className='ccnb'></img>
        </div>
           
      <img className="vague" src={arrierePlan} alt="wave" />
      <div className="conteneur">
        <div className="image">
          <img src={logoHereIam} alt="background" />
        </div>
        <div className="contenu-connexion">
          <form action="#">
            <img src={forgot} alt="avatar" />
            <h2 className="titre" style={{fontSize: '18pt'}}><span style={{color: 'green', fontWeight: '20', fontSize: '20px'}}>Mot de passe réinitialisé avec succès !</span></h2>
            
            <button type='submit' className="bouton"><Link to='/'>Done</Link></button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Done;
