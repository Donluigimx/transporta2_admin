import React, {Component} from 'react';
import RoutesMenu from "components/Nav/Menu";
import {Route} from "react-router-dom";
import CreateRoute from "components/Routes/CreateRoute";
import {connect} from "react-redux";
import * as routeActionCreators from "redux/modules/routes";
import {bindActionCreators} from "redux";
import ListRoutes from "../../components/Routes/ListRoutes";
import RouteDetail from "../../components/Routes/RouteDetail";

class RoutesContainer extends Component {

    createRoute = (values) => {
        this.props.fetchAndCreateRoute(values.route, values.origin, values.destination);
    };

    detailRoute = (id) => {
        this.props.fetchAndRetrieveRoute(id);
    };

    componentDidMount() {
        this.props.fetchAndRetrieveListRoutes();
    }

    onClickMap = ({lat, lng, event}) => {
        this.props.startClickAction(lat, lng);
    };

    unClickMap = () => {
        this.props.stopClickAction();
    };

    createBusStop = routeId => {
        this.props.fetchAndHandleRouteBusStop(routeId);
    };

    render () {
        console.log(this.props);
        return (
            <div>
                <Route path="/routes/create" render={props =>
                    (<CreateRoute
                            onSubmit={this.createRoute}
                            creatingRoute={this.props.creatingRoute}
                            handleInputChange={this.handleChange}/>
                    )}/>
                <Route path="/routes/list" render={props =>(
                    <ListRoutes routesList={this.props.routesList}/>
                )}/>
                <Route path="/routes/detail/:id" render={props => {
                    let {params} = props.match;
                    if (!this.props.hasOwnProperty(params.id)) {
                        this.detailRoute(params.id);
                        return <div>Cargando...</div>
                    } else {
                        return <RouteDetail
                            route={this.props[params.id].route}
                            buses={this.props[params.id].buses}
                            busStops={this.props[params.id].busStops}
                            mapIsClicked={this.props.mapIsClicked}
                            lat={this.props.lat}
                            lng={this.props.lng}
                            onClick={this.onClickMap}
                            cancelClick={this.unClickMap}
                            createBusStop={this.createBusStop}/>
                    }

                }}/>
            </div>
        )
    }
}

export default connect(
    state => ({
        ...state.routes,
    }),
    dispatch => bindActionCreators(routeActionCreators, dispatch)
)(RoutesContainer);