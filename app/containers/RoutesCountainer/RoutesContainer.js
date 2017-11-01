import React, {Component} from 'react';
import RoutesMenu from "components/Routes/RoutesMenu";
import {Route} from "react-router-dom";
import CreateRoute from "components/Routes/CreateRoute";
import {connect} from "react-redux";
import * as routeActionCreators from "redux/modules/routes";
import {bindActionCreators} from "redux";
import ListRoutes from "../../components/Routes/ListRoutes";

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
                                onSubmit={this.createRoute}
                                creatingRoute={this.props.creatingRoute}
                                handleInputChange={this.handleChange}/>
                        )}/>
                    <Route path="/routes/list" render={props =>(
                        <ListRoutes routesList={this.props.routesList}/>
                    )}/>
                    <Route path="/routes/detail/:id" render={props => {
                        let {params} = props.match;
                        this.detailRoute(params.id);
                        return <div>asd</div>
                    }}/>
                </div>
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