/*
    Programmeurs : L'equipe disign HIA
    Date         : @2024
    But          : Projet final

  Information suppelementaire : Un syste de gestion de presence pour les institutions scolaires

  Page : La page qui demande d'entrer le nouveau mot de passe et de le confirmer.
  
  Version : 1.0

*/

//  Validatition :
import React from 'react';
import { Link } from 'react-router-dom';
import logoHereIam from "../../Data/img/HereIam.svg";
import arrierePlan from '../../Data/img/fond.png';
import logo from '../../Data/img/logo.jpg';
import forgot from "../../Data/img/newPassword.svg";
import '../../Styles/Login.css';

function NewPassword() {
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
            <h2 className="titre" style={{fontSize: '18pt'}}>Nouveau mot de passe</h2>
            <div className="champ-saisie un">
              <div className="icone">
                <i className="fas fa-lock"></i>
              </div>
              <div className="division">
                <input type="text" className="saisie" placeholder='Enter your new password'/>
              </div>
            </div>
            <div className="champ-saisie un">
              <div className="icone">
                <i className="fas fa-lock"></i>
              </div>
              <div className="division">
                <input type="text" className="saisie" placeholder='Confirm your new password'/>
              </div>
            </div>
            <button type='submit' className="bouton"><Link to='/done'>Submit</Link></button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewPassword;
