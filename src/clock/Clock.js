import React from 'react';

class Clock extends React.Component {

    time;

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            count: 0
        }
    };


    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    };

    componentWillUnmount() {
        clearInterval(this.time)
    };

    tick = () => {
        if (this.state.count === 10) throw  new Error("My Error")
        this.setState({
            date: new Date(),
            count: ++this.state.count
        });
        console.log("tick");
    };

    onDelete = () => {

    }

    render() {
        return (
            <div>
                <h1>Clock</h1>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}

export default Clock;