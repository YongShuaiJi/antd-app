import {createStore} from 'redux'
import { createSlice, configureStore }from "@reduxjs/toolkit";
import countReducer from './count_redux'

export default createStore(countReducer)
