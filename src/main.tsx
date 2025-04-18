import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../app/globals.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
