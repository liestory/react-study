import React from 'react';

class MyClass extends React.Component {

    state = {
        date: [
            {name: 'Lean React', active: true},
            {name: 'Drink Tea', active: false}
        ]
    };


    updateState(idx) {
        const arr = this.state.date;
        // const result = [
        //     ...arr.slice(0, idx),
        //     {...arr[idx], active: true},
        //     ...arr.slice(idx + 1),
        // ];
        const result = arr.map((el, i) => {
            return idx === i ? {...el, active: true} : el;
        })
        this.setState({
            date: result
        })
    }

    render() {
        let obj = [{name: 'Cap of coffee', active: true}];

        return (
            <div>
                <ul>
                    {this.state.date.map((d, i) => <li key={i.toString()}>{d}</li>)}
                </ul>
                <button onClick={() => this.updateState(obj)}>Update</button>
            </div>
        )
    }
}

export default MyClass;