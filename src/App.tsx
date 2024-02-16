import { Route, Routes } from "react-router-dom";
import { AboutMe, ContactMe, Experience, Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/contact" element={<ContactMe />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
}

export default App;
