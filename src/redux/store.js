import {combineReducers, createStore, applyMiddleware} from "redux"
import thunk from 'redux-thunk';

import gitReducer from "./GitReducer"

export const reducer = combineReducers({
    git: gitReducer,
})


export const store = createStore(reducer, applyMiddleware(thunk))

window.store = store

export default store;