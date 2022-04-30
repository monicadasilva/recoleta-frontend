import React from "react";
import { Routes, Route } from "react-router-dom";
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
