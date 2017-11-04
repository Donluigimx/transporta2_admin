

import React, {Component} from "react";
import {Route} from "react-router-dom";
import GoogleMapReact from "google-map-react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as busStopsActionCreators from "redux/modules/bus_stops";
import Marker from "components/Map/Marker";
import CreateBusStop, {CreateBusStopMessage} from "components/BusStops/CreateBusStop";

class BusStopContainer extends Component {

    componentDidMount() {
        this.props.fetchBusStops();
    }

    onClickHandler = ({lat, lng}) => {
        if (this.props.location.pathname === '/bus_stops/create') {
            this.props.handleMapClicked(lat, lng);
        }
    };

    createBusStop = () => {
        this.props.fetchAndCreateBusStop();
    };

    cancelCreateBusStop = () => {
        this.props.restoreMapClicked();
    };

    render() {

        let point;
        const {mapClicked, busStops, location, clickLat, clickLng} = this.props;

        point = {
            lat: 21.510428,
            lng: -101.8828763
        };

        return (
            <div className="content">
                <h1>Paradas de Camiones</h1>
                <Route exact path="/bus_stops/create" render={ props => (
                    mapClicked
                    ? <CreateBusStop
                            createBusStop={this.createBusStop}
                            cancelCreateBusStop={this.cancelCreateBusStop} />
                    : <CreateBusStopMessage />
                )}/>
                <div style={{width: '500px', height: '500px', marginTop:'10px'}} className="is-centered">
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: "AIzaSyCqywC5RqH6dyL8U6yMsplfVY-VVD_isX8",
                            language: "es"
                        }}
                        center={point}
                        zoom={8}
                        onClick={this.onClickHandler} >
                        {
                            location.pathname === '/bus_stops'
                            ? busStops.map( (busStop, index) => (
                                <Marker
                                    lat={busStop.point.lat}
                                    lng={busStop.point.lng}
                                    pulse={false}
                                    bounce={false} />
                            ))
                            : ''
                        }
                        {
                            (location.pathname === '/bus_stops/create' && mapClicked)
                            ? <Marker lat={clickLat} lng={clickLng} pulse={true} bounce={true}/> : ''
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