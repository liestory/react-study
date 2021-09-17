import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Products from "./Products";


const ExampleComponent = () => (
    <div>
        {[
            <div>1</div>,
            <div>2</div>,
            <div>3</div>,
            <div>4</div>,
            <div>5</div>,

        ]}
    </div>
)

ReactDOM.render(
    <Products/>,
    document.getElementById('root')
);
