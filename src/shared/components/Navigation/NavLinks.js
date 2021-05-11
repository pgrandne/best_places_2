import React from 'react';
import { NavLink } from  'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>Tous les utilisateurs</NavLink>
            </li>
            <li>
                <NavLink to="/u1/places">Mes places</NavLink>
            </li>
            <li>
                <NavLink to="/places/new">Ajouter une place</NavLink>
            </li>
            <li>
                <NavLink to="/auth">Se connecter</NavLink>
            </li>
        </ul>
    )
};

export default NavLinks;
