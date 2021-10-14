import {combineReducers, createStore} from "redux"
import gitReducer from "./GitReducer"

export const reducer = combineReducers({
    git: gitReducer,
    check: gitReducer,
})


export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store

export default store;