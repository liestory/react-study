import React from 'react';
import {connect} from "react-redux";
import {getIssueComment,} from "../../actions/git";
import CreateCommentModal from "./CreateCommentModal";


const mapStateToProps = (state) => {
    return {
        comments: state.gitRed.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getIssueComment: (number) => dispatch(getIssueComment(number)),
        createIssueComment: (number, comment) => dispatch(createIssueComment(number, comment)),

    };

}

const CreateCommentContainer = connect(mapStateToProps, mapDispatchToProps)(CreateCommentModal);

export default CreateCommentContainer;