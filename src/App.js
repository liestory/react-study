import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';


class App extends Component {

    static defaultProps = {
        name: 'App',
        description: 'Application',
        version: '1.0.0',
        emptyFunction: function () {
            return this;
        },
        rowFunction: () => this,
        a: 0
    }


    constructor(props) {
        super(props);
        const {obj1, obj2, h1, h2, emptyFunction} = props;
        console.log(props);
        console.log(obj1 === obj2);
        console.log(h1 === h2);
        emptyFunction.bind(this);

    }

    //-------------------------------------
    render() {
        const {emptyFunction, rowFunction, children} = this.props;

        console.log(emptyFunction());
        console.log(rowFunction());
        return (
            <div>
                {children}
                <content/>
                <footer>
                    <code>
                        {JSON.stringify(this.props, null, 2)}
                    </code>
                    <pre>
                        {JSON.stringify(this.props, null, 2)}
                    </pre>
                </footer>
            </div>
        );
    }
}

/*
App.defaultProps = {
    name: 'App',
    description: 'Application',
    version: '1.0.0'
}
*/


export default App;
