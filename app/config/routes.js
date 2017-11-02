import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {Component} from "react";
import NavContainer from 'containers/NavContainer/NavContainer';
import AuthenticateContainer from 'containers/AuthenticateContainer/AuthenticateContainer';
import {PrivateRoute} from "config/utils";
import RoutesContainer from "containers/RoutesCountainer/RoutesContainer";
import Menu from "components/Nav/Menu";

class Routes extends Component {
    render () {
        return (
            <Router>
                <div className="container">
                    <NavContainer/>
                    <div className="columns">
                        <div className="column is-one-third">
                            <Menu/>
                        </div>
                        <div className="column">
                            <Switch>
                                <Route exact path="/auth" component={AuthenticateContainer} redirect="/home"/>
                                <Route path="/routes" component={RoutesContainer}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Routes;