import { Routes as Routing, Route } from "react-router-dom";
import React from "react";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { TermsPrivacy } from "./pages/TermsPrivacy";
import { NotFound } from "./pages/NotFound";
import {ContactUs} from "./pages/ContactUs";

export default function Routes() {
	return (
		<Routing>
			<Route path="/" element={<Home />} />
			<Route path="/register" element={<Register />} />
			<Route path="/terms" element={<TermsPrivacy />} />
			<Route path="/contact" element={<ContactUs />} />
			<Route path="*" element={<NotFound />} />
		</Routing>
	);
}
