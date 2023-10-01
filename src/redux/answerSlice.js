import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAnswer = createAsyncThunk(
    "create/sendAnswer",
    async () => {
      const response = await fetch("http://localhost:3000/questions/create")
      const data = await response.json();
      return data
    }
  )

export const sendAnswer = createAsyncThunk("create/sendAnswer", async (data) => {
  console.log(data)  
  return fetch("http://localhost:3000/questions/create", {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify(data
        )
    })
    .then((res) => res.json())
    .then((json) => console.log(json));
})

export const answerSlice = createSlice({
    name: "answer",
    initialState: {
        questions: [],
        location: ' ',
        loading: false,
        err:''
    },
    reducers: {
        addLocation: (state, action) => {
            state.location = action.payload;
          }
    },
    extraReducers:(builder)=>{
	    builder
	    .addCase(fetchAnswer.pending,(state)=>{
	      state.loading=true
	    })
	    .addCase(fetchAnswer.fulfilled,(state,action)=>{
	      state.loading=false
	      state.questions = action.payload
	    })
	    .addCase(fetchAnswer.rejected,(state,action)=>{
	      state.loading=false
	      state.err=action.error.message
	    })
	  }
});

export const { addLocation } = answerSlice.actions;
export default answerSlice.reducer;