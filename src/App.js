import React from 'react';
import './App.css';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.link = React.createRef(); //{current: null}
//     this.state = {}
//   }
//
//   render() {
//     const nodes = this.link.current
//     console.log(nodes)
//     return (
//         <div ref={this.link} className="App">
//           <input type="number" ref={this.link}/>
//           <button onClick={() => this.link.current.focus()}>Get Focus Ref</button>
//         </div>
//     )
//   }
// }

function App() {
    const link = React.useRef(null);

    return (
        <div className="App">
            <input type="number" ref={link}/>
            <button onClick={() => link.current.focus()}>Get Focus Ref</button>
        </div>
    )
}

export default App;
