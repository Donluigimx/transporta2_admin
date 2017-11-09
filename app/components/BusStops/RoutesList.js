import React from 'react';

export default ({busStop, routes}) => (
    <table className="table">
        <thead>
            <tr>
                <th>Ruta</th>
                <th>Origen</th>
                <th>Destino</th>
            </tr>
        </thead>
        <tbody>
            {routes.map((route, id) => (
                <tr>
                    <td>{route.number}</td>
                    <td>{route.origin}</td>
                    <td>{route.destination}</td>
                </tr>
            ))}
        </tbody>
    </table>
)