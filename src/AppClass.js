import React from 'react';
import './App.css';

class AppClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    handleClick = () => {
        this.setState({
            counter: ++this.state.counter
        })
    }

    render() {


        return (
            <button onClick={this.handleClick}>Click me {this.state.counter}!!!!!</button>
        );
    }
}

export default AppClass;
