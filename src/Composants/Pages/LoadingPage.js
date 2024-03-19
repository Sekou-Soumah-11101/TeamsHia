/**
    Programmeurs : L'equipe disign HIA
    Date         : @2024
    But          : Projet final

    Information suppelementaire : Un syste de gestion de presence pour les institutions scolaires

    Fonction : Pour afficher une page de Load qui charge au debut de notre site web

    Version : 1.0

 */

import React from 'react';
import logoGif from '../../Data/img/HereIam.gif';
import '../../Styles/LoadingPage.css';



const LoadingPage = () => {

      const style = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            fontSize: '24px',
            fontWeight: 'bold',
      };
      return (


            <div style={style}>
                  <div >
                        <img style={{width: '180px'}} src={logoGif} className='fadeIn' alt="background" />
                        <div >
                              <h1 className="fadeIn" style={{ marginLeft: '25%' }}><div class="text-center">
                                    <div class="spinner-border" role="status">
                                          
                                    </div>
                              </div></h1>
                        </div>

                  </div>
            </div>
      );

};

export default LoadingPage;