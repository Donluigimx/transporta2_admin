import React from 'react';
import ReactDom from 'react-dom';
import Routes from 'config/routes';
import 'bulma';
import {createStore, applyMiddleware} from "redux";
import users from "redux/modules/users";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

const store = createStore(users, applyMiddleware(thunk));

ReactDom.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById('app')
);