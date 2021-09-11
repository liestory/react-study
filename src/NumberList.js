import React from 'react';
import ListItem from "./ListItem";

class NumberList extends React.Component {


    state = {
        workers: [1, 2, 3],
    }

    renderElement = () => this.state.workers.map((worker, index) =>
        <ListItem key={index.toString()} worker={worker}/>)

    render() {
        return (
            <>
                <h1>Список</h1>
                <ul>
                    {this.renderElement()}
                </ul>
                <div>
                    <button onClick={() => {
                        this.setState(({workers}) => {
                                const newValue = parseInt(Math.random() * 99);
                                console.log('workers: ' + workers)
                                return {workers: [...workers, newValue]};
                            }
                        )
                    }}>Add Workers
                    </button>
                </div>
            </>
        )
    }

}

export default NumberList;
