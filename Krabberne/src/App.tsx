import "./Index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Layout } from "./Layout";
import { Teori } from "./pages/Teori";
import { Opgaver } from "./pages/Opgaver";
import { Story } from "./pages/Story";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/Teori" element={<Teori />} />
          <Route path="/Opgaver" element={<Opgaver />} />
          <Route path="/Story" element={<Story />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
