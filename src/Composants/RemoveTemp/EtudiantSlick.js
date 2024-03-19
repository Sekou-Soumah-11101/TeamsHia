import React, { Component } from "react";
import { ListeEtud } from "../../Data/ListeEtudiants";
import '../Styles/EtudiantsSlick.css';
import per from './1.jpg';


class EtudiantSlick extends Component {
    render() {
        const Liste = ListeEtud.map((elem, index) => (
            <div key={index} className="principal">
                <div className="slide-content">
                    <div className="box-enveloppe">
                        <div className="box">
                            <div className="img-content">
                                <div className="box-image">
                                    <img src={per} alt="img" className="image-boxPret" />
                                </div>
                               
                            </div>
                            <div className="box-content">
                                <h2 className="nom">{elem.prenom}, {elem.nom}</h2>
                                <p className="description">Programmation apps Mobile</p>
                                <div className="btn">
                                    <button type="button" className="btn btn-outline-success">Success</button>
                                    <button type="button" className="btn btn-outline-danger">Danger</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ));

        return (
            <>{Liste}</>
        );
    }
}

export default EtudiantSlick;
