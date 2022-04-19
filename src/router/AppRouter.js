import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersonas } from "../redux/reducers/peopleReducer";
import { getEspecies } from "../redux/reducers/speciesReducer";
import { getPlanetas } from "../redux/reducers/planetsReducer";
import { getVehiculos } from "../redux/reducers/vehiclesReducer";
import PublicRoute from "../router/PublicRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.people);

  useEffect(() => {
    dispatch(getEspecies());
    dispatch(getPersonas(currentPage));
    dispatch(getPlanetas());
    dispatch(getVehiculos());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Espacio para ruta privada */}
        <Route path="/*" element={<PublicRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
