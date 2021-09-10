import './App.css';
import React from 'react';

class App extends React.Component {

  state = {
    show: true,
    name: 'Иван'
  }

  onChangeShow = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    return (
        <div>
          {this.state.show ? "Привет, " : "Пока, "}{this.state.name}
          <button onClick={this.onChangeShow}>Change show</button>
        </div>
    )
  }
}

export default App;