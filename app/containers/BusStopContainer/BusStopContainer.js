

import React, {Component} from "react";
import {Route} from "react-router-dom";
import GoogleMapReact from "google-map-react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as busStopsActionCreators from "redux/modules/bus_stops";
import Marker from "components/Map/Marker";

class BusStopContainer extends Component {

    componentDidMount() {
        this.props.fetchBusStops();
    }

    render() {

        let point;

        point = {
            lat: 21.510428,
            lng: -101.8828763
        };

        return (
            <div className="content">
                <h1>Paradas de Camiones</h1>
                <div style={{width: '500px', height: '500px'}} className="is-centered">
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: "AIzaSyCqywC5RqH6dyL8U6yMsplfVY-VVD_isX8",
                            language: "es"
                        }}
                        center={point}
                        zoom={8}>
                        {
                            this.props.busStops.map( (busStop, index) => (
                                <Marker
                                    lat={busStop.point.lat}
                                    lng={busStop.point.lng}
                                    pulse={false}
                                    bounce={false} />
                            ))
                        }
                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        ...state.busStops,
    }),
    dispatch => bindActionCreators(busStopsActionCreators, dispatch)
)(BusStopContainer);