import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import budgetReducer from './budgetReducer'

const rootRouter = combineReducers({
    budget: budgetReducer
})

export default createStore(rootRouter, applyMiddleware(promiseMiddleware))

