import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { Index } from "./Pages/Index";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};
