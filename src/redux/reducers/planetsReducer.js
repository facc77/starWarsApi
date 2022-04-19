import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCompleteList } from "../../services/app.service";

export const getPlanetas = createAsyncThunk(
  "planetas/getPlanetas",
  async () => {
    let endpoint = process.env.REACT_APP_ENDPOINT_PLANETS;
    return await getCompleteList(endpoint);
  }
);

const planetasSlice = createSlice({
  name: "planetas",
  initialState: {
    planetasList: [],
    loading: false,
    active: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    //get------------------------------------
    [getPlanetas.pending]: (state, action) => {
      state.loading = true;
    },
    [getPlanetas.fulfilled]: (state, action) => {
      action.payload.error
        ? (state.error = action.payload.error)
        : (state.planetasList = action.payload.resp);
      action.payload.next === null
        ? (state.loading = false)
        : (state.loading = true);
    },
    [getPlanetas.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    //post-----------------------------------------
    //put-----------------------------------------
    //delete-----------------------------------------
  },
});

export default planetasSlice.reducer;
