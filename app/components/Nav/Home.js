import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Home extends Component {

    render() {
        return (
            <div className="tabs is-centered">
                <ul>
                    <li><NavLink to="/routes" activeClassName="is-active">Rutas</NavLink></li>
                    <li><NavLink to="/bus_stops" activeClassName="is-active">Paradas de Camiones</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Home;