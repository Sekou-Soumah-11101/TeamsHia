/*
    Programmeurs : L'equipe disign HIA
    Date         : @2024
    But          : Projet final

  Information suppelementaire : Un syste de gestion de presence pour les institutions scolaires

  Page : Cette page demande de rentrer le code à 6 chiffres qui a été envoyé par mail 
         pour modifier le mot de password.
         
  Version : 1.0

*/

//  Validatition :
import React from 'react';
import { Link } from 'react-router-dom';
import logoHereIam from "../../Data/img/HereIam.svg";
import arrierePlan from '../../Data/img/fond.png';
import forgot from "../../Data/img/validation.svg";
import logo from '../../DatasTemp/Img/logo.jpg';
import '../../Styles/Login.css';

function ForgetPassWord() {
  return (
    <>
    <div className='icon-back'>
    <Link to='/forgetPassword'><i className="fas fa-solid fa-arrow-left"></i></Link>
    </div>
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
            <h2 className="titre" style={{fontSize: '18pt'}}>Code à six(6) chiffres</h2>
            <div className="champ-saisie un">
              <div className="icone">
                <i className="fas fa-lock"></i>
              </div>
              <div className="division">
                <input type="text" className="saisie" placeholder='__ __ __ __ __ __'/>
              </div>
            </div>
            <button type='submit' className="bouton"><Link to='/newPassword'>Submit</Link></button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgetPassWord;
