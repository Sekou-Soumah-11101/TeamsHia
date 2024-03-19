/*
    Programmeurs : L'equipe disign HIA
    Date         : @2024
    But          : Projet final

  Information suppelementaire : Un syste de gestion de presence pour les institutions scolaires

  Fonction : La fonction qui retoune tous les étudiants de la chaine JSON et qui les affiches
             à l'écran.
             
  Version : 1.0

*/

import { faArrowLeft, faArrowRight, faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "../Styles/Liste.css";



function Liste() {
    const [users, setUsers] = useState([]);
    const [indexSlideActif, setIndexSlideActif] = useState(2);
    const sliderRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://randomuser.me/api/?results=30");
                setUsers(response.data.results);
            } catch (error) {
                console.error("Erreur ", error);
            }
        };

        fetchData();
    }, []);

    const handleBeforeChange = (ancienIndex, nouvelIndex) => {
        setIndexSlideActif(nouvelIndex);
    };

    const passerAuSuivant = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const Liste = users.map((elem, index) => (
        <div key={index} className={`conteneur-principal ${index === indexSlideActif ? "slide-centre" : ""}`}>
            <div className={`contenu-slide ${index === indexSlideActif ? "contenu-centre" : "contenu-desactive"}`}>
                <div className="boite-enveloppe">
                    <div className="boite">
                        <div className="contenu-image">
                            <div className="boite-image">
                                <img src={elem.picture.large} alt="img" className="image-boitePret" />
                            </div>
                            <div className="mgsIcon">
                                <FontAwesomeIcon icon={faEnvelopesBulk} className="edit" />
                            </div>
                        </div>
                        <div className="contenu-boite">
                            <h2 className={`prenom ${index !== indexSlideActif ? "disabled-text" : ""}`}><span className="email">{elem.email}</span></h2>
                            <h2 className={`prenom ${index !== indexSlideActif ? "disabled-text" : ""}`}>{elem.name.first}, <span className="nom">{elem.name.last}</span></h2>
                            <h2 className={`prenom ${index !== indexSlideActif ? "disabled-text" : ""}`}>{elem.location.postcode}</h2>
                            <div className="boutons">
                                <button type="button" className={`btn btn-outline-danger ${index !== indexSlideActif ? "disabled" : ""}`} onClick={passerAuSuivant} disabled={index !== indexSlideActif}>
                                    Absent(e)
                                </button>
                                <button type="button" className={`btn btn-outline-success ${index !== indexSlideActif ? "disabled" : ""}`} onClick={passerAuSuivant} disabled={index !== indexSlideActif}>
                                    Present(e)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));

    const flecheGauche = <FontAwesomeIcon icon={faArrowLeft} />;
    const flecheDroite = <FontAwesomeIcon icon={faArrowRight} />;

    const parametresSlider = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
        centerMode: true,
        centerPadding: "0",
        prevArrow: <div className="slick-arrow slick-prev">{flecheGauche}</div>,
        nextArrow: <div className="slick-arrow slick-next">{flecheDroite}</div>,
        beforeChange: handleBeforeChange,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
        ],
    };

    return (
        <div className="conteneur-principal">
            <Slider ref={sliderRef} {...parametresSlider}>
                {Liste}
            </Slider>
        </div>
    );
}

export default Liste;
