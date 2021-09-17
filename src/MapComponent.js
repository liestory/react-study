import React from 'react';

class MapComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            styleOn: false,
        }
    }

    changeStyleExample = () => {
        console.log(this.state.styleOn)

        this.setState({
            styleOn: !this.state.styleOn
        })

    }

    render() {


        console.log('MapComponent')
        if (this.state.styleOn) {
            return (

                <li style={{"text-decoration": "line-through"}}>
                    {this.props.example}
                    <button onClick={this.props.changeStyleExample}>Не нужный элемент</button>
                </li>
            )
        } else {
            return (

                <li>
                    {this.props.example}
                    <button onClick={this.changeStyleExample}>Не нужный элемент</button>
                </li>
            )
        }
    }
}

export default MapComponent;