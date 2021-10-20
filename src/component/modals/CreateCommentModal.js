import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import WaitForCloseModal from "./WaitForCloseModal";
import Table from 'react-bootstrap/Table'

function CreateCommentModal(props) {
    const [title, setTitle] = useState("");
    const [comments, setComments] = useState();
    const [processing, setProcessing] = useState(false);


    // useEffect(() => {
    //     props.getIssueComment(props.number);
    //     setComments(props.comments);
    //     console.log("comments", comments);
    // });

    // const clickAndWaitIssue = () => {
    //
    // }


    const closeCommentModal = () => {
        props.closeCommentModal()
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
                        <Table responsive="sm" variant="light">
                            <thead>
                            <tr>
                                <th>id</th>
                                <th>комментари</th>
                                <th>дата и время создания</th>
                                <th>number</th>
                                <th>название</th>
                                {/*<th>имя и ссылка на профиль пользователя создавшего обращение</th>*/}
                                <th></th>
                                <th></th>

                            </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </Table>


                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Issue </Form.Label>
                                <Form.Control type="text" placeholder="Issue"
                                              onChange={event => setTitle(event.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Leave a comment"
                                              onChange={event => setComment(event.target.value)}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        {/*<Button variant="primary" type="submit" onClick={clickAndWaitIssue}>*/}
                        {/*    Submit*/}
                        {/*</Button>*/}
                        <Button onClick={closeCommentModal}>Close</Button>
                    </Modal.Footer>
                </> : <>
                    <Modal.Body>
                        <WaitForCloseModal/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={closeCommentModal}>Close</Button>
                    </Modal.Footer>
                </>
            }


        </Modal>
    );


}

export default CreateCommentModal;