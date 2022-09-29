import { combineReducers } from '@reduxjs/toolkit'
import pricesReducer from '../features/prices/pricesSlice'

export default combineReducers({
    prices: pricesReducer,
})

