import React from 'react';
import ReactDom from 'react-dom';
import Routes from 'config/routes';
import 'bulma';
import {createStore} from "redux";
import users from "redux/modules/users";
import {Provider} from 'react-redux'

const store = createStore(users);
console.log(store);

ReactDom.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById('app')
);