import React from "react";
import { Routes, Route } from "react-router-dom";
//import { HomePage } from "../pages/Home";
import { Initial } from "../pages/Initial";
import { LoginPage } from "../pages/Login";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};
