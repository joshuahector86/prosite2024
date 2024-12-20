import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../app/globals.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/toaster.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>
);
