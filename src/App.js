import React from 'react';
import MapComponent from "./MapComponent";

class App extends React.Component {

    state = {
        examples: ["тестовое задание 1", "vwj;w", "wnwkngw"],
        value: "",
    }


    addExample = () => {
        console.log("addExample", this.state.value)
        this.setState({
            examples: this.state.examples.concat(this.state.value)
        })
        console.log(this.state.examples)
    }


    deleteLastExample = () => {
        console.log("delete")
        if (this.state.examples.length > 1) {
            let newExamples = this.state.examples.slice(0, -1);
            this.setState({
                examples: newExamples
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>Test Example</h2>
                <ul>
                    {this.state.examples.map(example => (
                        <MapComponent
                            key={Math.random()}
                            example={example}
                            deleteExample={this.changeStyleExample}
                        />
                    ))}
                </ul>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.addExample}>Add Example</button>
                <button onClick={this.deleteLastExample}>Delete Example</button>
            </div>
        )
    }
}

export default App;
