import React from 'react';
import Table from 'react-bootstrap/Table'
import axios from "axios";
import Linkify from 'react-linkify';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import CreateIssueModal from "./CreateIssueModal";

const token = "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";

class Issues extends React.Component  {


    constructor(props) {
        super(props);

        this.state = {
            issues: null,
            results: null,
            createIssueModal: false,
        }
    }


    getIssues = async () => {
        let response = await axios.get(
            "https://api.github.com/repos/liestory/Study/issues?state=all",
            {
                headers: {
                    Authorization: "Basic " + btoa("liestory:" + token),
                },
            }
        )
        return response
    }


    linkIssue = (rowData) => {
        return (
            <a href={`${rowData.html_url}`} target="_blank" rel="noreferrer">
                <i className="pi pi-github" style={{fontSize: "2em"}}></i>
            </a>
        );
    }

    componentDidMount() {

        if (this.state.results === null) {
            this.getIssues().then(data => this.setState({results: data.data}))
            // .catch(err => { /*...handle the error...*/});
        }
    }



    render() {
        console.log("results ", this.state.results);
        return (
            //
            <div style={{'margin': '10px'}}>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup size="lg" aria-label="Basic example">
                        <Button variant="secondary" onClick={() => this.setState({createIssueModal: true})}>Create
                            Issue</Button>
                        <Button variant="secondary">Refresh</Button>
                    </ButtonGroup>
                </ButtonToolbar>

                <CreateIssueModal

                    show={this.state.createIssueModal}
                    onHide={() => this.setState({createIssueModal: false})}


                />

                <Table responsive="sm" variant="light">
                    <thead>
                    <tr>

                        <th>статус обращения</th>
                        <th>дата и время создания</th>
                        <th>number</th>
                        <th>название</th>
                        <th>имя и ссылка на профиль пользователя создавшего обращение</th>
                        <th></th>
                        <th></th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.state.results !== null && this.state.results.map((result) => (

                        <tr key={result.id}>
                            <td>{result.state}</td>
                            <td>{result.created_at}</td>
                            <td>{result.number}</td>
                            <td>{result.title}</td>
                            <td><Linkify>{result.user.html_url}</Linkify></td>
                            <td></td>
                            <td>
                                <svg version="1.1" width="32" height="32" viewBox="0 0 16 16"
                                     className="octicon octicon-mark-github" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                </svg>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Issues;