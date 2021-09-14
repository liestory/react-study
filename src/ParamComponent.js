import React from 'react';

class ParamComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        }
    }

    handleChange = (event) => {
        this.setState({
            index: +event.target.value
        })
    }

    handleClick = () => {
        console.log('index : = ', this.state.index);
        this.props.sumNatural(this.state.index);
    }

    render() {
        return (

            <div>
                <label> Введите колличествонатуральных чисел</label>
                <input type="number" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default ParamComponent;