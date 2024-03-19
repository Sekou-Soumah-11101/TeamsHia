import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import dAnglais from '../../Data/img/anglais.jpg';
import dFrance from '../../Data/img/france.png';
import '../../Styles/navFonctionnalite.css';
import Preview from '../Preview';

function NavBarFunctionality() {
    const [show, setShow] = useState(false);

    function handleShowFullScreen() {
        setShow(true);
    }
    return (
        <div className='principal-nav-fonctionality'>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid>
                        <Navbar.Brand>
                            <div className='priview-btn'>
                                <button type="button" class="btn btn-secondary btn-sm" style={{ margin: '1px', fontWeight: '500' }} onClick={handleShowFullScreen}>
                                    Preview
                                </button>
                                <NavDropdown title={<i className="fa-solid fa-language"><span style={{margin: '10px', fontSize: '18px'}}>Fr</span></i>} id="navbarScrollingDropdown"> {/* Removed the extra curly brace */}
                                    <NavDropdown.Item ><img src={dFrance} alt='france'/>FR</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><img src={dAnglais} alt='Anglais'/>ENG</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
            <Modal show={show} onHide={() => setShow(false)} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title><span className='entete-preview'><i className="fas fa-eye"></i>Preview</span>
                    </Modal.Title>
                    <button type="button" class="btn btn-secondary btn-sm" style={{ margin: '20px', fontWeight: '500' }}>
                        Enregistrer
                    </button>
                </Modal.Header>
                <Modal.Body><Preview /></Modal.Body>
            </Modal>
        </div>
    );
}

export default NavBarFunctionality;
