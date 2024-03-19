import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import prof from '../../Data/img/1.jpg';
import logo from '../../Data/img/ccnb-here.png';


function UserGuest_NavBar() {

    //Declaration du composants NavFirst : 
    function NavFirst() {
        return (
            <div>
                <Navbar className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand >
                            <img src={logo} alt='logo' style={{ width: '200px', height: '50px', display: 'flex', float: 'left' }} />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text className='position-Prof-Param'>
                                <div className='div-prof-gestion'>
                                    <i className="fas fa-ellipsis-vertical" style={{ color: 'lightgray' }}></i>
                                    <i className="fas fa-bell"></i>
                                    <i className="fas fa-envelope"></i>
                                    <i className="fas fa-cog"></i>
                                    <i className="fas fa-ellipsis-vertical" style={{ color: 'lightgray' }}></i>
                                    <img src={prof} alt='prof-photo' />
                                    <a href="#login">Sekou Soumah</a>
                                </div>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
    //********************  Section retour *********************************/
    //Retour du composant navFirst
    return (
        <div>
            <NavFirst />
        </div>
    )
}
//Export du composant principal (render)
export default UserGuest_NavBar;