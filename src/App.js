import React from 'react';
import CheckSpeed from "./CheckSpeed";

class App extends React.Component {

    state = {
        speed: 0,
    }


    render() {
        return (
            <div className="App">
                <input type="number" onChange={(e) => this.setState({speed: e.target.value})}/>
                <CheckSpeed speed={this.state.speed}/>
            </div>
        );
    }
}

export default App;
