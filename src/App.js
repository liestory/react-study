import React, {useLayoutEffect, useState} from 'react';
import axios from "axios";
import './App.css';

function App() {
    const [data, setData] = useState([]);

    useLayoutEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log()
                setData(response.data)
            })
    }, []);

    return (
        <div className="App">
            <ul>
                {data.map((item, idx) => <li key={idx}>{item.title}</li>)}
            </ul>
        </div>
    );
}

export default App;
