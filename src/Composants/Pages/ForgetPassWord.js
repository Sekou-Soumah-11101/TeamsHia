/*
    Programmeurs : L'equipe disign HIA
    Date         : @2024
    But          : Projet final

  Information suppelementaire : Un syste de gestion de presence pour les institutions scolaires

  Page : La page où l'on réinitialise son mot de passe lorsqu'on clique
         sur le bouton forgetPassword. On demande ici l'adresse mail de l'utilisateur.
         
  Version : 1.0

*/

//Forget Password :


import { Link } from 'react-router-dom';
import logoHereIam from "../../Data/img/HereIam.svg";
import arrierePlan from '../../Data/img/fond.png';
import forgot from "../../Data/img/forgotPassWord.svg";
import logo from '../../DatasTemp/Img/logo.jpg';
import '../../Styles/Login.css';

function ForgetPassWord() {
  return (
    <>
    <div className='icon-back'>
    <Link to='/'><i className="fas fa-solid fa-arrow-left"></i></Link>
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
            <h2 className="titre" style={{fontSize: '18pt'}}>Réinitialiser mot de passe</h2>
            <div className="champ-saisie un">
              <div className="icone">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="division">
                <input type="text" className="saisie" placeholder='Enter your address email'/>
              </div>
            </div>
            <button type='submit' className="bouton"><Link to='/validation'>Submit</Link></button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgetPassWord;
