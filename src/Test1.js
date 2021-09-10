import React from 'react';

class Test1 extends React.Component {

    constructor(props) {
        console.clear()
        console.log('constructor');
        console.log(props)
        super();
        this.state = {
            s1: 0
        }
    }

    buttonHandler = () => {
        let value = this.state.s1;
        value++;
        this.setState({s1: value});
    }

    static getDerivedStateFromProps(props, state) {
        console.log('get derived state')
        return null
    }

    componentDidMount() {
        console.log('component did mount')
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('component did update')
    }

    render() {
        console.log('render 1')
        return (
            <>
                {console.log('render 2')}
                <div>
                    <button onClick={this.buttonHandler}>Pushh</button>
                </div>
                <div>
                    {this.state.s1}
                </div>
            </>
        )
    }
}

export default Test1;