import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addLocation } from './answerSlice';

const initialState = {
    loading: false,
    error: false,
    location: '',
    success: false,
}

export const userLogin = createAsyncThunk("auth/login", async (data) => {
    return fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data
        )
    })
        .then((res) => res.json())
        .then((data) => {console.log(data)
        addLocation(data.location)
        });
})


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addLocation: (state, action) => {
            state.location = action.payload;
          }
    },
    extraReducers: (builder) => {
        builder
          .addCase(userLogin.pending, (state) => {
            state.loading = true
          })
          .addCase(userLogin.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
          })
          .addCase(userLogin.rejected, (state, action) => {
            state.loading = false
            state.error = true
          })
      }
})
export default authSlice.reducer