import React from "react";
import {connect} from 'react-redux';
import Issues from "./Issues";
import {withRouter} from "react-router";
import {
    createIssue,
    getIssues, updateIssue,
    deleteIssues
} from "../actions/git";


const mapStateToProps = (state) => {
    return {
        issues: state.git.issues
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createIssue: (body) => dispatch(createIssue(body)),
        getIssues: () => dispatch(getIssues()),
        updateIssue: (number, body) => dispatch(updateIssue(number, body)),
        deleteIssues: (number) => dispatch(deleteIssues(number))

    }
}

const IssueContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Issues));
export default IssueContainer;