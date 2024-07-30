import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Logement from "./page/logement";
import NotFound from "./page/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
