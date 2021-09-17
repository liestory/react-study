import React from 'react';

// eslint-disable-next-line no-undef
const ErrorComponent = () => <div>{props.ignore}</div>

class App extends React.Component {

    constructor(props) {
        console.log('constructor')
        super(props);
        this.state = {
            counter: 0,
            seed: 0,
            initializing: true,
        }

        this.increment = () => {
            this.setState({counter: ++this.state.counter})
        }
        this.decrement = () => {
            this.setState({counter: --this.state.counter})
        }
    }


    static getDerivedStateFromProps(props, state) {
        if (props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.counter,
            }
        }
        return null
    }

    componentDidMount() {
        console.log('componentDidMount')
        setTimeout(() => {
            this.setState({initializing: false})
        }, 500)
        console.log('------------------------')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        if (nextProps.ignoreProps && this.props.ignoreProps !== nextState.ignoreProps) {
            console.log('shouldComponentUpdate - NOT RENDER')
            return false;
        }
        console.log('shouldComponentUpdate - RENDER')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log('------------------------')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        console.log('------------------------')
    }

    componentDidCatch(error, info)  {
        console.log('componentDidCatch');
        this.setState({error: info})
        console.log('------------------------');
    }

    render() {
        console.log('render')
        if (this.state.initializing) {
            return <div>Initializing...</div>
        }

        if (this.props.showErrorComponent && this.state.error) {
            return <div>We have encounter an error! {this.state.error}</div>
        }
        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <div className="counter">
                    Counter: {this.state.counter}
                </div>
                {this.props.showErrorComponent ? <ErrorComponent/> : null}
            </div>
        )
    }
}


export default App;
