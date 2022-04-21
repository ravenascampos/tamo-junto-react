import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { AppProvider } from "./context/AppContext";
import { GlobalStyle } from "./styles/global";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
        <Routes />
        <GlobalStyle />
        <Footer />
      </AppProvider>
    </BrowserRouter>
  );
}
