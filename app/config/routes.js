import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {Component} from "react";
import NavContainer from 'containers/NavContainer/NavContainer';
import AuthenticateContainer from 'containers/AuthenticateContainer/AuthenticateContainer';

class Routes extends Component {
    render () {
        console.log('aqui');
        return (
            <Router>
                <div className="container">
                    <NavContainer/>
                    <Switch>
                        <Route exact path="/auth" component={AuthenticateContainer} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Routes;