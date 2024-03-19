import React from 'react';
import "../Styles/Navigation.css";


function Navigation() {
    return (
        <div className="barre-navigation">
          <ul className="liste">
            <li>
              <a href="#" className="lien-navigation">
                <i className="icone-navigation fas fa-home"></i>
                <span className="titre-nav">Accueil</span>
              </a>
            </li>
            <li>
              <a href="#" className="lien-navigation">
                <i className="icone-navigation fas fa-user"></i>
                <span className="titre-nav">Utilisateur</span>
              </a>
            </li>
            <li>
              <a href="#" className="lien-navigation">
                <i className="icone-navigation fas fa-wallet"></i>
                <span className="titre-nav">Portefeuille</span>
              </a>
            </li>
            <li>
              <a href="#" className="lien-navigation">
                <i className="icone-navigation fas fa-chart-bar"></i>
                <span className="titre-nav">Graphiques</span>
              </a>
            </li>
            <li>
              <a href="#" className="lien-navigation">
                <i className="icone-navigation fas fa-tasks"></i>
                <span className="titre-nav">Tâches</span>
              </a>
            </li>
            <li>
              <a href="#" className="lien-navigation">
                <i className="icone-navigation fas fa-cog"></i>
                <span className="titre-nav">Paramètres</span>
              </a>
            </li>
            <li>
              <a href="#" className="lien-navigation">
                <i className="icone-navigation fas fa-question-circle"></i>
                <span className="titre-nav">Aide</span>
              </a>
            </li>
            <li>
              <a href="#" className="log-out lien-navigation">
                <i className="icone-navigation fas fa-sign-out"></i>
                <span className="titre-nav">Déconnexion</span>
              </a>
            </li>
          </ul>
        </div>
      );
}

export default Navigation;
