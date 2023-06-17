import {createStore, applyMiddleware} from 'redux'
import { createSlice, configureStore }from "@reduxjs/toolkit";
import countReducer from './count_redux'
import thunk from 'redux-thunk'

export default createStore(countReducer, applyMiddleware(thunk))
