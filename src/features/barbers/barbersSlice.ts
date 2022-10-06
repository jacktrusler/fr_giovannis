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
    const response = await axios.get('api/barbers')
    return response.data
  } 
  catch (err) {
    console.log(err)
  }
})

const barbersSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {},
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

export default barbersSlice.reducer
