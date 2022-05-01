import React from "react";
import { Routes, Route } from "react-router-dom";
import { Collect } from "../pages/CollectPoints";
import { HomePage } from "../pages/Home";
import { Initial } from "../pages/Initial";
import { LoginPage } from "../pages/Login";
import { CollectPage } from "../pages/Collect";
import { CreateDonation } from "../pages/CreateDonation";
import { ColletionsDone } from "../pages/CollectionsDone";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pontos-de-coletas" element={<Collect />} />
        <Route path="/coletar" element={<CollectPage />} />
        <Route path="/create-donation" element={<CreateDonation />} />
        <Route path="/coletas-realizadas" element={<ColletionsDone/>}/>
      </Routes>
    </div>
  );
};
