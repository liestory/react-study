import {
    CREATE_ISSUE_COMMENT_STATE,
    CREATE_ISSUE_STATE,
    CLOSE_ISSUE_STATE,
    GET_ISSUE,
    GET_ISSUE_COMMENT_STATE,
    GET_ISSUE_STATE,
    UPDATE_ISSUE_STATE
} from "../actions/git"

const initialState = {
    issues: null,
    comments: null
};


const gitReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ISSUE_STATE:
            return {
                ...state,
                issues: action.payload
            };
        case UPDATE_ISSUE_STATE:
            return {
                ...state,
                issues: action.payload
            };
        case GET_ISSUE:
            return {
                ...state,
                issues: action.payload
            };

        case GET_ISSUE_STATE:
            return {
                ...state,
                issues: action.payload
            };
        case CLOSE_ISSUE_STATE:
            return {
                ...state,
                issues: action.payload
            };
        case GET_ISSUE_COMMENT_STATE:
            return {
                ...state,
                comments: action.payload
            }
        case CREATE_ISSUE_COMMENT_STATE :
            return {
                ...state,
                comments: action.payload
            }


        default:
            return state;
    }
};

export default gitReducer;