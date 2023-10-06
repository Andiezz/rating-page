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
  return fetch("http://localhost:3000/questions/create", {
    method: "POST",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      questions: data
    }
    )
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
})


export const answerSlice = createSlice({
  name: "answer",
  initialState: {
    questions: [],
    location: null,
    loading: false,
    err: false
  },
  reducers: {
    addLocation: (state, action) => {
      state.location = action.payload;
    },
    addAnswer: (state, action) => {
      state.questions.push(action.payload);
    },
    removeAnswer: (state, action) => {
      state.questions = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnswer.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchAnswer.fulfilled, (state, action) => {
        state.loading = false
        state.questions = action.payload
      })
      .addCase(fetchAnswer.rejected, (state, action) => {
        state.loading = false
        state.err = true
      })
  }
});

export const { addLocation, addAnswer, removeAnswer } = answerSlice.actions;
export default answerSlice.reducer;