import './App.css';
import Clock from "./clock/Clock";
import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            enable: true
        }
    }

    onChangeVisibility = (event) => {
        this.setState({enable: event.target.checked})
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img
                        src="https://cdn.dribbble.com/users/225481/screenshots/1114887/media/2f573d41f6c253ad8eaec4bebecb3b6e.gif"
                        alt="logo"/>
                    <a>
                        {this.state.enable ? <label><Clock/></label> : <label>Тут нет ничего</label>}

                    </a>
                    <input type="checkbox" onChange={this.onChangeVisibility}/>
                </header>
            </div>
        );
    }
}

export default App;
