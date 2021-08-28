import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Button, InputNumber} from 'antd';


class NumericNature extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 0};
        this.state = {sum: 0};
    }

    onChange = (value) => {
        this.setState({value});
        console.log({value})
    };

    getSum = (state) => {
        return {sum: state.value * (state.value + 1) / 2};
    }


    render() {
        return (
            <div>
                <InputNumber style={{width: 120}} value={this.state.value} min={1} max={10} defaultValue={0}
                             onChange={this.onChange}/>
                <Button
                    type="primary"
                    onClick={() => this.setState(this.getSum)}
                >
                    Click me!
                </Button>
                <p>
                    Полученная сумма = {this.state.sum}
                </p>
            </div>

        );
    }
}


export default NumericNature;