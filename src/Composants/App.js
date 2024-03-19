/*
    Programmeurs : L'equipe disign HIA
    Date         : @2024
    But          : Projet final

  Information suppelementaire : Un syste de gestion de presence pour les institutions scolaires

  Page : App directement attachée à index.js qui est le root principal
  Version : 1.0

*/

//React :**********************************************************************
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

//Pages :***********************************************************************
import LoadingPage from '../Composants/Pages/LoadingPage';
import NavScrollExample from './Bare_Navigation';
import Classe from "./Pages/Classe";
import Done from './Pages/Done';
import ForgetPassWord from "./Pages/ForgetPassWord";
import LoginForm from "./Pages/LoginForm";
import NewPassword from './Pages/NewPassword';
import Validation from './Pages/ValiderCode';

//styles exterieurs :***********************************************************
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

//Datas :***********************************************************************
import hereIcon from "../Data/img/hereIam.png";

//styles locals :***************************************************************
import '../Styles/LoadingPage.css';


//Definition de la fonction principale :
function App() {
  
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);     
  }, []);


  return (
    <Router>
      <div>
        <Helmet>
          <link rel="icon" type="image/png" href={hereIcon} />
        </Helmet>

        {loading ? (
          <LoadingPage />
        ) : (
          <Routes>
            <Route path='/' element={(<CSSTransition classNames="fade" timeout={500}>
              <LoginForm />
            </CSSTransition>)} />
            <Route path='/classe' element={<Classe />} />
            <Route path='/forgetPassword' element={<ForgetPassWord />} />
            <Route path='/validation' element={<Validation />} />
            <Route path='/newPassword' element={<NewPassword />} />
            <Route path='/done' element={<Done />} />
            <Route path='/modal' element={<NavScrollExample/>} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
