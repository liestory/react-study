import axios from "axios";
import React from "react";

export const CREATE_ISSUE_STATE = "CREATE_ISSUE_STATE";
export const UPDATE_ISSUE_STATE = "UPDATE_ISSUE_STATE";
export const GET_ISSUE = "GET_ISSUE";
export const GET_ISSUE_STATE = "GET_ISSUE_STATE"
export const DELETE_ISSUE_STATE = "DELETE_ISSUE_STATE"

export const CREATE_ISSUE_COMMENT_STATE = "CREATE_ISSUE_COMMENTS_STATE"
export const GET_ISSUE_COMMENT_STATE = "GET_ISSUE_COMMENTS";
export const UPDATE_ISSUE_COMMENT_STATE = "CREATE_ISSUE_COMMENTS_STATE"
export const DELETE_ISSUE_COMMENT_STATE = "GET_ISSUE_COMMENTS";

export const setCreateIssueState = (value) => ({type: CREATE_ISSUE_STATE, payload: value})
export const setUpdateIssueState = (value) => ({type: UPDATE_ISSUE_STATE, payload: value})
export const setGetIssueState = (value) => ({type: GET_ISSUE_STATE, payload: value})
export const setDeleteIssueState = (value) => ({type: DELETE_ISSUE_STATE, payload: value})

export const setCreateIssueCommentState = (value) => ({type: CREATE_ISSUE_COMMENT_STATE, payload: value})
export const setGetIssueCommentState = (value) => ({type: GET_ISSUE_COMMENT_STATE, payload: value})
export const setUpdateIssueCommentState = (value) => ({type: UPDATE_ISSUE_COMMENT_STATE, payload: value})
export const setDeleteIssueCommentState = (value) => ({type: DELETE_ISSUE_COMMENT_STATE, payload: value})


const token = atob("Z2hwXzFRSEhLeXhGWnVtMzJJVmRqSVo2N2QzOW42Tmc4NjFseE5EMA==");

export const createIssue = (title, body) => {
    return async (dispatch) => {
        await axios.post(
            "https://api.github.com/repos/liestory/react-study/issues",
            {title: title, body: body},
            {
                headers: {
                    Authorization: "token " + token,
                },

            }
        ).then((res) => {
            // dispatch(setCreateIssueState(res.data))
            dispatch(getIssues())
        })
    }
}


export const updateIssue = (number, body) => {
    return async (dispatch) => {
        await axios.get(
            "https://api.github.com/repos/liestory/react-study/issues/" + number,
            {body: body},
            {
                headers: {
                    Authorization: "token " + token,
                },
            }
        ).then((res) => {
            dispatch(setUpdateIssueState(res.data))
        })
    }
}


export const getIssues = () => {
    return async (dispatch) => {
        await axios.get(
            "https://api.github.com/repos/liestory/react-study/issues?state=all",
            {
                headers: {
                    Authorization: "token " + token,
                },
            }
        ).then((res) => {
            // console.log("res", res.data)
            dispatch(setGetIssueState(res.data))
            // console.log("dispatch",)
        })
    }
}


export const deleteIssues = (number) => {
    return async (dispatch) => {
        await axios.get(
            "https://api.github.com/repos/liestory/react-study/issues/" + number,
            {
                headers: {
                    Authorization: "token " + token,
                },
            }
        ).then((res) => {
            dispatch(setGetIssueState(res.data))
        })
    }
}


export const createIssueComment = (number, comment) => {
    console.log("пришел в чпоку", number, comment)
    return async (dispatch) => {
        await axios.get(
            // /repos/{owner}/{repo}/issues/{issue_number}/comments'
            "https://api.github.com/repos/liestory/react-study/issues/" + number + "/comments",

            {body: comment},
            {
                headers: {
                    Authorization: "token " + token,
                },
            }
        ).then((res) => {
            dispatch(getIssueComment(number));
            console.log("чпоку", res.data)
        })
    }
}
export const  getIssueComment = (number) => {
    return async (dispatch) => {
        await axios.get(
            // /repos/{owner}/{repo}/issues/{issue_number}/comments
            "https://api.github.com/repos/liestory/react-study/issues/" + number + "/comments",
            {
                headers: {
                    Authorization: "token " + token,
                },
            }
        ).then((res) => {
            dispatch(setGetIssueCommentState((res.data)));
        })
    }

}