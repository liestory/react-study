import React from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Linkify from 'react-linkify';


const Lesson = (props) => {
    return (
        <Card
            className="bg-dark text-white"
        >
            <Card.Header> {props.name}</Card.Header>
            <Card.Body>
                <Linkify>
                    <Card.Text style={{'white-space': 'pre-line', 'text-align': 'left'}}>{props.text}</Card.Text>
                </Linkify>

            </Card.Body>


        </Card>
    )
}

export default Lesson;