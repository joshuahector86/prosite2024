import { Route, Routes } from "react-router-dom";
import { ContactMe, Experience, Heading, Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/prosite2024" element={<Heading />} />
      <Route path="/prosite2024/home" element={<Home />} />
      <Route path="/prosite2024/contact" element={<ContactMe />} />
      <Route path="/prosite2024/experience" element={<Experience />} />
    </Routes>
  );
}

export default App;
