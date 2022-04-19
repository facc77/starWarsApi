import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCompleteList } from "../../services/app.service";

export const getEspecies = createAsyncThunk(
  "especies/getEspecies",
  async () => {
    let endpoint = process.env.REACT_APP_ENDPOINT_SPECIES;
    return await getCompleteList(endpoint);
  }
);

const speciesSlice = createSlice({
  name: "species",
  initialState: {
    speciesList: [],
    loading: false,
    active: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    //get------------------------------------
    [getEspecies.pending]: (state, action) => {
      state.loading = true;
    },
    [getEspecies.fulfilled]: (state, action) => {
      action.payload.error
        ? (state.error = action.payload.error)
        : (state.speciesList = action.payload.resp);
      action.payload.next === null
        ? (state.loading = false)
        : (state.loading = true);
    },
    [getEspecies.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    //post-----------------------------------------
    //put-----------------------------------------
    //delete-----------------------------------------
  },
});

export default speciesSlice.reducer;
