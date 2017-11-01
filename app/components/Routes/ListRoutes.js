import React from 'react';
import {Link} from "react-router-dom";

export default props => {
    return(
        <table className="table is-striped is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>Ruta</th>
                    <th>ID</th>
                    <th>Origen</th>
                    <th>Destino</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {props.routesList.map( (route,i) => {
                    return (
                        <tr key={i}>
                            <th>{route.number}</th>
                            <td>{route.id}</td>
                            <td>{route.origin}</td>
                            <td>{route.destination}</td>
                            <td><Link to={`/routes/detail/${route.id}`} className="button is-primary">Ver</Link></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}