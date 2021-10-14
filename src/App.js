import './App.css';
import React from 'react';
import Menu from "./component/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyPractics from "./component/MyPractics";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Page404 from "./component/Page404";
import IssueContainer from "./component/IssueContainer";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <header style={{'background-color': '#282c34'}}>
                    <h1>---------------------------</h1>
                    <Menu/>
                </header>


                <Switch>
                    <Route path="/features" component={MyPractics}/>
                    <Route path="/Issues" component={IssueContainer}/>
                    {/*<Route path="/"/>*/}
                    <Route path="/404" component={Page404}/>
                    <Redirect from="*" to="/404"/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
