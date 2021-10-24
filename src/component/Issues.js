import React from 'react';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import CreateIssueModal from "./modals/CreateIssueModal";
import CreateCommentContainer from "./modals/CreateCommentModalContainer";
import * as Icon from "react-bootstrap-icons";
import CloseIssueModal from "./modals/CloseIssueModal";


class Issues extends React.PureComponent {


    constructor(props) {
        super(props);

        this.state = {
            issues: null,
            results: null,
            createIssueModal: false,
            createCommentModal: false,
            currentCommentIssue: null,
            onMountComments: false,
            closeIssueModal: false,
            onMountCloseIssue: false,

        }
    }


    componentDidMount() {
        this.props.getIssues();

        this.setState({
            issues: this.props.issues
        })
        console.log("componentDidMount ", this.state.issues);
    }

    componentDidUpdate() {
        this.setState({
            issues: this.props.issues
        })
        console.log("componentDidUpdate ", this.state.issues);
    }

    openCommentModal(number) {
        this.setState({
            createCommentModal: true,
            currentNumberIssue: number,
            onMountComments: true,
        })
    }

    closeCommentModal = () => {
        this.setState({
            createCommentModal: false,
            onMountComments: false
        })
    }

    closeModal = () => {
        this.setState({
            createIssueModal: false
        })
    }


    refreshIssue = () => {
        this.props.getIssues();
        this.setState({
            issues: this.props.issues
        })
        console.log("refreshIssue ", this.state.issues);
    }


    openCloseIssueModal(number) {
        this.setState({
            closeIssueModal: true,
            currentNumberIssue: number,
            onMountCloseIssue: true,
        })
    }

    closeIssueModal =() => {
        this.setState({
            closeIssueModal: false,
            onMountCloseIssue: false
        })
    }

    render() {
        return (
            <div style={{margin: '10px'}}>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup size="lg" aria-label="Basic example">
                        <Button variant="secondary" onClick={() => this.setState({createIssueModal: true})}>Create
                            Issue</Button>
                        <Button variant="secondary" onClick={this.refreshIssue} this>Refresh</Button>
                    </ButtonGroup>
                </ButtonToolbar>

                <CreateIssueModal

                    show={this.state.createIssueModal}
                    onHide={!this.state.createIssueModal}

                    createIssue={this.props.createIssue}
                    issues={this.props.issues}
                    closeModal={this.closeModal}

                />

                {this.state.createCommentModal && <CreateCommentContainer
                    show={this.state.createCommentModal}
                    onHide={!this.state.createCommentModal}

                    number={this.state.currentNumberIssue}
                    closeCommentModal={this.closeCommentModal}
                    onMountComments={this.state.onMountComments}

                />}

                {this.state.onMountCloseIssue && <CloseIssueModal
                    show={this.state.closeIssueModal}
                    onHide={!this.state.closeIssueModal}

                    number={this.state.currentNumberIssue}
                    closeIssue={this.props.closeIssue}
                    closeModal={this.closeIssueModal}

                />}

                <Table responsive="sm" variant="light">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>статус обращения</th>
                        <th>дата и время создания</th>
                        <th>number</th>
                        <th>название</th>
                        <th>описание</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.issues !== null && this.state.issues.map((result) => (
                            <tr key={result.id}>
                                <td>{result.id}</td>
                                <td>{result.state}</td>
                                <td>{new Date(result.created_at).toLocaleString()}</td>
                                <td>{result.number}</td>
                                <td>{result.title}</td>
                                <td>{result.body}</td>
                                <td>
                                    <Button
                                        style={{margin: "3px"}}
                                        variant="outline-secondary"
                                        onClick={() => this.openCommentModal(result.number)}
                                        title="Добавить комментарий"
                                    >
                                        <Icon.Chat/>
                                    </Button>

                                </td>
                                <td>
                                    <Button
                                        style={{margin: "3px"}}
                                        variant="outline-secondary"
                                        onClick={() => this.openCloseIssueModal(result.number)}
                                        title="Закрыть Issue"
                                    >
                                        <Icon.JournalCheck/>
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        style={{margin: "3px"}}
                                        variant="outline-secondary"
                                        href={result.user.html_url}
                                        title="Ссылка на Github"
                                    >
                                        <Icon.Github/>
                                    </Button></td>
                            </tr>
                    ))}

                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Issues;