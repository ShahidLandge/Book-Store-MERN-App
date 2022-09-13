import { userReducer } from "./loginReducer"
import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

const reducer = combineReducers({
    user: userReducer
})
export const store = createStore(reducer ,applyMiddleware(thunk))