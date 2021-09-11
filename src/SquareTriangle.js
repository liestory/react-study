import './App.css';
import React from 'react';
import ParamsComponents from "./ParamComponent";
import Square from "./Square";

class SquareTriangle extends React.Component {

    state = {
        a: 1,
        h: 2,
    }


    handleClick = ({a, h}) => {
        this.setState({
            a,
            h
        })
    }

    render() {
        return (
            <div>
                <img src="https://myalfaschool.ru/common/upload/ckeditor/139-320aa5f630c2d038a647afd44be24aa5.png"/>
                <h2>Вычисление площади треугольника</h2>
                <div>
                    <Square a={this.state.a} h={this.state.h}/>
                    <ParamsComponents handleClick={this.handleClick}/>

                </div>

            </div>
        )
    }
}

export default SquareTriangle;
