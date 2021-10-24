import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import WaitForCloseModal from "./WaitForCloseModal";

function CloseIssueModal(props) {
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");
    const [processing, setProcessing] = useState(false);


    const clickCloseAndWaitComment = () => {
        setProcessing(true)
        console.log("еще не  прошел")
        props.closeIssue(props.number, comment);
        props.closeModal()
        setProcessing(false)
        return props.onHide
    }

    const closeModal = () => {
        props.closeModal()
        return props.onHide
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
                    Список комментариев
                </Modal.Title>
            </Modal.Header>

            {!processing ?
                <>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Comment for close Issue </Form.Label>
                                <Form.Control type="text" placeholder="Comment"
                                              onChange={event => setComment(event.target.value)}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" onClick={clickCloseAndWaitComment}>
                            Submit
                        </Button>
                        <Button onClick={closeModal}>Close</Button>
                    </Modal.Footer>
                </> : <>
                    <Modal.Body>
                        <WaitForCloseModal/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={closeModal}>Close</Button>
                    </Modal.Footer>
                </>
            }


        </Modal>
    );


}

export default CloseIssueModal;