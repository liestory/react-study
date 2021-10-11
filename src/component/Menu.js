import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

class Menu extends React.Component {
    render() {
        return (
            <>

                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home" >Визитка Игоря </Navbar.Brand>
                            <Nav className="me-auto" style={{"float": "right"}}>
                                <Nav.Link href="/home">Home</Nav.Link>
                                <Nav.Link href="/Issues">Issues</Nav.Link>
                                <Nav.Link href="/features">Features</Nav.Link>
                                <Nav.Link href="https://github.com/liestory">About</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
            </>
        )
    }
}

export default Menu;