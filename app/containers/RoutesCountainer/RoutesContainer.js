import React, {Component} from 'react';
import RoutesMenu from "components/Routes/RoutesMenu";
import {Route} from "react-router-dom";
import CreateRoute from "components/Routes/CreateRoute";

class RoutesContainer extends Component {

    createRoute = (route, from, to) => {

    };

    render () {

        return (
            <div className="columns">
                <div className="column is-one-third">
                    <RoutesMenu/>
                </div>
                <div className="column">
                    <Route path="/routes/create" component={CreateRoute}/>
                </div>
            </div>
        )
    }
}

export default RoutesContainer;