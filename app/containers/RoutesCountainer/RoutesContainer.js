import React, {Component} from 'react';
import RoutesMenu from "components/Routes/RoutesMenu";
import {Route} from "react-router-dom";
import CreateRoute from "components/Routes/CreateRoute";
import {connect} from "react-redux";
import * as routeActionCreators from "redux/modules/routes";
import {bindActionCreators} from "redux";

class RoutesContainer extends Component {

    createData = {
        route: '',
        origin: '',
        destination: ''
    };

    createRoute = () => {
        this.props.fetchAndCreateRoute(this.createData.route, this.createData.origin, this.createData.destination);
        this.createData.route = this.createData.origin = this.createData.destination = '';
    };

    handleChange = (e) => {
        this.createData[e.target.name] = e.target.value;
    };

    render () {
        console.log(this.props);
        return (
            <div className="columns">
                <div className="column is-one-third">
                    <RoutesMenu/>
                </div>
                <div className="column">
                    <Route path="/routes/create" render={props =>
                        (<CreateRoute
                                createRoute={this.createRoute}
                                creatingRoute={this.props.creatingRoute}
                                createData={this.createData}
                                handleInputChange={this.handleChange}/>
                        )}/>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        routesList: state.routes.routesList,
        creatingRoute: state.routes.creatingRoute,
    }),
    dispatch => bindActionCreators(routeActionCreators, dispatch)
)(RoutesContainer);