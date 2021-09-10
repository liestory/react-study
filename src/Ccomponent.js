import React from 'react';


class Ccomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled: false,
            count: 0,
        }
    }

    handleClick = () => {
        this.setState(state => ({
                enabled: !state.enabled
            })
        )
    }

    increment = () => {
        this.setState(state => ({
                count: ++state.count
            })
        )
    }

    decrement = () => {
        this.setState(state => ({
                count: --state.count
            })
        )
    }

    reset = () => {
        this.setState({
            count: 0,
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.reset}>Reset</button>
                <h1>Current: {this.state.count}</h1>
            </div>
        )
    }
}

export default Ccomponent;

Ccomponent.defaultProps = {name: "Igor"};