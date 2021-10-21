import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import WaitForCloseModal from "./WaitForCloseModal";
import Table from 'react-bootstrap/Table'

const CreateCommentModal = (props) => {
    const [body, setBody] = useState("");
    const [comments, setComments] = useState(null);
    const [processing, setProcessing] = useState(false);


    useEffect(() => {
        console.log("props", props)
        if (props.onMountComments) {
            setProcessing(true);
            props.getIssueComment(props.number);
            console.log("propscomments", props.comments)

            if (props.comments !== null) {
                setComments(props.comments);
                setProcessing(false)
                console.log(comments)
                return
            }
        }
    });

    const clickAndWaitComment = () => {
        console.log("body", body);
        setProcessing(true);
        let check = props.createIssueComment(props.number, body);
        console.log("check", check)
        setComments(props.comments);
        console.log("comments", comments);
        if (comments !== null) {
            console.log("comments into", comments)
            setProcessing(false)
            return
        }
    }


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
                                <th>логин</th>
                                <th>комментари</th>
                                <th>дата и время создания</th>
                                <th>дата и время обновления</th>
                            </tr>
                            </thead>
                            <tbody>

                            {comments !== null && (comments.map((result) => (
                                <tr key={result.id}>
                                    <td>{result.id}</td>
                                    <td>{result.user.login}</td>
                                    <td>{result.body}</td>
                                    <td>{new Date(result.created_at).toLocaleString()}</td>
                                    <td>{new Date(result.updated_at).toLocaleString()}</td>
                                </tr>
                            )))}
                            </tbody>
                        </Table>


                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Comment </Form.Label>
                                <Form.Control type="text" placeholder="Comment"
                                              onChange={event => setBody(event.target.value)}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" onClick={clickAndWaitComment}>
                            Submit
                        </Button>
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