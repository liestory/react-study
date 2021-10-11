import {combineReducers, createStore} from "redux"
import gitReducer from "./GitReducer"

export const reducer = combineReducers({
    git: gitReducer,
})


export const store = createStore(reducer)

window.store = store

export default store;