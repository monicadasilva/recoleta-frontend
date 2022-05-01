import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { Collect  } from '../pages/Collect'

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/coletar" element={<Collect/>}/>
      </Routes>
    </div>
  );
};
