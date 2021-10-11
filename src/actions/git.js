import axios from "axios";
import React from "react";


const getIssues = async () => {
    let response = await axios.get(
        "https://api.github.com/repos/liestory/Study/issues?state=all",
        {
            headers: {
                Authorization: "Basic " + btoa("liestory:" + token),
                // "Authorization": "token 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",
            },
        }
    )
    return response
}


const createIssue = async (body) => {
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


const updateIssues = async (number, body) => {
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

const deleteIssues = async (number) => {
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


const linkIssue = (rowData) => {
    return (
        <a href={`${rowData.html_url}`} target="_blank" rel="noreferrer">
            <i className="pi pi-github" style={{fontSize: "2em"}}></i>
        </a>
    );
}


export default {
    getIssues,
    createIssue,
    updateIssues,
    deleteIssues,
    linkIssue
};