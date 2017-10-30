import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {Component} from "react";
import NavContainer from 'containers/NavContainer/NavContainer';
import AuthenticateContainer from 'containers/AuthenticateContainer/AuthenticateContainer';
import {PrivateRoute} from "config/utils";
import RoutesContainer from "containers/RoutesCountainer/RoutesContainer";

class Routes extends Component {
    render () {
        return (
            <Router>
                <div className="container">
                    <NavContainer/>
                    <Switch>
                        <Route exact path="/auth" component={AuthenticateContainer} redirect="/home"/>
                        <Route path="/routes" component={RoutesContainer}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Routes;