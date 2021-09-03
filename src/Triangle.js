import React from "react";
import "antd/dist/antd.css";
import "./index.css";

class Triangle extends React.Component {
  static defaultProps = {
    height: 2,
    base: 4,
    square: 0,
  };

  state = {
    height: 0,
    base: 0,
    square: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  render() {
    return (
        <div className="Triangle">
          <div>
            Введите высоту
            <input type="number" value={this.state.height}
                   onChange={(event) => this.setState({height: event.target.value})}/>
          </div>

          <div>
            Введите основание
            <input type="number" value={this.state.base}
                   onChange={(event) => this.setState({base: event.target.value})}/>
          </div>
          <button onClick={() => this.setState({square: (this.state.height * this.state.base) / 2})}
          >
            Count
          </button>
          {this.state.square}
        </div>
    );
  }
}

export default Triangle;
