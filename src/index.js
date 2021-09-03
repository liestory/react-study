import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function clock() {
    const element = (
        <div>
            <h1>Hello</h1>
            <h2>Time is {new Date().toLocaleTimeString()}</h2>
        </div>
    );

    ReactDOM.render(
        element,
        document.getElementById('root')
    );

};


setInterval(clock, 30000);
