import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAnswer = createAsyncThunk(
  "create/sendAnswer",
  async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/questions/create`)
    const data = await response.json();
    return data
  }
)

export const sendAnswer = createAsyncThunk("create/sendAnswer", async (data) => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/questions/create`, {
    mode: 'no-cors',
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
      const question = state.questions.filter((question) => question.number !== action.payload.number);
      state.questions = question;
      state.questions.push(action.payload);
    },
    removeAnswer: (state, action) => {
      state.questions = [];
    },
    removeAll: (state, action) => {
      state.questions = [];
      state.location = null;
    }
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

export const { addLocation, addAnswer, removeAnswer, removeAll } = answerSlice.actions;
export default answerSlice.reducer;