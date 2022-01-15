import { applyMiddleware, combineReducers, createStore } from "redux"
import  thunkMiddleware from 'redux-thunk'
import ownerReducer from "./ownerReducer"


let reducers = combineReducers({
 owner: ownerReducer
 
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store