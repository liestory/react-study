import React from 'react';
import './App.css';
import Dialogs from "./Dialogs";
import Header from "./Header";
import Navbar from "./Navbar";
import Profile from "./Profile";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">

                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
