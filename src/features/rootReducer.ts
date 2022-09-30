import { combineReducers } from '@reduxjs/toolkit'
import barbersReducer from '../features/barbers/barbersSlice'

export default combineReducers({
    barbers: barbersReducer,
})

