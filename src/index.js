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
        <App>value</App>
        <App children="value"/>
        <App/>
        <App a={1} b={false} c={true} d e={"text"} f="Hello" g={{}} h1={{a: 5, b: true, c: "text"}}
             h2={{a: 5, b: true, c: "text"}} obj1={obj} obj2={obj}/>,
    </>,
    document.getElementById('root')
)
;

