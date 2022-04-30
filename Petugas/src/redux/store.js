import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

const rootReducer = combineReducers({ userReducer });
//const storeState = createStore(userReducer);

export const Store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
//export default storeState