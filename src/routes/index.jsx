import React from "react";
import { Routes, Route } from "react-router-dom";
import { Collect } from "../pages/CollectPoints";
import { HomePage } from "../pages/Home";
import { Initial } from "../pages/Initial";
import { LoginPage } from "../pages/Login";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pontos-de-coletas" element={<Collect />} />
      </Routes>
    </div>
  );
};
