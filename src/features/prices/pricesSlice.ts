import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {BarberPrices, PriceData} from "../../data/priceData";

interface ReduxPricesState {
  allPrices: PriceData[];
  status: string;
  error: string | undefined;
}

const initialState: ReduxPricesState  = {
  allPrices: [],
  status: 'idle',
  error: '',
}

export const fetchPrices = createAsyncThunk('prices/fetchPrices', async (_, {rejectWithValue}) => {
  try {
    const response = await axios.get('http://localhost:3000/api/prices')
    return response.data
  } 
  catch (err) {
    console.log(err)
  }
})

const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPrices.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPrices.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.allPrices = action.payload
      })
      .addCase(fetchPrices.rejected, (state, action) => {
        state.status = 'failed'
        if (action.payload) {
          state.error = action.payload as string
        } else {
          state.error = action.error.message
        }

      })
  }
})

export default pricesSlice.reducer
