import axios from "axios";
import React from "react";


// export const CREATE_ISSUE = "CREATE_ISSUE";
export const CREATE_ISSUE_STATE = "CREATE_ISSUE_STATE";

// export const UPDATE_ISSUE = "UPDATE_ISSUE";
export const UPDATE_ISSUE_STATE = "UPDATE_ISSUE_STATE";

// export const GET_ISSUE = "GET_ISSUE";
export const GET_ISSUE_STATE = "GET_ISSUE_STATE"

// export const DELETE_ISSUE = "DELETE_ISSUE"
export const DELETE_ISSUE_STATE = "DELETE_ISSUE_STATE"

export const setCreateIssueState = (value) => ({type: CREATE_ISSUE_STATE, payload: value})
export const setUpdateIssueState = (value) => ({type: UPDATE_ISSUE_STATE, payload: value})
export const setGetIssueState = (value) => ({type: GET_ISSUE_STATE, payload: value})
export const setDeleteIssueState = (value) => ({type: DELETE_ISSUE_STATE, payload: value})


const createIssue = async (body) => {
    return async dispatch => {
        await axios.post(
            "https://api.github.com/repos/liestory/Study/issues",
            {
                headers: {
                    uthorization: "Basic " + btoa("liestory:" + token),
                },
                body,
            }
        ).then((res) => {
            dispatch(setCreateIssueState(res.data))
        })
    }
}


const updateIssues = async (number, body) => {
    return async dispatch => {
        await axios.get(
            "https://api.github.com/repos/liestory/Study/issues/" + number,
            {
                headers: {
                    uthorization: "Basic " + btoa("liestory:" + token),
                },
                body,
            }
        ).then((res) => {
            dispatch(setUpdateIssueState(res.data))
        })
    }
}


const getIssues = async () => {
    return async dispatch => {
        await axios.get(
            "https://api.github.com/repos/liestory/Study/issues?state=all",
            {
                headers: {
                    Authorization: "Basic " + btoa("liestory:" + token),
                    // "Authorization": "token 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",
                },
            }
        ).then((res) => {
            dispatch(setGetIssueState(res.data))
        })
    }
}

const deleteIssues = async (number) => {
    return async dispatch => {
        await axios.get(
            "https://api.github.com/repos/liestory/Study/issues/" + number,
            {
                headers: {
                    uthorization: "Basic " + btoa("liestory:" + token),
                },
            }
        ).then((res) => {
            dispatch(setGetIssueState(res.data))
        })
    }
}


const linkIssue = (rowData) => {
    return (
        <a href={`${rowData.html_url}`} target="_blank" rel="noreferrer">
            <i className="pi pi-github" style={{fontSize: "2em"}}></i>
        </a>
    );
}


export default {
    setCreateIssueState,
    setUpdateIssueState,
    setGetIssueState,
    setDeleteIssueState,

    getIssues,
    createIssue,
    updateIssues,
    deleteIssues,
    linkIssue
};