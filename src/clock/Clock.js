import React from 'react';

class Clock extends React.Component {

    time;

    constructor(props) {
        super(props);
        this.state = {
            date: new Date
        }
    };


    componentDidMount() {
        console.log('componentDidMount')
        setInterval(() => this.tick(), 1000);
    };

    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.time)
    };

    tick = () => {
        this.setState({
            date: new Date()
        });
    };

    render() {
        console.log('render')
        return (
            <div>
                <h1>Clock</h1>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}

export default Clock;