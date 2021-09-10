import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listNumbers: [1, 3, 2, 5]
    }
  }


  render() {
    return (
        <div>
          <h2>Список чисел с + 3</h2>
          <div>
            <ul>
              {this.state.listNumbers.map((listNumber, index) => <li key={index.toString()}> {listNumber + 3}</li>)}
            </ul>
          </div>
        </div>
    )
  }
}

export default App;