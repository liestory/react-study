import React from 'react';
import update from 'react-addons-update';

class App extends React.Component {

    state = {
        workers: [
            {name: 'Julia', wage: 0},
            {name: 'Diana', wage: 0},
            {name: 'Max', wage: 0},
            {name: 'William', wage: 0},
        ],
        countAllWages: 0,
        value: 0,
    }

    getValueEvent = (event) => {
        return (event.target.value)
    }

    handleChange = (worker, value) => {
        console.log("event: " + value)
        this.setState({
                workers: update(this.state.workers, {
                    [worker]: {
                        $set: {
                            'name': worker.name,
                            'wage': value
                        }
                    }
                })
            }
        )
    }


    countAllWages = (state) => {
        let workers = state.workers;
        console.log(workers);
        let wagesSummary = 0;
        for (let i = 0; i < workers.length; i++) {
            wagesSummary = wagesSummary + workers[i].wage;
        }
        console.log("wagesSummary: = " + wagesSummary)
        let countAllWages = wagesSummary + state.countAllWages
        console.log(this.state.countAllWages + "  " + countAllWages);
        return {countAllWages};
    }


    render() {
        return (
            <div>
                <header>
                    <h2>Зарплаты сотрудников</h2>
                </header>
                <div>
                    {this.state.workers.map((worker) => {
                        return (
                            <div>
                                <label> Имя сотруника {worker.name}</label>
                                <input type="number" onChange={this.handleChange(worker, this.getValueEvent)}/>
                                <label> Зарплата сотрудника {worker.wage}</label>
                            </div>
                        )
                    })}
                    <div>
                        <h3> Общая зарплата всех сотрудников {this.state.countAllWages}</h3>
                        <button
                            type="primary"
                            onClick={() => this.setState(this.countAllWages)}
                        >
                            Click me!
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;


// Дан массив с работниками.
// У каждого работника есть имя, фамилия, количество отработанных дней и зарплатная ставка за день.
// Выведите этих работников на экран в виде таблицы.
// Сделайте так, чтобы в последней колонке автоматически рассчитывалась зарплата работника
// (количество отработанных дней умножить на ставку).
// Сделайте так, чтобы количество дней и ставка выводились в виде инпутов.
// Если поредактировать эти инпуты - зарплата также должна поменяться.
// Под таблицей также выведите суммарную зарплату всех работников.