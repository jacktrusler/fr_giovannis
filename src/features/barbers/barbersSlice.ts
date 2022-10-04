import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {BarbersScheme} from "../../mongoDB/model/barbers";

interface ReduxBarbersState {
  selectedBarber: BarbersScheme | undefined;
  allBarbers: BarbersScheme[];
  status: string;
  error: string | undefined;
}

const initialState: ReduxBarbersState  = {
  selectedBarber: undefined,
  allBarbers: [],
  status: 'idle',
  error: '',
}

export const fetchBarbers = createAsyncThunk('prices/fetchBarbers', async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/barbers')
    return response.data
  } 
  catch (err) {
    console.log(err)
  }
})

const barbersSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {
    selectBarber(state, action) {
      state.selectedBarber = action.payload; 
    },
    updateBarberPrice(state, action) {
      if (state.selectedBarber !== undefined){
        const priceIndex = 
          state.selectedBarber.prices.findIndex((price: any) => price._id === action.payload._id)
        if (priceIndex !== -1){
          state.selectedBarber.prices[priceIndex] = action.payload
        }
      }
    },
    deleteBarberPrice(state, action) {
      console.log(action.payload)
      if (state.selectedBarber !== undefined){
        const priceIndex = 
          state.selectedBarber.prices.findIndex((price: any) => price._id === action.payload._id)
        if (priceIndex !== -1){
          state.selectedBarber.prices.splice(priceIndex, 1)
        }
      }
    },
    addBarberPrice(state, action) {
      const index = state.allBarbers.findIndex((barber: BarbersScheme) => barber._id === action.payload._id)
      if (index !== -1){
        state.allBarbers[index].prices = action.payload.prices
        if (state.selectedBarber !== undefined) {
          state.selectedBarber.prices = action.payload.prices
        } 
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBarbers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchBarbers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.allBarbers = action.payload
      })
      .addCase(fetchBarbers.rejected, (state, action) => {
        state.status = 'failed'
        if (action.payload) {
          state.error = action.payload as string
        } else {
          state.error = action.error.message
        }

      })
  }
})

export const {selectBarber, updateBarberPrice, addBarberPrice, deleteBarberPrice} = barbersSlice.actions
export default barbersSlice.reducer
