import React from 'react';
import GoogleMapReact from "google-map-react";
import Marker from "components/Map/Marker";

export default props => {
    let point;

    if (props.busStops.length > 0) {
        point = {
            lat: props.busStops[0].point.lat,
            lng: props.busStops[0].point.lng
        };
    } else {
        point = {
            lat: 21.510428,
            lng: -101.8828763
        }
    }

    return (
        <div className="content">
            <h1>Ruta {props.route.number}</h1> <p>De <strong>{props.route.origin}</strong> a <strong>{props.route.destination}</strong></p>
            <h1>Camiones</h1>
            <h3>Camiones Activos <strong>{props.buses.length}</strong></h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Número de camión</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.buses.map((bus, i) => {
                        return (
                            <tr>
                                <td>{bus.number}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <h1>Paradas de camión</h1>
            <div style={{width: '500px', height: '500px'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyCqywC5RqH6dyL8U6yMsplfVY-VVD_isX8",
                        language: "es"
                    }}
                    center={point}
                    zoom={8}>
                    {
                        props.busStops.map((busStop, key) => (
                            <Marker
                                lat={busStop.point.lat}
                                lng={busStop.point.lng}
                                bounce={false}
                                pulse={false}/>
                        ))
                    }
                </GoogleMapReact>
            </div>
        </div>

    )
}