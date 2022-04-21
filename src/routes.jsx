import { Routes as Routing, Route } from "react-router-dom";
import React from "react";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { TermsPrivacy } from "./pages/TermsPrivacy";

export default function Routes() {
  return (
    <Routing>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/terms" element={<TermsPrivacy />} />
    </Routing>
  );
}
