import { Routes as Routing, Route } from "react-router-dom";
import React from "react";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";

export default function Routes() {
  return (
    <Routing>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routing>
  );
}
