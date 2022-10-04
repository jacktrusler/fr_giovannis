import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ReduxBarbersState {
  allBarbers: any;
  status: string;
  error: string | undefined;
}

const initialState: ReduxBarbersState  = {
  allBarbers: [],
  status: 'idle',
  error: '',
}

export const fetchBarbers = createAsyncThunk('prices/fetchBarbers', async (_, {rejectWithValue}) => {
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
    addBarberPrice(state, action) {
      console.log(action.payload)
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

export const { addBarberPrice } = barbersSlice.actions
export default barbersSlice.reducer
