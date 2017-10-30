import React from 'react';
import {NavLink} from "react-router-dom";

export default props => {
    return (
        <aside className="menu">
            <ul className="menu-list">
                <li><NavLink to="/routes/create/" activeClassName="is-active">Crear Ruta</NavLink></li>
                <li><NavLink to="/routes/list/" activeClassName="is-active">Todas las Rutas</NavLink></li>
            </ul>
        </aside>
    )
}