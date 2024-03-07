import { Route, Routes } from "react-router-dom";
import { ContactMe, Experience, Heading, Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Heading />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<ContactMe />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
}

export default App;
