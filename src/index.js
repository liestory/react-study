import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

const lastName = 'Nemykin';

const obj = {
    lastName,
    firstName: 'Igor',
    age: 30
};

const element = <header> Наше приложение</header>
ReactDOM.render(
    <>
        <App>{element}</App>

    </>,
    document.getElementById('root')
)
;

