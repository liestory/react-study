import React from 'react';

class ParamsComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 0,
            h: 0,
        }
    }


    handleClick = () => {
        this.setState((state, props) => {
                const res = {
                    a: state.a,
                    h: state.h
                }
                props.handleClick(res)
                return res;
            }
        )
    }

    render() {
        return (
            <div>
                <label>{this.state.a} * {this.state.h} / 2</label>
                <input type="number" onChange={(event) =>
                    this.setState({a: event.target.value})}/>
                <input type="number" onChange={(event) =>
                    this.setState({h: event.target.value})}/>
                <button onClick={this.handleClick}>Get Random !!!!!</button>
            </div>
        )

    }
}

export default ParamsComponents;