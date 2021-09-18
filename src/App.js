import React from 'react';
import './App.css';
import HomePageComponent from "./Home";
import UserPageComponent from "./Users";
import AboutPageComponent from "./About";
import {BrowserRouter, Link, Redirect, Route, Switch} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/user">User</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/home">
                        <HomePageComponent/>
                    </Route>
                    <Route path="/user">
                        <UserPageComponent/>
                    </Route>
                    <Route path="/about">
                        <AboutPageComponent/>
                    </Route>
                    <Redirect from="/" to="/home"></Redirect>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
