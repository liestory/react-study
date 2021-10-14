import React from "react";
import {connect} from 'react-redux';
import Issues from "./Issues";
import {withRouter} from "react-router";


const mapStateToProps = (state) => {
    return {
        issues: state.git.issues
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // createIssue: (issue) => dispatch((issue))
    }
}

const IssueContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Issues));
export default IssueContainer;