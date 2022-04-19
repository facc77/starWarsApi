import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./reducers/peopleReducer";
import speciesReducer from "./reducers/speciesReducer";
import planetasReducer from "./reducers/planetsReducer";
import vehiculosReducer from "./reducers/vehiclesReducer";

export const store = configureStore({
  reducer: {
    people: peopleReducer,
    planets: planetasReducer,
    species: speciesReducer,
    vehicles: vehiculosReducer,
  },
});
