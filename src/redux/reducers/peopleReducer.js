import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPage } from "../../services/app.service";

export const getPersonas = createAsyncThunk(
  "personas/getPersonas",
  async (page) => {
    let endpoint = process.env.REACT_APP_ENDPOINT_PEOPLE;
    return await getPage(endpoint, page);
  }
);

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    peopleList: [],
    currentPage: 1,
    firstLoad: true,
    nextPage: true,
    loading: false,
    active: null,
    error: null,
  },
  reducers: {
    setActivePerson(state, action) {
      action.payload ? (state.active = action.payload) : (state.active = null);
    },
  },
  extraReducers: {
    //get------------------------------------
    [getPersonas.pending]: (state, action) => {
      state.loading = true;
    },
    [getPersonas.fulfilled]: (state, action) => {
      action.payload.error
        ? (state.error = action.payload.error)
        : (state.peopleList = [
            ...state.peopleList,
            ...action.payload.resp.results,
          ]);
      if (action.payload.resp.next === null) {
        state.nextPage = false;
      }
      state.loading = false;
      state.firstLoad = false;
      state.currentPage = state.currentPage + 1;
    },
    [getPersonas.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    //post-----------------------------------------
    //put-----------------------------------------
    //delete-----------------------------------------
  },
});

export const { setActivePerson } = peopleSlice.actions;
export default peopleSlice.reducer;
