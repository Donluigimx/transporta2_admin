import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component {

    render() {
        return (
            <div className="tabs is-centered">
                <ul>
                    <li><Link to="/routes">Rutas</Link></li>
                    <li><Link to="/buses">Camiones</Link></li>
                    <li><Link to="/bus_stops">Paradas de Camiones</Link></li>
                </ul>
            </div>
        )
    }
}

export default Home;