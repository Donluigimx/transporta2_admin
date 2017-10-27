import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";

export const PrivateRoute = connect(
    (state) => ({
        isAuthed: state.isAuthed,
    })
)(({ component: Component, redirect, isAuthed, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthed ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: redirect,
                state: { from: props.location }
            }}/>
        )
    )}/>
));
