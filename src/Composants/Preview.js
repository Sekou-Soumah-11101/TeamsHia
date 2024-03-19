import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavDropdown } from 'react-bootstrap'; // Importer le composant NavDropdown
import '../Styles/preview.css';

function Preview() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://randomuser.me/api/?results=30");
                // Générer aléatoirement le statut pour chaque utilisateur
                const usersWithStatus = response.data.results.map(user => ({
                    ...user,
                    status: Math.random() < 0.5 ? 'present' : 'absent' // 50% de chance d'être présent ou absent
                }));
                setUsers(usersWithStatus);
            } catch (error) {
                console.error("Error ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='pricipal-student'>
            {users.map((user, index) => (
                <div key={index} className={`div-preview-component ${user.status === 'present' ? 'present' : 'absent'}`}>
                    <div className='frame-student'>
                        <img src={user.picture.thumbnail} alt='photo' /> 
                        <p>{user.name.first}, {user.name.last}</p> 
                        <div className='status-student'>
                            <div className='status'>
                                <p>
                                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)} 
                                    <div className='editListStudent'>
                                    <NavDropdown 
                                        title={<i className="fas fa-pen-to-square"></i>} 
                                        id="basic-nav-dropdown" 
                                        className="no-caret"
                                    >
                                        <NavDropdown.Item><i className="fas fa-solid fa-check"></i>Present</NavDropdown.Item>
                                        <NavDropdown.Item><i className="fa-solid fa-x"></i>Abscent</NavDropdown.Item>
                                        <NavDropdown.Item><i className="fas fa-regular fa-clock"></i>Late</NavDropdown.Item>
                                    </NavDropdown>
                                    </div>
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Preview;
