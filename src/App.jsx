import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { AppProvider } from "./context/AppContext";
import { GlobalStyle } from "./styles/global";

export function App() {
	return (
		<BrowserRouter>
			<AppProvider>
				<Routes />
				<GlobalStyle />
			</AppProvider>
		</BrowserRouter>
	);
}
