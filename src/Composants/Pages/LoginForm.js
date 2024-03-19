/*
    Programmeurs : L'equipe disign HIA
    Date         : @2024
    But          : Projet final

  Information suppelementaire : Un syste de gestion de presence pour les institutions scolaires
  Page : LoginForm, premiere page pour la connexion du proffeseur

  Page : Principal
  Version : 1.0
*/

//Importation des composants necessaires(react, styles, images)
import React from 'react';
import { Link } from 'react-router-dom';
import logoHereIam from "../../Data/img/HereIam.svg";
import arrierePlan from '../../DatasTemp/Img/fond.png';
import iconUtilisateur from '../../DatasTemp/Img/img2.svg';
import logo from '../../DatasTemp/Img/logo.jpg';
import '../../Styles/Login.css';


//Definition de la fonction qui fait office du composant(page de connexion)
function LoginForm() {
  return (
    <>    {/*Composant retourné */}

      <div className="">
        <div className='logoCCNB'>
          <img src={logo} className='ccnb'></img>
        </div>  {/********* Logo ccnb *******/}

        <img className="vague" src={arrierePlan} alt="wave" /> {/***** font temporaire dependament de la  disposition de la taille de l'ecran *******/}

        <div className="conteneur">
          <div className="image">
            <img src={logoHereIam} alt="background" /> {/********* Logo here I am *******/}
          </div>
          <div className="contenu-connexion">
            <form action="#">
              <img src={iconUtilisateur} alt="avatar" />
              <h2 className="titre">Connexion</h2>
              <div className="champ-saisie un">
                <div className="icone">
                  <i className="fas fa-user"></i>
                </div>
                <div className="division">
                  <input type="text" className="saisie" placeholder='Username' />
                </div>
              </div>
              <div className="champ-saisie mot-de-passe">
                <div className="icone">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="division">
                  <input type="password" className="saisie" placeholder='Password' />
                </div>
              </div>
              <div className='forget'>
                <Link to='/forgetPassword' >Forget password ?</Link>  {/********* Guidera pas à pas l'utilisateur au changement de son mot de passe*******/}
              </div>

              <button type='submit' className="bouton"><Link to='/classe'>Login</Link></button>
              {/**** Point d'entrée de l'equipe back *****
              Le click de ce boutton, fera entrer l'enseignant dans sa classe.
              en affichant la liste de ces etudiants dependament de l'heure, la date, 
              et l'instant T
             */}
            </form>
          </div>
        </div>
      </div>

      {/*Composant retourné */} </>
  );
}


//Exportation du composant vers l'App
export default LoginForm;
