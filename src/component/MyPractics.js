import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import practics from "../jsons/practics";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyPractics.css'
import {BrowserRouter, Link, Route, Switch, useRouteMatch} from 'react-router-dom'
import Lesson from "./Lesson";


const MyPractics = (props) => {
    let match = useRouteMatch()
    {

        return (
            <BrowserRouter>
                <div>
                    <ListGroup as="ul" bg="dark" variant="dark" className="links">
                        {practics.map((practic) => (
                            <ListGroup.Item key={practic.id} variant="dark">
                                <Link to={`${match.url}/${practic.data.card.idShort}`}>
                                    Урок: {practic.data.card.name}
                                </Link>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Switch>
                        {practics.map((practic) => (
                            <Route key={practic.id} path={`${match.path}/${practic.data.card.idShort}`}>
                                <Lesson
                                    name={practic.data.card.name}
                                    text={practic.data.text}
                                    className="lesson"
                                />
                            </Route>
                        ))}
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default MyPractics;