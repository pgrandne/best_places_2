import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
    const auth = useContext(AuthContext);

    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>Tous les utilisateurs</NavLink>
            </li>
            {auth.isLoggedIn && (
                <li>
                    <NavLink to="/u1/places">Mes places</NavLink>
                </li>
            )}
            {auth.isLoggedIn && (
                <li>
                    <NavLink to="/places/new">Ajouter une place</NavLink>
                </li>
            )}
            {!auth.isLoggedIn && (
                <li>
                    <NavLink to="/auth">Se connecter</NavLink>
                </li>
            )}
                        {auth.isLoggedIn && (
                <li>
                    <button onClick={auth.logout}>Se déconnecter</button>
                </li>
            )}
        </ul>
    )
};

export default NavLinks;
