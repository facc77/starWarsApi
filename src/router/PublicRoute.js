import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PersonDetail from "../pages/PersonDetail";

const PublicRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personDetail" element={<PersonDetail />} />
      </Routes>
    </>
  );
};

export default PublicRoute;
