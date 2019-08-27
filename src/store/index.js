import {createStore , combineReducers , applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import ChioceNess from "./reducers/chioceness/reducers.js"

const reducer = combineReducers({
    ChioceNess
})

const store = createStore(reducer,applyMiddleware(reduxThunk))

export default store;

