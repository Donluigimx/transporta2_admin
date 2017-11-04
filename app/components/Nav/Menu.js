import React from 'react';
import {NavLink} from "react-router-dom";

export default props => {
    return (
        <aside className="menu">
            <p className="menu-label">Rutas</p>
            <ul className="menu-list">
                <li><NavLink to="/routes/create/" activeClassName="is-active">Crear Ruta</NavLink></li>
                <li><NavLink to="/routes/list/" activeClassName="is-active">Todas las Rutas</NavLink></li>
            </ul>
            <p className="menu-label">Paradas de camiones</p>
            <ul className="menu-list">
                <li><NavLink to="/bus_stops" activeClassName="is-active">Mostrar paradas de camiones</NavLink></li>
                <li><NavLink to="/bus_stops/create" activeClassName="is-active">Crear parada de camión</NavLink></li>
            </ul>
        </aside>
    )
}