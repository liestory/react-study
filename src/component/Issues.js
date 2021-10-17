import React from 'react';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import CreateIssueModal from "./modals/CreateIssueModal";
import * as Icon from "react-bootstrap-icons";



class Issues extends React.PureComponent {


    constructor(props) {
        super(props);

        this.state = {
            issues: null,
            results: null,
            createIssueModal: false,
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

    openModal = () => {
        this.setState({createIssueModal: true})
    }

    closeModal = () => {
        this.setState({createIssueModal: false})
        console.log("check")
    }


    refreshIssue = () => {
        this.props.getIssues();
        this.setState({
            issues: this.props.issues
        })
        console.log("refreshIssue ", this.state.issues);
    }

    render() {
        return (
            <div style={{'margin': '10px'}}>
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

                <Table responsive="sm" variant="light">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>статус обращения</th>
                        <th>дата и время создания</th>
                        <th>number</th>
                        <th>название</th>
                        {/*<th>имя и ссылка на профиль пользователя создавшего обращение</th>*/}
                        <th></th>
                        <th></th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.state.issues !== null && this.state.issues.map((result) => (
                            <tr key={result.id}>
                                <td>{result.id}</td>
                                <td>{result.state}</td>
                                <td>{result.created_at}</td>
                                <td>{result.number}</td>
                                <td>{result.title}</td>

                                <td>
                                    <Button
                                        style={{ margin: "3px" }}
                                        variant="outline-primary"
                                        href={result.user.html_url}
                                    >
                                        <Icon.Chat />
                                    </Button>

                                </td>
                                <td>                                    <Button
                                    style={{ margin: "3px" }}
                                    variant="outline-primary"
                                    href={result.user.html_url}
                                >
                                    <Icon.Github />
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