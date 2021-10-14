import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import WaitForCloseModal from "./modals/WaitForCloseModal";

function CreateIssueModal(props) {

    const clickAndWaitIssue = () => {
        const stash = props;
        while (stash === props.stash)

            <WaitForCloseModal/>
        return
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Создание Issue
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Issue </Form.Label>
                        <Form.Control type="text" placeholder="Issue" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" rows={3}  placeholder="Leave a comment"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );


}

export default CreateIssueModal;