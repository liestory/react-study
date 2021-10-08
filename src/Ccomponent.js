import React from 'react';

class Ccomponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            class: "off",
            label: "Press",
        };
        console.log("constructor");
    }


    componentDidMount() {
        console.log("componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
    }

    press = () => {
        var className = (this.state.class === "off") ? "on" : "off"
        this.setState({class: className})
    }

    render() {
        console.log("render");
        return (
            <div>
                <div>{this.state.class}
                </div>
                <button onClick={this.press}>{this.state.label}</button>
            </div>
        )
    }
}

export default Ccomponent;