import './App.css';
import React, {Component} from 'react';


class App extends Component {

    state = {
        name: "puck",
        count: 0,

    }

    static defaultProps = {
        name: 'App',
        description: 'Application',
        version: '1.0.0',
        a: 0
    }


    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);

    };

    increment() {
        this.setState(this.setStateIncrement)
    };


    setStateIncrement = (state, props) => {
        console.log(state, props);
        return {
            ...this.state,
            count: ++state.count,
            name: props.name,
        }
    }

    incrementExtra = () => {
        this.setState({...this.state, count: this.state.count + 2});
    };

    decrement = () => {
        let {count} = this.state
        this.setState({...this.state, count: --count});
    };

    //-------------------------------------
    render() {
        const {children} = this.props;
        const {name, count} = this.state;

        return (
            <div>
                {children}
                <article>
                    {name}
                </article>
                <article>
                    <button onClick={this.increment}>
                        Plus
                    </button>
                    <button onClick={this.incrementExtra}>
                        Plus Extra
                    </button>
                    {count}
                    <button onClick={this.decrement}>
                        Minus
                    </button>
                </article>
                <footer>
                </footer>
            </div>
        );
    }
}


export default App;
