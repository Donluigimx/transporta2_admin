import React from 'react';
import ReactDom from 'react-dom';
import Routes from 'config/routes';
import 'bulma';

ReactDom.render(
    <Routes/>,
    document.getElementById('app')
);