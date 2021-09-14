import React from 'react';
import './App.css';
import ParamComponent from "./ParamComponent";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            sum: 0,
        }
    }


    sumNatural = (index) => {
        let sum = index * (index + 1) / 2;
        this.setState({sum})
    }


    render() {
        return (
            <div>
                <ParamComponent sumNatural={this.sumNatural}/>
                <div>
                    Расчеты {this.state.sum}
                </div>
            </div>
        )
    }
}


export default App;
