import React from 'react';

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
                            <td><button className="button is-primary">Ver</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}