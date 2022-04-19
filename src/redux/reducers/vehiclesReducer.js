import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCompleteList } from "../../services/app.service";

export const getVehiculos = createAsyncThunk(
  "vehiculos/getVehiculos",
  async () => {
    let endpoint = process.env.REACT_APP_ENDPOINT_VEHICLES;
    return await getCompleteList(endpoint);
  }
);

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: {
    vehiclesList: [],
    loading: false,
    active: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    //get------------------------------------
    [getVehiculos.pending]: (state, action) => {
      state.loading = true;
    },
    [getVehiculos.fulfilled]: (state, action) => {
      action.payload.error
        ? (state.error = action.payload.error)
        : (state.vehiclesList = action.payload.resp);
      action.payload.next === null
        ? (state.loading = false)
        : (state.loading = true);
    },
    [getVehiculos.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    //post-----------------------------------------
    //put-----------------------------------------
    //delete-----------------------------------------
  },
});

export default vehiclesSlice.reducer;
