import React from "react";
import { Routes, Route } from "react-router-dom";
import { MapPage } from "../components/map";
import { HomePage } from "../pages/Home";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};
