import React from 'react';
import Table from 'react-bootstrap/Table'
import axios from "axios";


// async function getIssues() {
//     const octokit = new Octokit({auth: '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'});
//     const response = await octokit.request('GET /repos/liestory/react-study/issues'
//         ,{
//         org: 'liestory',
//         repo: 'react-study'
//     }
//     )
//     return response;
// }


// await octokit.request('GET /repos/{owner}/{repo}/issues', {
//     owner: 'octocat',
//     repo: 'hello-world'
// })

const token = "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";

const authHeader =
    "token " + atob("Z2hwX2pWWDJaaDVsZTZFM0JobTlSSHZmejdWeHpxTGtHdDFhV0ZMbA==");

class Issues extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            results: null,
        }
    }

    getIssues = async () => {
        let response = await axios.get(
            "https://api.github.com/repos/liestory/Study/issues?state=all",
            {
                headers: {
                    Authorization: "Basic " + btoa("liestory:" + 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),
                    // "Authorization": "token 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",
                },
            }
        )
        return response
    }


    createIssue = async (body) => {
        let response = await axios.post(
            "https://api.github.com/repos/liestory/Study/issues",
            {
                headers: {
                    "Authorization": "token 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",
                },
                body,
            }
        )
        return response
    }


    updateIssues = async (number, body) => {
        let response = await axios.get(
            "https://api.github.com/repos/liestory/Study/issues/" + number,
            {
                headers: {
                    "Authorization": "Basic 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",
                },
                body,
            }
        )
        return response
    }

    deleteIssues = async (number) => {
        let response = await axios.get(
            "https://api.github.com/repos/liestory/Study/issues/" + number,
            {
                headers: {
                    "Authorization": "Basic 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",
                },
            }
        )
        return response
    }

    componentDidMount() {

        if (this.state.results === null) {
            this.getIssues().then(data => this.setState({results: data.data}))
            // .catch(err => { /*...handle the error...*/});
        }
    }

    linkIssue = (rowData) => {
        return (
            <a href={`${rowData.html_url}`} target="_blank" rel="noreferrer">
                <i className="pi pi-github" style={{fontSize: "2em"}}></i>
            </a>
        );
    }


    render() {
        console.log("results ", this.state.results);
        return (
            //
            <div style={{'margin': '10px'}}>
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
                            <td>{result.user.html_url}</td>
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