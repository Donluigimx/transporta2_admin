import React from 'react';
import ReactDom from 'react-dom';
import Routes from 'config/routes';
import 'bulma';
import {createStore, applyMiddleware, combineReducers} from "redux";
import users, {getAuthToken} from "redux/modules/users";
import routes from "redux/modules/routes";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

const store = createStore(combineReducers(
    {
        users,
        routes,
    }),
    applyMiddleware(thunk)
);

store.dispatch(getAuthToken());

ReactDom.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById('app')
);