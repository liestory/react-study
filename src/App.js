import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      devLanguages: ['html', 'css', 'js', 'php']
    }
  }


  render() {
    return (
        <div>
          <h2>Список языков прогррамирования</h2>
          <div>
            <ul>
              {this.state.devLanguages.map((devLanguage, index) => <li key={index.toString()}> {devLanguage}</li>)}
            </ul>
          </div>
        </div>
    )
  }
}

export default App;
